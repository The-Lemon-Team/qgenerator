import { useCallback, useMemo, useState } from 'react';

import { mainTheme } from './mainTheme';
import { secondaryTheme } from './secondaryTheme';

export function useThemeInteractions() {
  const [theme, setTheme] = useState(mainTheme);
  const setMainTheme = useCallback(() => {
    setTheme({ ...mainTheme });
  }, [setTheme, theme]);
  const setSecondaryTheme = useCallback(() => {
    setTheme({ ...secondaryTheme });
  }, [setTheme, theme]);
  const isMainTheme = useMemo(
    () => theme.palette.primary.main === mainTheme.palette.primary.main,
    [theme],
  );
  const switchTheme = useCallback(() => {
    if (isMainTheme) {
      setSecondaryTheme();
    }

    if (!isMainTheme) {
      setMainTheme();
    }
  }, [isMainTheme, setSecondaryTheme, setMainTheme]);

  return {
    setMainTheme,
    switchTheme,
    setSecondaryTheme,
    theme,
    isMainTheme,
  };
}
