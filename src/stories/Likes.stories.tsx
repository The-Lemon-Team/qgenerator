import React from 'react';
import { noop } from 'lodash';

import { Story } from '@storybook/react';

import { Likes, ILikesProps } from '../modules/common/components';

const Template: Story<ILikesProps> = (args) => <Likes {...args} />;

export const Default = Template.bind({});

Default.args = {
  likes: 1001,
  dislikes: 101,
  disliked: false,
  liked: true,
  onDislike: noop,
  onLike: noop,
};

export default {
  title: 'Likes',
  component: Likes,
  decorators: [
    (BookStory: Story) => (
      <div style={{ background: '#E7E7E7' }}>
        <BookStory />
      </div>
    ),
  ],
};
