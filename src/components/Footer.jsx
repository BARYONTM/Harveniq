import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer" style={{ borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)', paddingTop: '60px' }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo className="mb-4" />
            <p className="footer-desc">
              Teknik çizimden teslimata kadar şeffaf ve termin odaklı üretim süreci. Hızlı teklif ve güvenilir üretim desteği.
            </p>
            <div className="social-links">
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Menü</h4>
            <ul className="footer-list">
              <li><Link to="/">{t['header.home']}</Link></li>
              <li><Link to="/cnc-isleme">{t['header.cnc']}</Link></li>
              <li><Link to="/endustriyel-cozumler">{t['header.solutions']}</Link></li>
              <li><Link to="/proses">{t['header.process']}</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Kurumsal</h4>
            <ul className="footer-list">
              <li><Link to="/hakkimizda">{t['footer.about']}</Link></li>
              <li><Link to="/projeler">{t['footer.projects']}</Link></li>
              <li><Link to="/blog">{t['footer.blog']}</Link></li>
              <li><Link to="/iletisim">{t['header.contact']}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">İletişim</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="footer-icon" />
                <span>İstanbul, Türkiye</span>
              </li>
              <li>
                <Phone size={18} className="footer-icon" />
                <a href="tel:+905528345323">+90 552 834 5323</a>
              </li>
              <li>
                <Mail size={18} className="footer-icon" />
                <a href="mailto:Harveniq@gmail.com" target="_blank" rel="noopener noreferrer">Harveniq@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Harveniq. Tüm hakları saklıdır.</p>
          <div className="legal-links" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '12px' }}>
            <Link to="/kvkk">{t['footer.kvkk']}</Link>
            <Link to="/cerez">Çerez Politikası</Link>
            <Link to="/kullanim-sartlari">{t['footer.terms']}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
