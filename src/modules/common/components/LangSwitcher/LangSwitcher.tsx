import React, { useCallback, useMemo, useState } from 'react';
import { RadioGroup, FormControlLabel } from '@material-ui/core';

import { LangRadio } from './LangRadio';

import styles from './LangSwitcher.module.css';

export interface ILangSwitcherProps {
  data: Array<{
    id: string;
    value: string;
  }>;
  value: string;
  id: string;
  onChange?: (languageId: string) => void;
}

export const LangSwitcher = ({
  id,
  onChange,
  data,
  value,
}: ILangSwitcherProps) => {
  const initialValue = useMemo(() => {
    return value || data[0].id;
  }, [value, data]);
  const [currentLanguageId, setLanguage] = useState(initialValue);
  const handleOnChange = useCallback(
    (languageId) => {
      if (onChange) {
        onChange(languageId);
      } else {
        setLanguage(languageId);
      }
    },
    [onChange, setLanguage],
  );

  return (
    <RadioGroup
      id={id}
      value={currentLanguageId}
      aria-label="language"
      name="language-switcher"
      className={styles.switcher}
    >
      {data.map((languageData) => (
        <FormControlLabel
          checked={currentLanguageId === languageData.id}
          control={
            <LangRadio language={languageData.value}>
              {languageData.value}
            </LangRadio>
          }
          onChange={() => handleOnChange(languageData.id)}
          key={languageData.id}
          className={styles.radio}
          label={''}
        />
      ))}
    </RadioGroup>
  );
};
