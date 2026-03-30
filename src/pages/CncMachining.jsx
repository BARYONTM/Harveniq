import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Settings, Plus, Minus } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import './CncMachining.css';

const CncMachining = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === 'en';
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = isEn ? [
    { q: "How quickly can I get a quote?", a: "If the drawings and technical details are clear, the quoting process is very fast. Once you send the file, we will get back to you with the lead time and cost." },
    { q: "Is there a minimum order quantity?", a: "No. We process everything from single-piece prototypes to mass production." },
    { q: "Which file formats are accepted?", a: "PDF, DWG, DXF, STEP, and IGES are the most common formats." },
    { q: "Do you provide surface treatments?", a: "Yes, it is planned according to project requirements upon request." }
  ] : [
    { q: "Teklif ne kadar sürede gelir?", a: "Çizim ve teknik detaylar net ise teklif süreci hızlanır. Dosyayı gönderdiğinizde termin ve maliyet için geri dönüş yapılır." },
    { q: "Minimum sipariş adedi var mı?", a: "Hayır. Tek parça prototipten seri üretime kadar değerlendirilir." },
    { q: "Hangi dosya formatları kabul?", a: "PDF, DWG, DXF, STEP ve IGES en yaygın formatlardır." },
    { q: "Yüzey işlemleri yapılıyor mu?", a: "Talep üzerine, proje gereksinimine göre planlanır." }
  ];

  return (
    <div className="page cnc-page">
      <section className="page-hero" style={{backgroundImage: "url('/images/cnc_service.png')"}}>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-container">
          <h1 className="page-title">{isEn ? "High-Precision CNC Machining" : "Yüksek Hassasiyetli CNC Talaşlı İmalat"}</h1>
          <p className="page-subtitle">{isEn ? "Custom part manufacturing with micron-level precision for defense, aerospace, and automotive standards. A flawless production experience from technical drawing to final quality control." : "Savunma, havacılık ve otomotiv standartlarında, mikron seviyesinde hassasiyetle özel parça üretimi. Teknik resimden son kalite kontrole kadar kusursuz bir üretim deneyimi."}</p>
          <div className="hero-actions justify-center">
            <Link to="/teklif-al" className="btn btn-primary">{t['header.quote']} <ChevronRight size={18} /></Link>
            <Link to="/proses" className="btn btn-secondary">{isEn ? "Our Production Process" : "Üretim Sürecimiz"}</Link>
          </div>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="container">
          <h2 className="section-title text-center">{isEn ? "Our Solution-Oriented Approach" : "Çözüm Odaklı Yaklaşımımız"}</h2>
          <div className="capabilities-grid">
            <div className="capability-card glass-panel text-center">
              <Settings size={32} className="capability-icon" />
              <h3>{isEn ? "Custom Parts and Complex Production" : "Özel Parça ve Kompleks Üretim"}</h3>
              <p>{isEn ? "Manufacturing complex parts requiring tight tolerances and multi-axis CNC machining, strictly adhering to technical drawings and specifications." : "Dar toleranslı, çok eksenli CNC işleme gerektiren kompleks parçaların, teknik resimlere ve şartnamelere tam uyumlu olarak üretilmesi."}</p>
            </div>
            <div className="capability-card glass-panel text-center">
              <Settings size={32} className="capability-icon" />
              <h3>{isEn ? "Reverse Engineering and Revision" : "Tersine Mühendislik ve Revizyon"}</h3>
              <p>{isEn ? "Rapid reproduction and improvement of critical spare parts needed for machine maintenance and repair using reverse engineering methods." : "Makine bakım ve onarım süreçlerinde ihtiyaç duyulan kritik yedek parçaların, tersine mühendislik yöntemleriyle iyileştirilerek hızlıca yeniden üretilmesi."}</p>
            </div>
            <div className="capability-card glass-panel text-center">
              <Settings size={32} className="capability-icon" />
              <h3>{isEn ? "R&D and Rapid Prototyping" : "Ar-Ge ve Hızlı Prototipleme"}</h3>
              <p>{isEn ? "Flexible planning and engineering support for low-volume prototype runs to accelerate your innovation processes." : "İnovasyon süreçlerinizi hızlandırmak için, düşük adetli prototip üretimlerinde esnek planlama ve mühendislik desteği."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-scope-section">
        <div className="container">
          <div className="tech-scope-grid">
            <div className="tech-scope-content">
              <h2>{isEn ? "Technical Scope" : "Teknik Kapsam"}</h2>
              <p>{isEn ? "Our production lines work with a wide range of materials and precise tolerances." : "Üretim hatlarımız geniş malzeme yelpazesi ve hassas toleranslar ile çalışır."}</p>
            </div>
            <div className="tech-scope-table-wrap">
              <table className="tech-table">
                <tbody>
                  <tr><th>{isEn ? "Inputs" : "Girdiler"}</th><td>{isEn ? "Technical Drawing (PDF), 2D (DWG/DXF), 3D (STEP/IGES)" : "Teknik resim (PDF), 2D (DWG/DXF), 3D (STEP/IGES)"}</td></tr>
                  <tr><th>{isEn ? "Materials" : "Malzemeler"}</th><td>{isEn ? "Aluminum, Carbon Steel, Stainless, Brass, Plastic (POM/PA etc.)" : "Alüminyum, Karbon Çelik, Paslanmaz, Pirinç, Plastik (POM/PA vb.)"}</td></tr>
                  <tr><th>{isEn ? "Surface" : "Yüzey"}</th><td>{isEn ? "Machining, Deburring, Coating/Heat Treatment (Upon request)" : "Talaşlı, Çapak Alma, Kaplama/Isı İşlem (Talep üzerine)"}</td></tr>
                  <tr><th>{isEn ? "Quality" : "Kalite"}</th><td>{isEn ? "Dimension Control, Measurement report upon request" : "Ölçü Kontrol, Talep üzerine ölçüm raporu"}</td></tr>
                  <tr><th>{isEn ? "Quantity" : "Adet"}</th><td>{isEn ? "Single piece – Mass production (Based on project)" : "Tek parça – Seri üretim (Projeye göre)"}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="container text-center quality-container">
          <h2>{isEn ? "Quality Control Approach" : "Kalite Kontrol Yaklaşımı"}</h2>
          <p className="quality-text">
            {isEn ? "Pre-delivery measurement control points are determined; validation is done for critical dimensions. Required tolerances are clarified at the beginning of the project." : "Teslimat öncesi ölçü kontrol noktaları belirlenir; kritik ölçüler için doğrulama yapılır. İstenen toleranslar proje başında netleştirilir."}
          </p>
          <Link to="/teklif-al#dosya" className="btn btn-secondary mt-4">{isEn ? "Share Critical Dimensions" : "Kritik Ölçüleri Paylaşın"} <ChevronRight size={18} /></Link>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title text-center">{isEn ? "Frequently Asked Questions" : "Sık Sorulan Sorular"}</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                <div className="faq-question">
                  <h4>{faq.q}</h4>
                  {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip text-center">
        <div className="container">
          <h2>{isEn ? "Attach your drawing; specify material, quantity, and deadline. Let's start the quoting process." : "Çizimi ekleyin; malzeme, adet ve termin bilgisini yazın. Teklif sürecini başlatalım."}</h2>
          <Link to="/teklif-al" className="btn btn-primary mt-8">{isEn ? "Go to Quote Form" : "Teklif Formuna Git"} <ChevronRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
};

export default CncMachining;
