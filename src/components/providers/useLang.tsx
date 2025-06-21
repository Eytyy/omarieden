import React from 'react';
import { LangContext } from './LangProvider';

export const useLang = () => {
  const context = React.useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
