import React from 'react';
import { AppContext } from './AppProvider';

export const useApp = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within a AppProvider');
  }
  return context;
};
