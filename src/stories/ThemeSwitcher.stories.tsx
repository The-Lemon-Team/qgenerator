import React from 'react';
import { noop } from 'lodash';

import { Story } from '@storybook/react';

import {
  ThemeSwitcher,
  IThemeSwitcherProps,
} from '../modules/common/components';

const Template: Story<IThemeSwitcherProps> = (args) => (
  <ThemeSwitcher {...args} />
);

export const Default = Template.bind({});

Default.args = {
  checked: true,
  switchTheme: noop,
};

export default {
  title: 'ThemeSwitcher',
  component: ThemeSwitcher,
};
