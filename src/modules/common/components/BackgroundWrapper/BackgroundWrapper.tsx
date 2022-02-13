import React from 'react';
import classNames from 'classnames';

import { useTheme } from '../../styles';

import styles from './BackgroundWrapper.module.css';

interface BackgroundWrapperProps {
  className?: string;
  onePage?: boolean;
}

export const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  className,
  children,
  onePage = false,
}) => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        background: theme.palette.common.black,
      }}
      className={classNames(onePage && styles.fullHeight, className)}
    >
      {children}
    </div>
  );
};
