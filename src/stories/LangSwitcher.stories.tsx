// Button.stories.tsx

import React from 'react';

import { Story } from '@storybook/react';

import {
  LangSwitcher,
  ILangSwitcherProps,
} from '../modules/common/components/LangSwitcher';

//👇 We create a “template” of how args map to rendering
const Template: Story<ILangSwitcherProps> = (args) => (
  <LangSwitcher {...args} />
);

export const Default = Template.bind({});

Default.args = {
  data: [
    {
      id: '1',
      value: 'ENG',
    },
    {
      id: '2',
      value: 'RUS',
    },
  ],
  value: '1',
  id: 'lang-switcher',
};

export default {
  title: 'LangSwitcher',
  component: LangSwitcher,
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
  },
};
