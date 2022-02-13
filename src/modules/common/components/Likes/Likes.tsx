import React, { useMemo } from 'react';
import { debounce } from 'lodash';
import { Button, Typography } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import { Skeleton } from '@material-ui/lab';

import styles from './Likes.module.css';

export interface ILikesProps {
  liked: boolean;
  disliked: boolean;
  likes: number;
  dislikes: number;
  isLoading: boolean;

  onLike: () => void;
  onDislike: () => void;
}

export const Likes: React.FC<ILikesProps> = ({
  disliked,
  dislikes,
  isLoading,
  liked,
  likes,
  onDislike,
  onLike,
}) => {
  const likedIcon = useMemo(
    () => (liked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />),
    [liked],
  );
  const dislikedIcon = useMemo(
    () => (disliked ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />),
    [disliked],
  );
  const handleOnLike = debounce(onLike, 500);
  const handleOnDislike = debounce(onDislike, 500);

  return (
    <div className={styles.root}>
      <div className={styles.item}>
        {isLoading ? (
          <Skeleton width={80} height={24} />
        ) : (
          <Button
            startIcon={likedIcon}
            color="primary"
            onClick={handleOnLike}
            className={styles.button}
          >
            <Typography variant="caption" color="textPrimary">
              {likes}
            </Typography>
          </Button>
        )}
      </div>
      <div className={styles.item}>
        {isLoading ? (
          <Skeleton width={80} height={24} />
        ) : (
          <Button
            startIcon={dislikedIcon}
            color="primary"
            onClick={handleOnDislike}
            className={styles.button}
          >
            <Typography variant="caption" color="textPrimary">
              {dislikes}
            </Typography>
          </Button>
        )}
      </div>
    </div>
  );
};
