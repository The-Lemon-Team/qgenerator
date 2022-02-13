import React, { useMemo } from 'react';
import { noop } from 'lodash';

import { LangSwitcher } from '../../components';
import { LANGUAGES, DEFAULT_LANGUAGE } from '../../../../constants/env';

export const LangSwitcherContainer: React.FC = () => {
  const languages = useMemo(() => {
    return LANGUAGES.map((language, index) => ({
      id: index + '',
      value: language,
    }));
  }, [LANGUAGES]);
  const currentLanguage =
    languages.find((language) => language.value === DEFAULT_LANGUAGE) ||
    languages[0];

  return (
    <LangSwitcher
      data={languages}
      value={currentLanguage.id}
      onChange={noop}
      id="language-switcher"
    />
  );
};
