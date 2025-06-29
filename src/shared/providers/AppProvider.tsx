import React, { createContext, useReducer, useEffect, useCallback } from 'react';

interface LangContextType {
  lang: 'en' | 'ar';
  mobileMenu: 'compact' | 'full';
  setMobileMenu: (menu: 'compact' | 'full') => void;
  setLang: (lang: 'en' | 'ar') => void;
}

const AppContext = createContext<LangContextType | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
}

type LangAction = { type: 'SET_LANG'; payload: 'en' | 'ar' };
type MobileMenuAction = { type: 'SET_MOBILE_MENU'; payload: 'compact' | 'full' };

type Action = LangAction | MobileMenuAction;

type State = {
  lang: 'en' | 'ar';
  mobileMenu: 'compact' | 'full';
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_LANG':
      return { ...state, lang: action.payload };
    case 'SET_MOBILE_MENU':
      return { ...state, mobileMenu: action.payload };
    default:
      return state;
  }
};

const getInitialState = () => {
  const lang = localStorage.getItem('lang');
  return {
    lang: (lang as 'en' | 'ar') || 'en',
    mobileMenu: 'full' as 'compact' | 'full',
  };
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  useEffect(() => {
    localStorage.setItem('lang', state.lang);
    if (state.lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }
  }, [state.lang]);

  const setLang = useCallback((lang: 'en' | 'ar') => {
    dispatch({ type: 'SET_LANG', payload: lang });
  }, []);

  const setMobileMenu = useCallback((menu: 'compact' | 'full') => {
    dispatch({ type: 'SET_MOBILE_MENU', payload: menu });
  }, []);

  return (
    <AppContext.Provider
      value={{
        lang: state.lang,
        mobileMenu: state.mobileMenu,
        setMobileMenu,
        setLang,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
