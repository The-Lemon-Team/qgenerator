import { action, makeAutoObservable, observable } from 'mobx';
import { filter } from 'lodash';
import { makePersistable } from 'mobx-persist-store';

import { ILikesStore } from '../../interfaces/ILikesStore';

type LikeType = string | number;

export class LikesStore implements ILikesStore {
  @observable liked: Array<LikeType> = [];
  @observable disliked: Array<LikeType> = [];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'LikesStore',
      properties: ['liked', 'disliked'],
      storage: window.localStorage,
    });
  }

  isLiked = (id: LikeType) => {
    return this.liked.includes(id);
  };

  isDisliked = (id: LikeType) => {
    return this.disliked.includes(id);
  };

  @action
  like = (likedId: LikeType) => {
    const disliked = this.isDisliked(likedId)
      ? filter(this.disliked, (entityId) => entityId !== likedId)
      : this.disliked;
    const liked = this.isLiked(likedId)
      ? filter(this.liked, (entityId) => entityId !== likedId)
      : [...this.liked, likedId];

    this.liked = liked;
    this.disliked = disliked;
  };

  @action
  dislike = (dislikedId: number | string) => {
    const liked = this.isLiked(dislikedId)
      ? filter(this.liked, (entityId) => entityId !== dislikedId)
      : this.liked;
    const disliked = this.isDisliked(dislikedId)
      ? filter(this.disliked, (entityId) => entityId !== dislikedId)
      : [...this.disliked, dislikedId];

    this.liked = liked;
    this.disliked = disliked;
  };
}
