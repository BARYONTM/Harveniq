import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Code, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const ComingSoon = ({ type }) => {
  const { t } = useLanguage();
  
  const isSoftware = type === 'software';

  return (
    <div className="container text-center" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ padding: '64px 40px', maxWidth: '600px', width: '100%', borderTop: `4px solid ${isSoftware ? '#4da6ff' : '#003366'}` }}>
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
          {isSoftware ? 
            <Code size={64} color="#4da6ff" strokeWidth={1.5} /> : 
            <Settings size={64} color="var(--accent-primary)" strokeWidth={1.5} />
          }
        </div>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', fontWeight: 700 }}>
          {isSoftware ? 'Harveniq Software' : 'Harveniq Systems'}
        </h1>
        
        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
          {t['comingSoon.title']} 🚀
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '40px' }}>
          {t['comingSoon.subtitle']}
        </p>
        
        <Link to="/cnc" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <ArrowLeft size={18} />
          {t['comingSoon.backToCnc']}
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
