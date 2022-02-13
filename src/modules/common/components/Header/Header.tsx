import React from 'react';

import styles from './Header.module.css';

import {
  LogoContainer,
  LangSwitcherContainer,
  ThemeSwitcherContainer,
} from '../../containers';
import { OutWrapper } from '../OutWrapper';

export const Header: React.FC = () => {
  return (
    <OutWrapper>
      <LogoContainer />
      <div className={styles.tools}>
        <LangSwitcherContainer />
        <ThemeSwitcherContainer />
      </div>
    </OutWrapper>
  );
};
