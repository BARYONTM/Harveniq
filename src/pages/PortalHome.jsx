import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Cpu, HardHat, ArrowRight } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import './PortalHome.css';

const PortalHome = () => {
  const { t } = useLanguage();

  return (
    <div className="portal-body">
      {/* Uzay / Teknoloji CSS Arka Plan Parçacıkları */}
      <div className="portal-particles">
        <div className="portal-grid-overlay"></div>
      </div>

      <div className="portal-content">
        <div className="portal-hero">
          <h1 className="portal-title">{t['portal.heroTitle']}</h1>
          <p className="portal-subtitle">{t['portal.heroSubtitle']}</p>
        </div>

        <div className="portal-brands-grid">
          {/* HARVENIQ CNC KARTI */}
          <Link to="/cnc" className="portal-brand-card cnc-theme">
            <div className="portal-brand-content">
              <div className="portal-icon-wrapper">
                <Settings size={32} />
              </div>
              <h2 className="portal-brand-title">{t['portal.cncTitle']}</h2>
              <p className="portal-brand-desc">{t['portal.cncDesc']}</p>
              <div className="portal-btn">
                {t['portal.btnDiscover']} <ArrowRight size={18} />
              </div>
            </div>
          </Link>

          {/* HARVENIQ SOFTWARE KARTI */}
          <Link to="/software" className="portal-brand-card sw-theme">
            <div className="portal-brand-content">
              <div className="portal-icon-wrapper">
                <Cpu size={32} />
              </div>
              <h2 className="portal-brand-title">{t['portal.swTitle']}</h2>
              <p className="portal-brand-desc">{t['portal.swDesc']}</p>
              <div className="portal-btn">
                {t['portal.btnDiscover']} <ArrowRight size={18} />
              </div>
            </div>
          </Link>

          {/* HARVENIQ SYSTEMS KARTI */}
          <Link to="/systems" className="portal-brand-card sys-theme">
            <div className="portal-brand-content">
              <div className="portal-icon-wrapper">
                <HardHat size={32} />
              </div>
              <h2 className="portal-brand-title">{t['portal.sysTitle']}</h2>
              <p className="portal-brand-desc">{t['portal.sysDesc']}</p>
              <div className="portal-btn">
                {t['portal.btnDiscover']} <ArrowRight size={18} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortalHome;
