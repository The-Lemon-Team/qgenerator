import React from 'react';

import { SkeletonContext } from './SkeletonContext';

export const SkeletonProvider: React.FC = ({ children }) => {
  return (
    <SkeletonContext.Provider
      value={{
        isLoading: false,
      }}
    >
      {children}
    </SkeletonContext.Provider>
  );
};
