import React from 'react';
import { ChevronRight, LayoutDashboard, Calculator, BarChart3, Cpu, Code, Database, Zap, Activity, Users, Settings as SettingsIcon, CheckCircle2, TrendingUp } from 'lucide-react';
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
                <div style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Database size={14} /> ERP Server Bağlantısı Aktif
                </div>
              </div>
              <div className="sw-mockup-body">
                {/* Sol Menü (Doldurulmuş) */}
                <div className="sw-mockup-sidebar">
                  <div style={{ color: 'var(--accent-primary)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Cpu size={24} /> MES.CORE
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#94a3b8', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ffffff', background: 'rgba(255,255,255,0.05)', padding: '8px 12px', borderRadius: '8px' }}>
                      <LayoutDashboard size={18} /> Özet Ekranı
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 12px' }}>
                      <Activity size={18} /> Makine Durumları
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 12px' }}>
                      <Calculator size={18} /> Otomatik Teklifler
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 12px' }}>
                      <Users size={18} /> Operatörler
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 12px', marginTop: 'auto' }}>
                      <SettingsIcon size={18} /> Sistem Ayarları
                    </div>
                  </div>
                </div>
                {/* Ana İçerik (Doldurulmuş) */}
                <div className="sw-mockup-main">
                  
                  {/* Başlık ve Profil alanı */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Canlı Üretim Verileri</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Son Güncelleme: Şimdi</span>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>M.Y</div>
                    </div>
                  </div>

                  {/* Metrik Kartları */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px' }}>
                      <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '8px' }}>OEE (Genel Verimlilik)</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                        %87 <span style={{ fontSize: '0.8rem', color: '#27c93f', display: 'flex', alignItems: 'center' }}><TrendingUp size={14} /> +4.2</span>
                      </div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px' }}>
                      <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '8px' }}>Aktif İş Emirleri</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>124</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px' }}>
                      <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '8px' }}>Günlük Tahmini Maliyet</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>₺42,500</div>
                    </div>
                  </div>

                  {/* Grafik ve Tablo Simülasyonu */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px', flex: 1 }}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '16px' }}>Haftalık Üretim Hacmi</div>
                      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '2%', paddingBottom: '10px' }}>
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                          <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? 'var(--accent-primary)' : 'rgba(77, 166, 255, 0.2)', borderRadius: '4px 4px 0 0', position: 'relative' }}></div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.7rem', marginTop: '8px' }}>
                        <span>Pzt</span><span>Sal</span><span>Çar</span><span>Per</span><span>Cum</span><span>Cmt</span><span>Paz</span>
                      </div>
                    </div>
                    
                    {/* Küçük Liste */}
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px' }}>
                      <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '16px' }}>CNC Durumları</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rrem' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#27c93f" /> DMG-Mori 5X</span>
                          <span style={{ color: '#27c93f', fontSize: '0.75rem' }}>İşliyor</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rrem' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#ffbd2e" /> Mazak Torna</span>
                          <span style={{ color: '#ffbd2e', fontSize: '0.75rem' }}>Set-up</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rrem' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#27c93f" /> Doosan Freze</span>
                          <span style={{ color: '#27c93f', fontSize: '0.75rem' }}>İşliyor</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rrem' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#ff5f56" /> Lazer Kesim</span>
                          <span style={{ color: '#ff5f56', fontSize: '0.75rem' }}>Duruş</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
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
