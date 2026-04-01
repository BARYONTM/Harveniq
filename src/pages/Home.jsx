import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, FileCheck, CheckCircle2, ChevronRight, Settings, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import './Home.css';

const Home = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === 'en';

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badges">
              <span className="hero-badge"><Clock size={16} /> {isEn ? "Fast quote" : "Hızlı teklif"}</span>
              <span className="hero-badge"><ShieldCheck size={16} /> {isEn ? "Quality control" : "Kalite kontrol"}</span>
              <span className="hero-badge"><FileCheck size={16} /> {isEn ? "Technical validation" : "Teknik doğrulama"}</span>
              <span className="hero-badge"><CheckCircle2 size={16} /> {isEn ? "On-time delivery" : "Zamanında teslimat"}</span>
            </div>
            
            <h1 className="hero-title">{t['home.heroTitle']}</h1>
            <p className="hero-subtitle">
              {t['home.heroSubtitle']}
            </p>
            
            <div className="hero-actions">
              <Link to="/teklif-al" className="btn btn-primary">
                {t['header.quote']} <ChevronRight size={18} />
              </Link>
              <Link to="/cnc-isleme" className="btn btn-secondary">
                {isEn ? "View CNC Capabilities" : "CNC Yetkinliklerini Gör"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container">
          <h3 className="trust-title text-center">{isEn ? "Reliable Solutions Backed by Experience" : "Tecrübemizle Güvenilir Çözümler"}</h3>
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon"><CheckCircle2 size={32} /></div>
              <span>{t['home.trust1']}</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon"><Settings size={32} /></div>
              <span>{t['home.trust2']}</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon"><FileCheck size={32} /></div>
              <span>{t['home.trust3']}</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon"><Clock size={32} /></div>
              <span>{t['home.trust4']}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            <div className="service-card glass-panel">
              <div className="service-card-image cnc-bg"></div>
              <div className="service-card-content">
                <h2>{t['header.cnc']}</h2>
                <p>{isEn ? "Planned processes for your turning/milling, machining, and custom part manufacturing needs." : "Torna/freze, talaşlı imalat ve özel parça üretim ihtiyaçlarınız için planlı süreç."}</p>
                <Link to="/cnc-isleme" className="service-link">
                  {isEn ? "View Details" : "Detayları Gör"} <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="service-card glass-panel">
              <div className="service-card-image ind-bg"></div>
              <div className="service-card-content">
                <h2>{t['header.solutions']}</h2>
                <p>{isEn ? "Project-based coordination to advance with the right solution partner in production processes." : "Üretim süreçlerinde doğru çözüm partneriyle ilerlemek için proje bazlı koordinasyon."}</p>
                <Link to="/endustriyel-cozumler" className="service-link">
                  {isEn ? "Our Approach" : "Yaklaşımımız"} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-header text-center mb-8">
            <h2>{isEn ? "How We Work?" : "Nasıl Çalışıyoruz?"}</h2>
          </div>
          
          <div className="process-steps">
            <Link to="/proses" className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>{isEn ? "Send the File" : "Dosyayı Gönderin"}</h3>
                <p>{isEn ? "Share the drawing in STEP, DWG or PDF format." : "STEP, DWG veya PDF formatında çizimi paylaşın."}</p>
              </div>
            </Link>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>{isEn ? "Technical Review & Deadline" : "Teknik Kontrol & Termin"}</h3>
                <p>{isEn ? "Drawings are reviewed, detailed quote and time provided." : "Çizimler incelenir, detaylı teklif ve süre iletilir."}</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>{isEn ? "Production & Quality Control" : "Üretim & Kalite Kontrol"}</h3>
                <p>{isEn ? "Production and validation according to required tolerances." : "İstenen toleranslara göre üretim ve doğrulama."}</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>{isEn ? "Packaging & Shipping" : "Paketleme & Sevkiyat"}</h3>
                <p>{isEn ? "Safe packaging and on-time delivery." : "Güvenli paketleme ve zamanında teslimat."}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/teklif-al" className="btn btn-primary">
              {isEn ? "Send File" : "Dosya Gönder"} <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="container">
          <div className="section-header text-center mb-8">
            <h2>{isEn ? "Industries We Serve" : "Hizmet Ettiğimiz Sektörler"}</h2>
            <p className="lead-text mt-4">{isEn ? "We provide reliable production for industries requiring high precision, especially defense, automotive, aerospace, and energy." : "Savunma, otomotiv, havacılık ve enerji başta olmak üzere yüksek hassasiyet gerektiren endüstrilere güvenilir üretim sağlıyoruz."}</p>
          </div>
          
          <div className="industries-grid">
            <div className="industry-tag"><ShieldCheck size={20}/> {isEn ? "Defense Industry" : "Savunma Sanayi"}</div>
            <div className="industry-tag"><Settings size={20}/> {isEn ? "Automotive" : "Otomotiv"}</div>
            <div className="industry-tag"><CheckCircle2 size={20}/> {isEn ? "Aerospace" : "Havacılık"}</div>
            <div className="industry-tag"><Settings size={20}/> {isEn ? "Energy" : "Enerji"}</div>
            <div className="industry-tag"><Settings size={20}/> {isEn ? "Industrial Facilities" : "Endüstriyel Tesisler"}</div>
            <div className="industry-tag"><Users size={20}/> {isEn ? "Machine Manufacturing" : "Makine İmalat"}</div>
          </div>
        </div>
      <section className="partners-section" style={{ padding: '80px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header text-center mb-8">
            <h2>{isEn ? "Our Production Partners" : "Üretim Partnerlerimiz"}</h2>
            <p className="lead-text mt-4">{isEn ? "We collaborate with the best in the industry to deliver superior quality." : "Üstün kaliteyi sunmak için sektörün en iyileriyle omuz omuza çalışıyoruz."}</p>
          </div>
          
          <div className="partners-display" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <div className="partner-logo-wrapper" style={{ 
              background: '#ffffff', 
              padding: '24px 48px', 
              borderRadius: '16px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <img src="/vahdet.png" alt="Vahdet Makina Logo" style={{ maxHeight: '100px', width: 'auto', objectFit: 'contain' }} />
            </div>
            {/* Future partners will be added here */}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-container">
          <h2>{isEn ? "Share your technical drawing, let's clarify the quote and deadline." : "Teknik çiziminizi paylaşın, teklif ve termin bilgisini netleştirelim."}</h2>
          <Link to="/teklif-al" className="btn btn-primary">
            {t['quote.title']} <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
