import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const Blog = () => {
  const { lang, t } = useLanguage();
  const isEn = lang === 'en';

  const posts = isEn ? [
    {
      title: "6 Crucial Details for a Faster Quote in Manufacturing Drawings",
      excerpt: "The biggest factor determining pricing and lead time in CNC machining quotes is the clarity of the technical drawing. Include these 6 details in your drawing...",
      date: "March 14, 2026",
      tag: "Guide"
    },
    {
      title: "How to Write a Tolerance Note? A Practical Guide for Procurement",
      excerpt: "Determining correct tolerances for critical parts directly affects production costs and delivery times. So procurement teams can speak the same language as engineering...",
      date: "March 02, 2026",
      tag: "Technical"
    }
  ] : [
    {
      title: "Teklifin Hızlanması İçin Çizimde Olması Gereken 6 Bilgi",
      excerpt: "CNC işleme ve özel parça üretim tekliflerinde fiyatlandırmayı ve termin süresini belirleyen en büyük etken teknik resmin netliğidir. Çiziminize ekleyeceğiniz bu 6 bilgi...",
      date: "14 Mart 2026",
      tag: "Rehber"
    },
    {
      title: "Tolerans Notu Nasıl Yazılır? Satın Alma İçin Pratik Rehber",
      excerpt: "Kritik parçalar için doğru toleransların belirlenmesi, üretim maliyetini ve teslimat süresini doğrudan etkiler. Satın alma ekiplerinin mühendislikle aynı dili konuşabilmesi için...",
      date: "02 Mart 2026",
      tag: "Teknik"
    }
  ];

  return (
    <div className="page blog-page">
      <section className="page-hero" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531234799389-dcb7651eb0a2?auto=format&fit=crop&w=2000&q=80')"}}>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-container">
          <h1 className="page-title">{t['footer.blog']}</h1>
          <p className="page-subtitle">{isEn ? "Short and practical content about CNC machining, tolerances, material selection, and quote preparation." : "CNC işleme, tolerans, malzeme seçimi ve teklif hazırlığı hakkında kısa ve pratik içerikler."}</p>
        </div>
      </section>

      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {posts.map((post, idx) => (
            <div key={idx} className="blog-card glass-panel" style={{ padding: '40px', marginBottom: '32px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: '600', fontSize: '0.875rem' }}>{post.tag}</span>
                <span className="text-secondary" style={{ fontSize: '0.875rem' }}>{post.date}</span>
              </div>
              <h2 className="mb-4" style={{ fontSize: '1.75rem' }}>{post.title}</h2>
              <p className="text-secondary mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>{post.excerpt}</p>
              <Link to="#" className="btn btn-secondary" style={{ padding: '10px 20px' }}>
                {isEn ? "Read More" : "Devamını Oku"} <ChevronRight size={18} />
              </Link>
            </div>
          ))}
          
          <div className="cta-box glass-panel text-center mt-8" style={{ padding: '48px', backgroundColor: 'var(--bg-elevated)', borderRadius: '12px', border: '1px solid var(--accent-primary)' }}>
            <h3 className="mb-4">{isEn ? "Become Your Solution Partner Immediately" : "Hemen Çözüm Ortağınız Olalım"}</h3>
            <p className="text-secondary mb-6">{isEn ? "Send your technical drawing or consult our team about your project." : "Teknik çiziminizi gönderin veya projenizi ekibimize danışın."}</p>
            <Link to="/teklif-al" className="btn btn-primary">{t['header.quote']} <ChevronRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
