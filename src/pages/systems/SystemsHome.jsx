import React from 'react';
import { ChevronRight, Cable, Cpu, Wrench, Settings, Send } from 'lucide-react';
import { useLanguage } from '../../components/LanguageContext';
import './SystemsHome.css';

const SystemsHome = () => {
  const { t } = useLanguage();

  return (
    <div className="systems-page">
      {/* Hero Section */}
      <section className="systems-hero">
        <div className="systems-hero-glow"></div>
        <div className="container">
          <div className="systems-hero-content">
            <h1 className="sys-hero-title">
              {t['sys.heroTitle']}
            </h1>
            <p className="sys-hero-subtitle">
              {t['sys.heroSubtitle']}
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button className="btn" style={{ background: 'var(--sys-accent)', color: '#fff', padding: '14px 32px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                {t['sys.btnQuote']} <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Endüstriyel Hizmet Kartları */}
      <section className="sys-services">
        <div className="container">
          <div className="sys-services-grid">
            <div className="sys-service-card">
              <div className="sys-icon-wrapper">
                <Cable size={32} />
              </div>
              <h3>{t['sys.f1Title']}</h3>
              <p>{t['sys.f1Desc']}</p>
            </div>

            <div className="sys-service-card">
              <div className="sys-icon-wrapper">
                <Cpu size={32} />
              </div>
              <h3>{t['sys.f2Title']}</h3>
              <p>{t['sys.f2Desc']}</p>
            </div>

            <div className="sys-service-card">
              <div className="sys-icon-wrapper">
                <Settings size={32} />
              </div>
              <h3>{t['sys.f3Title']}</h3>
              <p>{t['sys.f3Desc']}</p>
            </div>

            <div className="sys-service-card">
              <div className="sys-icon-wrapper">
                <Wrench size={32} />
              </div>
              <h3>{t['sys.f4Title']}</h3>
              <p>{t['sys.f4Desc']}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Süreç Timeline Section */}
      <section className="sys-process">
        <div className="container">
          <div className="text-center">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Kurulum & Devreye Alma Süreçlerimiz</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Fikirden endüstriyel üretime uzanan anahtar teslim adımlarımız.</p>
          </div>

          <div className="timeline">
            {[1, 2, 3, 4, 5].map((step) => (
              <div className="timeline-item" key={step}>
                <div className="timeline-marker">{step}</div>
                <div className="timeline-content">
                  <h4>{t[`sys.tl${step}`]}</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{t[`sys.tl${step}Desc`]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proje Formu CTA */}
      <section className="sys-cta-section">
        <div className="container sys-form-grid">
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{t['sys.formTitle']}</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>
              {t['sys.formSubtitle']}
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                <strong style={{ display: 'block', color: 'var(--sys-accent)', marginBottom: '8px' }}>ISO 9001:2015</strong>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Kalite Sertifikasyonu</span>
              </div>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                <strong style={{ display: 'block', color: 'var(--sys-accent)', marginBottom: '8px' }}>7/24 Saha</strong>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Mühendislik Desteği</span>
              </div>
            </div>
          </div>
          
          <div style={{ background: 'var(--bg-elevated)', padding: '40px', borderRadius: '16px', color: 'var(--text-primary)' }}>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Firma Adı" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="E-Posta" required />
              </div>
              <div className="form-group">
                <select className="form-input" required>
                  <option value="">Proje Türü Seçin</option>
                  <option value="elektrik">Şalt Pano / Elektrik İhtiyacı</option>
                  <option value="otomasyon">Otomasyon & SCADA</option>
                  <option value="montaj">Üretim Hattı Montajı</option>
                </select>
              </div>
              <div className="form-group">
                <textarea className="form-textarea" placeholder="Saha büyüklüğü ve özel gereksinimlerden kısaca bahsedin..." rows="4" required></textarea>
              </div>
              <button className="btn" style={{ background: 'var(--sys-accent)', color: '#fff', width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                <Send size={18} /> Talebi Mühendislere Gönder
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemsHome;
