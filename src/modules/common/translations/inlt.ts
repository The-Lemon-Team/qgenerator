import { createIntl, createIntlCache } from 'react-intl';

import { DEFAULT_LANGUAGE } from '../../../constants/env';

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

export const intl = createIntl(
  {
    locale: DEFAULT_LANGUAGE,
    defaultLocale: DEFAULT_LANGUAGE,
  },
  cache,
);
