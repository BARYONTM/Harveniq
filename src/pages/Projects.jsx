import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const Projects = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === 'en';

  const projects = isEn ? [
    {
      title: "Revision Part (Maintenance)",
      problem: "Spare part need for a stopped line due to emergency malfunction.",
      solution: "Rapid production approval with tolerance control within 24 hours based on technical drawing.",
      result: "Line downtime minimized by saving lead time.",
      img: "/images/cnc_service.png"
    },
    {
      title: "Fixture Part",
      problem: "Complex connection fixture containing tight tolerance dimensions at critical points.",
      solution: "Precision CNC milling, quality validation and dimensional report presentation.",
      result: "Seamless integration on the assembly line with zero rejects.",
      img: "/images/ind_solutions.png"
    },
    {
      title: "R&D Prototype",
      problem: "Complex housing part requiring 3 iterations during new product development.",
      solution: "Small batch flexible production and rapid design transitions for each iteration.",
      result: "Product testing phase completed ahead of target launch date.",
      img: "/images/hero_bg.png"
    }
  ] : [
    {
      title: "Revizyon Parçası (Bakım)",
      problem: "Acil durum arızası nedeniyle duran hattın yedek parça ihtiyacı.",
      solution: "Teknik çizim üzerinden 24 saat içinde tolerans kontrollü hızlı üretim onayı.",
      result: "Termin kazancı sağlanarak hattın duruş süresi minimuma indirildi.",
      img: "/images/cnc_service.png"
    },
    {
      title: "Fixture Parçası",
      problem: "Kritik noktalarında dar tolerans ölçüleri barındıran kompleks bağlantı fikstürü.",
      solution: "Hassas CNC frezeleme, kalite doğrulama ve ölçüm raporu sunumu.",
      result: "Montaj hattında sorunsuz entegrasyon ve sıfır fire.",
      img: "/images/ind_solutions.png"
    },
    {
      title: "Ar-Ge Prototip",
      problem: "Yeni ürün geliştirme sürecinde 3 iterasyon gerektiren karmaşık muhafaza parçası.",
      solution: "Küçük seri esnek üretim ve her iterasyon için hızlı geçiş tasarımı.",
      result: "Ürün test sürecinin hedeflenen çıkış tarihinden önce tamamlanması.",
      img: "/images/hero_bg.png"
    }
  ];

  return (
    <div className="page projects-page">
      <section className="page-hero" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80')"}}>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-container">
          <h1 className="page-title">{isEn ? "Sample Projects & Applications" : "Örnek İşler ve Uygulamalar"}</h1>
          <p className="page-subtitle">{isEn ? "Example application types in CNC machining and custom part manufacturing: prototypes, revision parts, small batches." : "CNC işleme ve özel parça üretimde örnek uygulama tipleri: prototip, revizyon parçası, küçük seri."}</p>
        </div>
      </section>

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {projects.map((p, idx) => (
              <div key={idx} className="project-card glass-panel" style={{ overflow: 'hidden', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '240px', backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'var(--bg-secondary)' }}></div>
                <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="mb-6" style={{ fontSize: '1.5rem' }}>{p.title}</h3>
                  <div className="mb-4">
                    <strong style={{ color: 'var(--accent-primary)', display: 'block', marginBottom: '4px' }}>Problem</strong>
                    <p className="text-secondary">{p.problem}</p>
                  </div>
                  <div className="mb-4">
                    <strong style={{ color: 'var(--success)', display: 'block', marginBottom: '4px' }}>{isEn ? "Solution" : "Çözüm"}</strong>
                    <p className="text-secondary">{p.solution}</p>
                  </div>
                  <div className="mb-8" style={{ flex: 1 }}>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>{isEn ? "Result" : "Çıktı"}</strong>
                    <p className="text-secondary">{p.result}</p>
                  </div>
                  <Link to="/teklif-al" className="btn btn-secondary" style={{ width: '100%' }}>
                    {isEn ? "Get Quote for Similar Work" : "Benzer İş İçin Teklif Al"} <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
