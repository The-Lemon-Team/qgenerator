import React from 'react';

import { useTheme } from '../../styles';
import { Logo } from '../../components';

export const LogoContainer: React.FC = () => {
  const { isMainTheme } = useTheme();

  return <Logo isMainLogo={isMainTheme} />;
};
