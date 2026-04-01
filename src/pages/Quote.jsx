import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Upload, CheckCircle, Loader } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import emailjs from '@emailjs/browser';
import { uploadQuoteFile } from '../services/supabase';
import './Quote.css';

const Quote = () => {
  const { t, lang } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parcaKodu: '',
    adet: '',
    malzeme: '',
    yuzey: '',
    tolerans: '',
    aciklama: '',
    adSoyad: '',
    sirket: '',
    email: '',
    telefon: '',
    sehir: '',
    kvkk: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.parcaKodu) newErrors.parcaKodu = "*";
      if (!formData.adet || isNaN(formData.adet) || Number(formData.adet) < 1) newErrors.adet = "*";
      if (!formData.malzeme) newErrors.malzeme = "*";
    } else if (currentStep === 3) {
      if (!formData.adSoyad || formData.adSoyad.length < 2) newErrors.adSoyad = "*";
      if (!formData.sirket || formData.sirket.length < 2) newErrors.sirket = "*";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = "*";
      if (!formData.telefon || formData.telefon.length < 10) newErrors.telefon = "*";
    } else if (currentStep === 4) {
      if (!formData.kvkk) newErrors.kvkk = "*";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(4)) {
      setIsSubmitting(true);
      try {
        let fileUrl = 'Dosya yüklenmedi';
        if (selectedFile) {
          // Önce dosyayı Supabase bulutuna yükle
          fileUrl = await uploadQuoteFile(selectedFile);
        }

        // EmailJS'e gidecek değişkenler
        const templateParams = {
          ...formData,
          file_link: fileUrl
        };

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // E-postayı fırlat
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        
        setIsSubmitted(true);
      } catch (err) {
        console.error('Yükleme/Gönderim hatası:', err);
        alert(lang === 'tr' ? 'Sunucu bağlantısında hata oluştu. Lütfen dosya boyutunu veya internetinizi kontrol edin.' : 'Connection error. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="page quote-page">
        <div className="container quote-container" style={{ paddingTop: '120px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <div className="success-message text-center glass-panel" style={{ padding: '60px 24px', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
            <CheckCircle size={64} className="success-icon" style={{ color: 'var(--success)', margin: '0 auto 24px' }} />
            <h2 className="mb-4">{t['quote.success']}</h2>
            <p className="mb-8 text-secondary">{t['quote.refId']} <strong>HQ-2026-{(Math.floor(Math.random() * 90000) + 10000)}</strong></p>
            <p className="mb-8">{t['quote.successDesc']}</p>
            <Link to="/proses" className="btn btn-primary">{t['quote.successBtn']} <ChevronRight size={18} /></Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page quote-page">
      <div className="container quote-container">
        <div className="quote-header text-center">
          <h1 className="page-title">{t['quote.title']}</h1>
          <p className="page-subtitle">{t['quote.subtitle']}</p>
          <div className="secure-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--success)' }}>
            <CheckCircle size={14} /> <span>{t['quote.secure']}</span>
          </div>
        </div>

        <div className="wizard-container glass-panel">
          <div className="wizard-progress">
            {[1, 2, 3, 4].map(num => (
              <div key={num} className={`progress-step ${step >= num ? 'active' : ''}`}>
                <div className="step-num">{num}</div>
                <div className="step-label">
                  {num === 1 ? t['quote.step1'] : num === 2 ? t['quote.step2'] : num === 3 ? t['quote.step3'] : t['quote.step4']}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="wizard-form">
            {step === 1 && (
              <div className="wizard-step">
                <h3 className="step-title">{t['quote.partInfo']}</h3>
                <div className="form-group">
                  <label className="form-label">{t['quote.partName']} <span className="text-danger">*</span></label>
                  <input type="text" name="parcaKodu" value={formData.parcaKodu} onChange={handleChange} className="form-input" placeholder={t['quote.partNameDesc']} />
                </div>
                
                <div className="grid col-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">{t['quote.quantity']} <span className="text-danger">*</span></label>
                    <input type="number" name="adet" value={formData.adet} onChange={handleChange} className="form-input" min="1" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t['quote.material']} <span className="text-danger">*</span></label>
                    <select name="malzeme" value={formData.malzeme} onChange={handleChange} className="form-select">
                      <option value="">{t['quote.select']}</option>
                      <option value="Alüminyum">Alüminyum</option>
                      <option value="Karbon Celik">Karbon Çelik</option>
                      <option value="Paslanmaz">Paslanmaz Çelik</option>
                      <option value="Pirinc">Pirinç</option>
                      <option value="Plastik">Plastik (POM/PA vb.)</option>
                      <option value="Diger">Diğer</option>
                    </select>
                  </div>
                </div>

                <div className="grid col-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">{t['quote.surface']}</label>
                    <input type="text" name="yuzey" value={formData.yuzey} onChange={handleChange} className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t['quote.tolerance']}</label>
                    <input type="text" name="tolerans" value={formData.tolerans} onChange={handleChange} className="form-input" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="wizard-step">
                <h3 className="step-title">{t['quote.fileStep']}</h3>
                <label className="file-upload-zone" style={{ display: 'block', cursor: 'pointer', border: '2px dashed var(--border-color)', padding: '40px', textAlign: 'center', borderRadius: '12px', background: 'var(--bg-elevated)', transition: 'all 0.3s' }}>
                  <input type="file" style={{ display: 'none' }} onChange={(e) => setSelectedFile(e.target.files[0])} accept=".step,.stp,.dwg,.dxf,.pdf,.zip,.rar" />
                  <Upload size={48} className="upload-icon mb-4" style={{ margin: '0 auto', color: selectedFile ? 'var(--success)' : 'var(--accent-primary)' }} />
                  <h4 style={{ color: selectedFile ? 'var(--success)' : 'inherit' }}>{selectedFile ? selectedFile.name : t['quote.fileDesc']}</h4>
                  <p className="text-secondary mb-4 mt-2">{selectedFile ? (lang === 'en' ? "File successfully added." : "Dosya başarıyla seçildi.") : t['quote.fileLimits']}</p>
                </label>

                <div className="form-group mt-8">
                  <label className="form-label">{t['quote.desc']}</label>
                  <textarea name="aciklama" value={formData.aciklama} onChange={handleChange} className="form-textarea" rows="4" placeholder={t['quote.descPlace']}></textarea>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="wizard-step">
                <h3 className="step-title">{t['quote.contactStep']}</h3>
                <div className="grid col-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">{t['quote.name']} <span className="text-danger">*</span></label>
                    <input type="text" name="adSoyad" value={formData.adSoyad} onChange={handleChange} className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t['quote.company']} <span className="text-danger">*</span></label>
                    <input type="text" name="sirket" value={formData.sirket} onChange={handleChange} className="form-input" />
                  </div>
                </div>

                <div className="grid col-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">{t['quote.email']} <span className="text-danger">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t['quote.phone']} <span className="text-danger">*</span></label>
                    <input type="tel" name="telefon" value={formData.telefon} onChange={handleChange} className="form-input" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">{t['quote.city']}</label>
                  <input type="text" name="sehir" value={formData.sehir} onChange={handleChange} className="form-input" />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="wizard-step">
                <h3 className="step-title">{t['quote.approveStep']}</h3>
                <p className="mb-8">{t['quote.approveDesc']}</p>
                
                <div className="form-group checkbox-group">
                  <label className="checkbox-label" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <input type="checkbox" name="kvkk" checked={formData.kvkk} onChange={handleChange} className="form-checkbox" />
                    <span><Link to="/kvkk" target="_blank" className="text-link" style={{ color: 'var(--accent-primary)' }}>{t['footer.kvkk']}</Link> - {t['quote.kvkkLabel']} <span className="text-danger">*</span></span>
                  </label>
                </div>
              </div>
            )}

            <div className="wizard-actions" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="btn btn-secondary">
                  <ChevronLeft size={18} /> {t['quote.back']}
                </button>
              ) : <div></div>}

              {step < 4 ? (
                <button type="button" onClick={nextStep} className="btn btn-primary">
                  {t['quote.continue']} <ChevronRight size={18} />
                </button>
              ) : (
                <button type="submit" className="btn btn-primary" style={{backgroundColor: 'var(--success)'}} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Loader size={18} /> {lang === 'tr' ? 'Yükleniyor ve Gönderiliyor...' : 'Sending...'}
                    </span>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {t['quote.submit']} <CheckCircle size={18} />
                    </span>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
