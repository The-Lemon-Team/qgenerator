import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { intl } from './inlt';

// we expect that russian will be only language for now so DEFAULT_LANGUAGE is `ru`
export const IntlProvider: React.FC = ({ children }) => {
  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
};
