type LikeType = string | number;

export interface ILikesStore {
  isLiked(id: LikeType): boolean;
  isDisliked(id: LikeType): boolean;
  like(id: LikeType): void;
  dislike(id: LikeType): void;
}
