import React from 'react';

import { Story } from '@storybook/react';

import {
  QuestionCounter,
  IQuestionNumProps,
} from '../modules/question/components/QuestionCounter';

const Template: Story<IQuestionNumProps> = (args) => (
  <QuestionCounter {...args} />
);

export const Default = Template.bind({});

Default.args = {
  count: 112,
};

export default {
  title: 'QuestionCounter',
  component: QuestionCounter,
  decorators: [
    (BookStory: Story) => (
      <div style={{ background: '#E7E7E7' }}>
        <BookStory />
      </div>
    ),
  ],
};
