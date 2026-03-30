import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Cog, Terminal, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const Solutions = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === 'en';

  return (
    <div className="page solutions-page">
      <section className="page-hero" style={{backgroundImage: "url('/images/ind_solutions.png')"}}>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-container">
          <h1 className="page-title">{isEn ? "Advanced Industrial Solutions" : "Gelişmiş Endüstriyel Çözümler"}</h1>
          <p className="page-subtitle">{isEn ? "We are not just a production workshop, but a strategic manufacturing partner integrated into your engineering processes. We stand by you in challenging geometries, critical standards, and tight schedule planning." : "Sadece bir üretim atölyesi değil, aynı zamanda mühendislik süreçlerinize entegre çalışan stratejik bir üretim ortağıyız. Zorlu geometriler, kritik standartlar ve kısıtlı zaman planlamasında yanınızdayız."}</p>
        </div>
      </section>

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="text-center mb-8">{isEn ? "Our Production Partnership Approach" : "Üretim Ortaklığı Yaklaşımımız"}</h2>
          <div className="grid col-2 gap-8" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="solution-card glass-panel" style={{ padding: '40px' }}>
              <Terminal size={32} style={{ color: 'var(--accent-primary)', marginBottom: '24px' }} />
              <h3 className="mb-4">{isEn ? "Engineering & Prototyping" : "Mühendislik & Prototipleme"}</h3>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                {isEn ? "When developing a new product, we perform Design for Manufacturing (DFM) analysis of technical drawings. We optimize tolerances and provide guidance for cost advantages in mass production." : "Yeni bir ürün geliştirirken teknik resimlerin üretime uygunluk (DFM - Design for Manufacturing) analizini gerçekleştiriyoruz. Hem toleransları optimize ediyor hem de seri üretime geçişte maliyet avantajı sağlayacak yönlendirmelerde bulunuyoruz."}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><CheckCircle2 size={16} className="text-success" /> {isEn ? "Manufacturability analysis" : "Üretilebilirlik analizi"}</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><CheckCircle2 size={16} className="text-success" /> {isEn ? "Cost optimization recommendations" : "Maliyet optimizasyonu tavsiyeleri"}</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} className="text-success" /> {isEn ? "Material selection consultancy" : "Malzeme seçimi danışmanlığı"}</li>
              </ul>
            </div>

            <div className="solution-card glass-panel" style={{ padding: '40px' }}>
              <Cog size={32} style={{ color: 'var(--accent-primary)', marginBottom: '24px' }} />
              <h3 className="mb-4">{isEn ? "Critical Path Spare Parts" : "Kritik Hattın Yedek Parçaları"}</h3>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                {isEn ? "We analyze spare parts that cause unplanned downtime on your production lines or have very long lead times, and rapidly reproduce them with enhanced durability using reverse engineering." : "Üretim bantlarınızda plansız duruşlara neden olan veya tedariği çok uzun süren yedek parçaları analiz ediyor, gelişmiş malzeme bilgisi ve tersine mühendislik yöntemleriyle çok daha dayanıklı şekilde hızla üretiyoruz."}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><CheckCircle2 size={16} className="text-success" /> {isEn ? "Reverse engineering competence" : "Tersine mühendislik yetkinliği"}</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><CheckCircle2 size={16} className="text-success" /> {isEn ? "Rapid production response (Emergencies)" : "Hızlı üretim aksiyonu (Acil durumlar)"}</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} className="text-success" /> {isEn ? "Advanced heat and surface treatments" : "İleri düzey ısıl ve yüzey işlemleri"}</li>
              </ul>
            </div>
          </div>
          
          <div className="cta-box glass-panel text-center mt-12" style={{ padding: '48px', border: '1px solid var(--accent-primary)' }}>
            <h3 className="mb-4">{isEn ? "Production Guarantee for Your Projects" : "Projeleriniz İçin Üretim Garantisi"}</h3>
            <p className="text-secondary mb-6" style={{ fontSize: '1.125rem' }}>{isEn ? "Consult with our technical team to ensure the precision and speed you need." : "İhtiyacınız olan hassasiyeti ve hızı sağlamak için teknik ekibimizle görüşün."}</p>
            <Link to="/iletisim" className="btn btn-primary">{isEn ? "Consult a Project" : "Projeyi Danışın"} <ChevronRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
