import React, { createContext, useContext, useEffect, useState } from "react";
import { Language } from "../types/types";

interface LanguageContextProps {
  selectedLanguage: Language;
  setSelectedLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [ selectedLanguage, setSelectedLanguage ] = useState<Language>('cir'); 

  const handleChangeLanguage = (language: Language) => {
    setSelectedLanguage(language);
    localStorage.setItem('lang', language);
  }

  useEffect(() => {
    const language = localStorage.getItem('lang') ?? 'cir';
    setSelectedLanguage(language as Language);
  }, []); 

  return (
    <LanguageContext.Provider value={{
      selectedLanguage,
      setSelectedLanguage: handleChangeLanguage
    }}>
      { children }
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
