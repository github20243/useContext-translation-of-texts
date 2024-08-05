import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

const languages = {
  ru: "русский текст",
  en: "english text",
  kg: "кыргызский текст"
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
