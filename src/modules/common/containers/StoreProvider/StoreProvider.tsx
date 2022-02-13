import React from 'react';

import { StoreContext } from './StoreContext';
import { rootStore } from '../../entities';

export const StoreProvider: React.FC = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};
