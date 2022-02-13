import React from 'react';
import { useTheme } from '../../styles';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';

export const ThemeSwitcherContainer: React.FC = () => {
  const { switchTheme, isMainTheme } = useTheme();

  return <ThemeSwitcher checked={isMainTheme} switchTheme={switchTheme} />;
};
