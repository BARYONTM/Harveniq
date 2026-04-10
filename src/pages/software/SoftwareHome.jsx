import React from 'react';
import { ChevronRight, LayoutDashboard, Calculator, BarChart3, Cpu, Code, Database, Zap } from 'lucide-react';
import { useLanguage } from '../../components/LanguageContext';
import './SoftwareHome.css';

const SoftwareHome = () => {
  const { t } = useLanguage();

  return (
    <div className="software-page">
      {/* Hero Section */}
      <section className="software-hero">
        <div className="container">
          <div className="software-hero-content">
            <h1 className="sw-hero-title">{t['sw.heroTitle']}</h1>
            <p className="sw-hero-subtitle">{t['sw.heroSubtitle']}</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1.1rem' }}>
                {t['sw.btnDemo']} <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Yazılım Arayüzü (Dashboard) Mockup */}
          <div className="sw-mockup-wrapper">
            <div className="sw-mockup-container">
              <div className="sw-mockup-header">
                <div className="sw-mockup-dot"></div>
                <div className="sw-mockup-dot"></div>
                <div className="sw-mockup-dot"></div>
              </div>
              <div className="sw-mockup-body">
                {/* Sol Menü (Skeleton) */}
                <div className="sw-mockup-sidebar">
                  <div className="sw-mockup-skeleton" style={{ width: '80%', height: '32px', marginBottom: '24px' }}></div>
                  <div className="sw-mockup-skeleton" style={{ width: '60%' }}></div>
                  <div className="sw-mockup-skeleton" style={{ width: '70%' }}></div>
                  <div className="sw-mockup-skeleton" style={{ width: '50%' }}></div>
                  <div className="sw-mockup-skeleton" style={{ width: '65%' }}></div>
                </div>
                {/* Ana İçerik */}
                <div className="sw-mockup-main">
                  <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
                    <div className="sw-mockup-skeleton" style={{ flex: 1, height: '100px', borderRadius: '12px' }}></div>
                    <div className="sw-mockup-skeleton" style={{ flex: 1, height: '100px', borderRadius: '12px' }}></div>
                    <div className="sw-mockup-skeleton" style={{ flex: 1, height: '100px', borderRadius: '12px' }}></div>
                  </div>
                  <div className="sw-mockup-skeleton" style={{ flex: 1, width: '100%', borderRadius: '12px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Özellikler (Features) Section */}
      <section className="sw-features">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Modüler Yapı</h2>
            <p style={{ color: 'var(--text-secondary)' }}>İhtiyacınız olan modülleri seçin, sadece kullandığınız kadar ödeyin.</p>
          </div>

          <div className="sw-features-grid">
            {/* Kart 1 */}
            <div className="sw-feature-card">
              <div className="sw-feature-icon">
                <Calculator size={28} />
              </div>
              <h3>{t['sw.f1Title']}</h3>
              <p>{t['sw.f1Desc']}</p>
            </div>
            
            {/* Kart 2 */}
            <div className="sw-feature-card">
              <div className="sw-feature-icon">
                <Database size={28} />
              </div>
              <h3>{t['sw.f2Title']}</h3>
              <p>{t['sw.f2Desc']}</p>
            </div>

            {/* Kart 3 */}
            <div className="sw-feature-card">
              <div className="sw-feature-icon">
                <BarChart3 size={28} />
              </div>
              <h3>{t['sw.f3Title']}</h3>
              <p>{t['sw.f3Desc']}</p>
            </div>

            {/* Kart 4 */}
            <div className="sw-feature-card">
              <div className="sw-feature-icon">
                <Cpu size={28} />
              </div>
              <h3>{t['sw.f4Title']}</h3>
              <p>{t['sw.f4Desc']}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz Listesi */}
      <section className="container" style={{ padding: '80px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '32px' }}>Neden Harveniq Software?</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent-primary)', marginTop: '4px' }}><Zap size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Hızlı Entegrasyon</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Aylar süren kurulumlara veda edin. Birkaç gün içinde ERP ve tezgâhlarınızla entegre oluyoruz.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent-primary)', marginTop: '4px' }}><LayoutDashboard size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Kullanıcı Dostu</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Ustadan mühendise herkesin rahatça kullanabileceği basit süreç ekranları.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent-primary)', marginTop: '4px' }}><Code size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Ölçeklenebilir</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Gelecekte artacak makine parkurunuza veya yeni fabrikalarınıza otomatik uyum sağlar.</p>
                </div>
              </li>
            </ul>
          </div>
          <div style={{ 
            background: 'var(--bg-elevated)', 
            padding: '40px', 
            borderRadius: '24px', 
            border: '1px solid var(--border-color)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '24px' }}>Teknik Destek</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>Yerli mühendislik ekibimizle 7/24 yanınızdayız. Sorun yaşadığınız her an doğrudan sistem mühendislerimizle iletişime geçebilirsiniz.</p>
          </div>
        </div>
      </section>

      {/* Canlı Demo (Lead Capture) */}
      <section className="sw-demo-section container">
        <div className="sw-demo-box glass-panel">
          <h2>{t['sw.demoTitle']}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.1rem' }}>{t['sw.demoSubtitle']}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <input type="email" placeholder="Şirket E-posta Adresiniz" className="form-input" style={{ maxWidth: '300px' }} />
            <button className="btn btn-primary">{t['sw.btnDemo']}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareHome;
