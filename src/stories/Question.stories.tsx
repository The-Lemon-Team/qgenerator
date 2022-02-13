import React from 'react';
import { noop } from 'lodash';

import { Story } from '@storybook/react';

import { Question, IQuestionProps } from '../modules/question/components';
import { ReactComponent as IllustrationSvg } from './assets/illustration.svg';

const Template: Story<IQuestionProps> = (args) => <Question {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 1,
  text: 'Чем заняться?',
  dislikes: 12,
  likes: 15000,
  liked: true,
  disliked: false,
  illustration: <IllustrationSvg />,

  onLike: noop,
  onDislike: noop,
};

export default {
  title: 'Question',
  component: Question,
  decorators: [
    (BookStory: Story) => (
      <div style={{ background: '#0D0E13', padding: '30px' }}>
        <BookStory />
      </div>
    ),
  ],
};
