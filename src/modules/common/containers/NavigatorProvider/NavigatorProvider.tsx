import React from 'react';

import { NavigatorContext } from './NavigatorContext';
import { navigator } from '../../utils/navigator';

export const NavigatorProvider: React.FC = ({ children }) => {
  return (
    <NavigatorContext.Provider value={navigator}>
      {children}
    </NavigatorContext.Provider>
  );
};
