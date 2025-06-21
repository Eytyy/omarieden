import React, { createContext, useState, useEffect } from 'react';

interface LangContextType {
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

interface LangProviderProps {
  children: React.ReactNode;
}

const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export { LangProvider, LangContext };
