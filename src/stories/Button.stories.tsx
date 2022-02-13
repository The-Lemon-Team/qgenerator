import React from 'react';

import { Story } from '@storybook/react';

import { ButtonProps, Button } from '../modules/common/components';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Click me!',
  color: 'primary',
};

export const Outlined = Template.bind({});

Outlined.args = {
  children: 'Click me!',
  color: 'primary',
  variant: 'outlined',
};

export const Text = Template.bind({});

Text.args = {
  children: 'Click me!',
  variant: 'text',
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: 'Click me!',
  disabled: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Click me!',
  color: 'secondary',
};

export const Small = Template.bind({});

Small.args = {
  children: 'Click me!',
  size: 'small',
};

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'large'],
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: ['text', 'outlined', 'contained'],
      },
    },
  },
};
