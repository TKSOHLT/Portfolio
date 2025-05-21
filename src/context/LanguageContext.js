"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import EN from '../../app/data/portfolio.json';
import ES from '../../app/data/portafolio.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'EN' || storedLang === 'ES') {
      setLanguage(storedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'ES' : 'EN'));
  };

  const data = language === 'EN' ? EN : ES;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
