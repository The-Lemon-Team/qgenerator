import React from 'react';

import { Story } from '@storybook/react';

import { Logo, ILogoProps } from '../modules/common/components';

const Template: Story<ILogoProps> = (args) => <Logo {...args} />;

export const Main = Template.bind({});

Main.args = {
  isMainLogo: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  isMainLogo: false,
};

export default {
  title: 'Logo',
  component: Logo,
  decorators: [
    (BookStory: Story) => (
      <div style={{ background: '#E7E7E7' }}>
        <BookStory />
      </div>
    ),
  ],
};
