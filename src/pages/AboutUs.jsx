import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Eye, ShieldCheck, Clock } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const AboutUs = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === 'en';

  return (
    <div className="page about-page">
      <section className="page-hero" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')"}}>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-container">
          <h1 className="page-title">{isEn ? "About Harveniq" : "Harveniq Hakkında"}</h1>
          <p className="page-subtitle">{isEn ? "A solution approach centered on the speed and clarity needs of production teams." : "Üretim ekiplerinin hız ve netlik ihtiyacını merkeze alan bir çözüm yaklaşımı."}</p>
          <div className="hero-actions justify-center">
            <Link to="/teklif-al" className="btn btn-primary">{t['header.quote']} <ChevronRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="approach-section text-center" style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="mb-8">{isEn ? "What We Value?" : "Neye Önem Veriyoruz?"}</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {isEn ? "Technical clarity, planned production, dimensional validation, and on-time delivery. As Harveniq, we aim to eliminate uncertainties in the production process and provide teams with a transparent working environment." : "Teknik netlik, planlı üretim, ölçü doğrulama ve zamanında teslimat. Harveniq olarak üretim sürecindeki belirsizlikleri ortadan kaldırmayı ve ekiplere şeffaf bir çalışma ortamı sunmayı hedefliyoruz."}
          </p>
        </div>
      </section>

      <section className="values-section" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="grid col-3 gap-8" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="value-card glass-panel" style={{ padding: '48px 32px', textAlign: 'center', borderRadius: '12px' }}>
              <Eye size={48} style={{ color: 'var(--accent-primary)', margin: '0 auto 24px' }} />
              <h3 className="mb-4">{isEn ? "Transparent Process" : "Şeffaf Süreç"}</h3>
              <p className="text-secondary">{isEn ? "Clear communication and real-time status tracking at all stages from quote to delivery." : "Tekliften teslimata kadar tüm aşamalarda net bilgilendirme ve anlık durum takibi."}</p>
            </div>
            <div className="value-card glass-panel" style={{ padding: '48px 32px', textAlign: 'center', borderRadius: '12px' }}>
              <ShieldCheck size={48} style={{ color: 'var(--accent-primary)', margin: '0 auto 24px' }} />
              <h3 className="mb-4">{isEn ? "Technical Validation" : "Teknik Doğrulama"}</h3>
              <p className="text-secondary">{isEn ? "Engineering validation of critical dimensions and materials before going into production." : "Üretime girmeden önce kritik ölçülerin ve malzemelerin mühendislik açısından doğrulanması."}</p>
            </div>
            <div className="value-card glass-panel" style={{ padding: '48px 32px', textAlign: 'center', borderRadius: '12px' }}>
              <Clock size={48} style={{ color: 'var(--accent-primary)', margin: '0 auto 24px' }} />
              <h3 className="mb-4">{isEn ? "Deadline Discipline" : "Termin Disiplini"}</h3>
              <p className="text-secondary">{isEn ? "Reliable logistics processes and shipping without delays on the planned date." : "Planlanan tarihte aksama olmadan sevkiyat ve güvenilir lojistik süreçleri."}</p>
            </div>
          </div>
        </div>
      </section>
      
      <div style={{ display: 'none' }}>
        <h3>Entegrasyon İhtiyaçları</h3>
      </div>
    </div>
  );
};

export default AboutUs;
