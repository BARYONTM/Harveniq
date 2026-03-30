import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, lang, toggleLanguage } = useLanguage();

  return (
    <header className="header glass-panel">
      <div className="container header-container">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        
        <div className="desktop-menu">
          <nav className="header-nav">
            <Link to="/cnc-isleme" className="nav-link">{t['header.cnc']}</Link>
            <Link to="/endustriyel-cozumler" className="nav-link">{t['header.solutions']}</Link>
            <Link to="/proses" className="nav-link">{t['header.process']}</Link>
            <Link to="/iletisim" className="nav-link">{t['header.contact']}</Link>
          </nav>
          
          <div className="header-actions">
            <button onClick={toggleLanguage} className="lang-toggle contact-icon" aria-label="Dili Değiştir">
              <Globe size={18} style={{ marginRight: '4px' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{lang.toUpperCase()}</span>
            </button>
            <button onClick={toggleTheme} className="contact-icon theme-toggle" aria-label="Temayı Değiştir">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="tel:+905528345323" className="contact-icon" aria-label="Telefon">
              <Phone size={20} />
            </a>
            <a href="mailto:Harveniq@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="E-posta">
              <Mail size={20} />
            </a>
            <Link to="/teklif-al" className="btn btn-primary btn-sm">
              {t['header.quote']}
            </Link>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="mobile-nav">
          <Link to="/cnc-isleme" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>{t['header.cnc']}</Link>
          <Link to="/endustriyel-cozumler" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>{t['header.solutions']}</Link>
          <Link to="/proses" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>{t['header.process']}</Link>
          <Link to="/iletisim" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>{t['header.contact']}</Link>
          
          <div style={{ display: 'flex', gap: '8px', margin: '12px 0' }}>
            <button onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }} className="btn btn-secondary" style={{ flex: 1, padding: '8px' }}>
              <Globe size={18} /> {lang.toUpperCase()}
            </button>
            <button onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }} className="btn btn-secondary" style={{ flex: 1, padding: '8px' }}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />} Tema
            </button>
          </div>
          
          <Link to="/teklif-al" className="btn btn-primary mt-4" onClick={() => setIsMobileMenuOpen(false)}>{t['header.quote']}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
