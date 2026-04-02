import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === 'en';

  const [formData, setFormData] = useState({
    adSoyad: '', sirket: '', email: '', telefon: '', mesaj: '', kvkk: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.kvkk && formData.adSoyad && formData.email) {
      setTimeout(() => { setIsSubmitted(true); }, 800);
    }
  };

  if (isSubmitted) {
    return (
      <div className="page contact-page">
        <div className="container" style={{ paddingTop: '160px', minHeight: '80vh' }}>
          <div className="success-message text-center glass-panel" style={{ padding: '60px 24px', maxWidth: '600px', margin: '0 auto' }}>
            <CheckCircle size={64} style={{ color: 'var(--success)', margin: '0 auto 24px' }} />
            <h2 className="mb-4">{isEn ? "Message Received" : "Mesajınız Alındı"}</h2>
            <p className="text-secondary">{isEn ? "We will contact you as soon as possible." : "En kısa sürede sizinle iletişime geçeceğiz."}</p>
            <Link to="/" className="btn btn-primary mt-8">{isEn ? "Return to Home Page" : "Ana Sayfaya Dön"}</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page contact-page">
      <section className="page-hero" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80')"}}>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-container">
          <h1 className="page-title">{t['header.contact']}</h1>
          <p className="page-subtitle">{isEn ? "Write your question or use the quote form if you have a file." : "Sorunuzu yazın veya dosyanız varsa teklif formunu kullanın."}</p>
          <div className="hero-actions justify-center">
            <Link to="/teklif-al" className="btn btn-primary">{t['header.quote']} <ChevronRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="contact-layout-grid">
            
            <div className="contact-info">
              <h2 className="mb-8">{isEn ? "Contact Us" : "Bize Ulaşın"}</h2>
              <div className="info-card glass-panel mb-4" style={{ padding: '32px', textAlign: 'left', alignItems: 'flex-start' }}>
                <Phone size={24} style={{ color: 'var(--accent-primary)', marginBottom: '16px' }} />
                <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>{isEn ? "Phone" : "Telefon"}</h3>
                <a href="tel:+905528345323" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>+90 552 834 5323</a>
              </div>
              <div className="info-card glass-panel mb-4" style={{ padding: '32px', textAlign: 'left', alignItems: 'flex-start' }}>
                <Mail size={24} style={{ color: 'var(--accent-primary)', marginBottom: '16px' }} />
                <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>{isEn ? "Email" : "E-posta"}</h3>
                <a href="mailto:Harveniq@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>Harveniq@gmail.com</a>
              </div>
              <div className="info-card glass-panel" style={{ padding: '32px', textAlign: 'left', alignItems: 'flex-start' }}>
                <MapPin size={24} style={{ color: 'var(--accent-primary)', marginBottom: '16px' }} />
                <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>{isEn ? "Location" : "Konum"}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>İstanbul, Türkiye</p>
              </div>
            </div>

            <div className="contact-form glass-panel" style={{ padding: '48px' }}>
              <h3 className="mb-8" style={{ fontSize: '1.5rem' }}>{isEn ? "Send a Message" : "Mesaj Gönderin"}</h3>
              <form onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <div className="form-group">
                    <label className="form-label">{isEn ? "Full Name" : "Ad Soyad"}</label>
                    <input type="text" name="adSoyad" required value={formData.adSoyad} onChange={handleChange} className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{isEn ? "Company Name" : "Şirket Adı"}</label>
                    <input type="text" name="sirket" value={formData.sirket} onChange={handleChange} className="form-input" />
                  </div>
                </div>
                
                <div className="contact-form-grid">
                  <div className="form-group">
                    <label className="form-label">{isEn ? "Email" : "E-posta"}</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{isEn ? "Phone" : "Telefon"}</label>
                    <input type="tel" name="telefon" value={formData.telefon} onChange={handleChange} className="form-input" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{isEn ? "Your Message" : "Mesajınız"}</label>
                  <textarea name="mesaj" rows="5" required value={formData.mesaj} onChange={handleChange} className="form-textarea"></textarea>
                </div>
                
                <div className="form-group checkbox-group mt-4 mb-8">
                  <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <input type="checkbox" name="kvkk" required checked={formData.kvkk} onChange={handleChange} className="form-checkbox" />
                    <span><Link to="/kvkk" target="_blank" style={{color: 'var(--accent-secondary)', textDecoration: 'underline'}}>{t['footer.kvkk']}</Link>{isEn ? " - I have read and accept." : "'ni okudum ve kabul ediyorum."} *</span>
                  </label>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  {isEn ? "Send Message" : "Mesajı Gönder"} <ChevronRight size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
