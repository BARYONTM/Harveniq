import React, { createContext, useContext, useState, useEffect } from 'react';
import tr from '../locales/tr.json';
import en from '../locales/en.json';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('harveniq-lang');
    if (saved) return saved;
    return 'tr';
  });

  const [t, setT] = useState(lang === 'en' ? en : tr);

  useEffect(() => {
    localStorage.setItem('harveniq-lang', lang);
    setT(lang === 'en' ? en : tr);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
