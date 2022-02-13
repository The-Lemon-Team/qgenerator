import React from 'react';
import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export interface IThemeSwitcherProps {
  checked: boolean;
  switchTheme: () => void;
}

const CustomizedSwitcher = withStyles(({ palette }) => ({
  switchBase: {
    color: palette.primary.main,
    '&$checked': {
      color: palette.primary.main,
    },
    '&$checked + $track': {
      backgroundColor: palette.primary.main,
    },
  },
  checked: {},
  track: {},
}))(Switch);

export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({
  checked,
  switchTheme,
}) => {
  return <CustomizedSwitcher checked={checked} onChange={switchTheme} />;
};
