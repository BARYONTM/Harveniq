import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileCode, CheckSquare, PackageCheck, Zap } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import './Process.css';

const Process = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === 'en';

  return (
    <div className="page process-page">
      <section className="page-hero" style={{backgroundImage: "url('/images/process_bg.png')"}}>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-container">
          <h1 className="page-title">{isEn ? "Process from Quote to Delivery" : "Tekliften Teslimata Süreç"}</h1>
          <p className="page-subtitle">{isEn ? "Communication via a single channel; clear technical requirements; deadline under control." : "İletişim tek kanaldan; teknik gereksinimler net; termin kontrol altında."}</p>
          <div className="hero-actions justify-center">
            <Link to="/teklif-al" className="btn btn-primary">{isEn ? "Send File" : "Dosya Gönder"} <ChevronRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h3>{isEn ? "Request Receipt" : "Talep Alımı"}</h3>
                <p>{isEn ? "Submitting file, quantity, and material details via the quote form." : "Dosya, adet ve malzeme bilgilerinin teklif formuyla gönderilmesi."}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>{isEn ? "Technical Review" : "Teknik Değerlendirme"}</h3>
                <p>{isEn ? "Analyzing critical dimensions, tolerances, and manufacturability." : "Kritik ölçüler, toleranslar ve üretilebilirlik analizlerinin yapılması."}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>{isEn ? "Quote & Deadline Approval" : "Teklif & Termin Onayı"}</h3>
                <p>{isEn ? "Presenting the cost and precise delivery date for customer approval." : "Maliyetin ve net teslimat tarihinin müşteri onayına sunulması."}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>{isEn ? "Production Planning" : "Üretim Planlama"}</h3>
                <p>{isEn ? "Sourcing materials and programming the machining centers (CNC etc.)." : "Malzeme tedariki ve parkurun CNC veya diğer yöntemlerle işlenmek üzere programlanması."}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">5</div>
              <div className="timeline-content">
                <h3>{isEn ? "Quality Control / Validation" : "Kalite Kontrol / Doğrulama"}</h3>
                <p>{isEn ? "Dimensional validation of critical parts, filling out quality forms." : "Kritik parçaların ölçü doğrulamasının yapılması, kalite formlarının doldurulması."}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">6</div>
              <div className="timeline-content">
                <h3>{isEn ? "Packaging & Shipping" : "Paketleme & Sevkiyat"}</h3>
                <p>{isEn ? "Secure logistics, protective packaging, and delivery to final destination." : "Güvenli lojistik, koruyucu paketleme ve nihai varış noktasına ulaştırma."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fast-quote-info-section text-center">
        <div className="container">
          <h2 className="section-title">{isEn ? "For a Fast Quote Request" : "Teklifin Hızlı Çıkması İçin"}</h2>
          <div className="info-cards-grid">
            <div className="info-card glass-panel">
              <FileCode size={32} className="info-icon" />
              <span>{isEn ? "File/Drawing" : "Dosya/Çizim"}</span>
            </div>
            <div className="info-card glass-panel">
              <PackageCheck size={32} className="info-icon" />
              <span>{isEn ? "Qty & Material" : "Adet & Malzeme"}</span>
            </div>
            <div className="info-card glass-panel">
              <CheckSquare size={32} className="info-icon" />
              <span>{isEn ? "Tolerance & Surface" : "Tolerans & Yüzey"}</span>
            </div>
            <div className="info-card glass-panel">
              <Zap size={32} className="info-icon" />
              <span>{isEn ? "Delivery Date & City" : "Teslim Tarihi & Şehir"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip text-center">
        <div className="container">
          <h2>{isEn ? "Enter details, attach the file, and start the quoting process." : "Bilgileri yazın; dosyayı ekleyin; teklif sürecini başlatın."}</h2>
          <Link to="/teklif-al" className="btn btn-primary mt-8">{isEn ? "Quote Form" : "Teklif Formu"} <ChevronRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
};

export default Process;
