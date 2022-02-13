import React from 'react';
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import cn from 'classnames';

import { FromNowDate, Likes } from '../../../common/components';

import styles from './Answer.module.css';

interface IAnswerProps {
  likes: number;
  dislikes: number;
  disliked: boolean;
  liked: boolean;
  avatar: string;
  authorName: string;
  date: string;
  text: string;
  isLoading: boolean;
}

const useStyles = makeStyles((theme) => ({
  time: {
    color: theme.palette.text.disabled,
  },
}));

export const Answer: React.FC<IAnswerProps> = ({
  authorName,
  avatar,
  likes,
  liked,
  dislikes,
  disliked,
  date,
  isLoading,
  text,
}) => {
  const classNames = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.avatarWrapper}>
        {isLoading ? (
          <Skeleton variant="rect" width={48} height={48} />
        ) : (
          <Avatar variant="square" src={avatar} className={styles.avatar} />
        )}
      </div>
      <div className="content">
        <div className={styles.header}>
          <div className="name">
            {isLoading ? (
              <Skeleton width={185} height={20} />
            ) : (
              <Typography variant="subtitle1" color="textPrimary">
                {authorName}
              </Typography>
            )}
          </div>
          <div className={styles.timeWrapper}>
            {isLoading ? (
              <Skeleton width={95} height={20} />
            ) : (
              <Typography
                variant="subtitle2"
                color="secondary"
                className={cn(classNames.time, styles.time)}
              >
                <FromNowDate date={date} />
              </Typography>
            )}
          </div>
        </div>
        <div className={styles.textWrapper}>
          {isLoading ? (
            <>
              <Skeleton width={593} height={20} />
              <Skeleton width={647} height={20} />
            </>
          ) : (
            <Typography
              variant="caption"
              color="textPrimary"
              className={styles.text}
            >
              {text}
            </Typography>
          )}
        </div>
        <div className="actions">
          <Likes
            liked={liked}
            disliked={disliked}
            likes={likes}
            dislikes={dislikes}
            isLoading={isLoading}
            //eslint-disable-next-line @typescript-eslint/no-empty-function
            onLike={() => {}}
            //eslint-disable-next-line @typescript-eslint/no-empty-function
            onDislike={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
