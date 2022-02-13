import { action, computed, makeAutoObservable, observable } from 'mobx';

import { IAsyncStore, ILikesStore } from '../../../common/interfaces';
import { AsyncStatus } from '../../../common/enum';
import { IQuestion, IQuestionDataStore } from '../../interfaces';

export class QuestionDataStore implements IQuestionDataStore {
  private readonly initialState = {
    id: -1,
    commentariesCount: 0,
    likes: 0,
    dislikes: 0,
    author: {
      id: '',
      avatar: '',
      name: '',
    },
    answers: [],
    text: '',
  };
  @observable isLoading = false;
  @observable error = false;
  @observable completed = false;
  @observable data: IQuestion = this.initialState;

  constructor(private likesStore: ILikesStore, public loading: IAsyncStore) {
    makeAutoObservable(this);
  }

  get questionId() {
    return this.data?.id || -1;
  }

  @computed get isLiked() {
    return this.likesStore.isLiked(this.questionId);
  }

  @computed get isDisliked() {
    return this.likesStore.isDisliked(this.questionId);
  }

  @action
  likeQuestion = () => {
    return this.likesStore.like(this.questionId);
  };

  @action
  dislikeQuestion = () => {
    return this.likesStore.dislike(this.questionId);
  };

  @action
  setData = (data: IQuestion) => {
    this.data = this.transformData(data);
  };

  @action
  increaseLikes = () => {
    this.data && this.data.likes++;
  };

  @action
  decreaseLikes = () => {
    this.data && this.data.likes--;
  };

  @action
  increaseDislikes = () => {
    this.data && this.data.dislikes++;
  };

  @action
  decreaseDislikes = () => {
    this.data && this.data.dislikes--;
  };

  @action
  preRequestQuestionActions = () => {
    this.loading.setStatus(AsyncStatus.Loading);
  };

  @action
  requestQuestionSuccess = (data: IQuestion) => {
    this.loading.resetStatus();
    this.setData(data);
  };

  @action
  requestQuestionError = () => {
    this.loading.setStatus(AsyncStatus.Failed);
  };

  private transformData(data: IQuestion): IQuestion {
    return { ...this.initialState, ...data };
  }
}
