import { useContext } from 'react';

import { ThemeInteractions } from './ThemeProvider';

export function useTheme() {
  return useContext(ThemeInteractions);
}
