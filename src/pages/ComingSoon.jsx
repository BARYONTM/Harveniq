import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Code, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const ComingSoon = ({ type }) => {
  const { t } = useLanguage();
  const isSoftware = type === 'software';

  const glowColor = isSoftware ? 'rgba(77, 166, 255, 0.4)' : 'rgba(255, 107, 0, 0.4)';
  const themeColor = isSoftware ? '#4da6ff' : 'var(--accent-primary)';

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Arka Plan Ortam Işıkları (Ambient Glow) */}
      <div style={{ position: 'absolute', top: '10%', left: '15%', width: '40vw', height: '40vw', background: glowColor, filter: 'blur(120px)', borderRadius: '50%', opacity: 0.4, zIndex: 0, mixBlendMode: 'screen' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '10%', width: '50vw', height: '50vw', background: 'rgba(0, 51, 102, 0.5)', filter: 'blur(150px)', borderRadius: '50%', opacity: 0.4, zIndex: 0, mixBlendMode: 'screen' }}></div>

      <div className="container text-center" style={{ position: 'relative', zIndex: 1, padding: '40px 20px' }}>
        <div className="glass-panel mx-auto" style={{ 
          padding: '80px 40px', 
          maxWidth: '750px', 
          width: '100%', 
          borderTop: `4px solid ${themeColor}`,
          boxShadow: `0 24px 50px rgba(0,0,0,0.5), 0 0 60px ${glowColor}`,
          borderRadius: '24px',
          background: 'rgba(15, 23, 42, 0.75)', /* Koyu ton şeffaf arka plan */
          backdropFilter: 'blur(24px)'
        }}>
          
          {/* İkon Çerçevesi */}
          <div style={{ 
            marginBottom: '40px', 
            display: 'inline-flex', 
            padding: '24px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)',
            boxShadow: `inset 0 0 20px rgba(255,255,255,0.08), 0 0 40px ${glowColor}`
          }}>
            {isSoftware ? 
              <Code size={72} color={themeColor} strokeWidth={1.5} /> : 
              <Settings size={72} color={themeColor} strokeWidth={1.5} />
            }
          </div>
          
          {/* Fütüristik Başlık */}
          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '16px', 
            fontWeight: 800, 
            background: `linear-gradient(135deg, #ffffff, ${themeColor})`, 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            letterSpacing: '-1px' 
          }}>
            {isSoftware ? 'Harveniq Software' : 'Harveniq Systems'}
          </h1>
          
          <h2 style={{ fontSize: '1.75rem', color: '#f8fafc', marginBottom: '24px', fontWeight: 500 }}>
            {t['comingSoon.title']} <span style={{display: 'inline-block', animation: 'bounce 2s infinite'}}>🚀</span>
          </h2>
          
          <p style={{ color: '#94a3b8', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '48px', maxWidth: '85%', margin: '0 auto 48px auto' }}>
            {t['comingSoon.subtitle']}
          </p>
          
          {/* Dönüş Butonu */}
          <Link to="/cnc" className="btn" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '16px 32px', 
            fontSize: '1.1rem', 
            borderRadius: '50px', 
            background: themeColor, 
            color: '#ffffff',
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow: `0 8px 20px ${glowColor}`,
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <ArrowLeft size={20} />
            {t['comingSoon.backToCnc']}
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-15px);}
          60% {transform: translateY(-7px);}
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
