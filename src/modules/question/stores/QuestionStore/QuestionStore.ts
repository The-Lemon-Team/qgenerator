import { action, computed, observable } from 'mobx';

import { IQuestionService } from '../../services';
import { IQuestionStore, IQuestionDataStore } from '../../interfaces';
import { INavigator } from '../../../common/interfaces';
import { IQuestionsService } from '../../../questions/interfaces';

export class QuestionStore implements IQuestionStore {
  @observable private excludeIds: number[] = [];

  constructor(
    private questionsService: IQuestionsService,
    private questionService: IQuestionService,
    private questionDataStore: IQuestionDataStore,
    private navigator: INavigator,
  ) {}

  @computed get isLiked() {
    return this.questionDataStore.isLiked;
  }

  @computed get isDisliked() {
    return this.questionDataStore.isDisliked;
  }

  @computed get data() {
    return this.questionDataStore.data;
  }

  @computed get isLoading() {
    return this.questionDataStore.loading.isLoading;
  }
  @computed get completed() {
    return this.questionDataStore.loading.isSucceed;
  }
  @computed get failed() {
    return this.questionDataStore.loading.isFailed;
  }

  @action
  async requestQuestion(questionId: number) {
    const excludeIds = this.excludeIds?.includes(questionId)
      ? this.excludeIds
      : [...this.excludeIds, questionId];

    try {
      this.questionDataStore.preRequestQuestionActions();
      const question = await this.questionsService.getQuestion(questionId);

      this.questionDataStore.requestQuestionSuccess(question);
      this.excludeIds = excludeIds;
    } catch (e) {
      this.questionDataStore.requestQuestionError();
    }
  }

  @action
  async randomizeQuestion() {
    try {
      this.questionDataStore.preRequestQuestionActions();
      const {
        question,
        excludeIds,
      } = await this.questionsService.randomizeQuestion({
        excludeIds: this.excludeIds,
      });

      this.questionDataStore.requestQuestionSuccess(question);
      this.excludeIds = excludeIds;
      this.navigator.goToQuestion(question.id);
    } catch (e) {
      this.questionDataStore.requestQuestionError();
    }
  }

  async likeQuestion() {
    try {
      if (!this.isLiked && !this.isDisliked) {
        this.questionDataStore.increaseLikes();

        await this.questionService.increaseQuestionLikes(
          this.questionDataStore.questionId,
        );
      }

      if (this.isDisliked) {
        this.questionDataStore.decreaseDislikes();
        this.questionDataStore.increaseLikes();

        await this.questionService.decreaseQuestionDislikes(
          this.questionDataStore.questionId,
        );
        await this.questionService.increaseQuestionLikes(
          this.questionDataStore.questionId,
        );
      }

      if (this.isLiked) {
        this.questionDataStore.decreaseLikes();

        await this.questionService.decreaseQuestionLikes(
          this.questionDataStore.questionId,
        );
      }

      this.questionDataStore.likeQuestion();
    } catch (e) {
      // the catch flow
    }
  }

  async dislikeQuestion() {
    try {
      if (!this.isLiked && !this.isDisliked) {
        this.questionDataStore.increaseDislikes();

        await this.questionService.increaseQuestionLikes(
          this.questionDataStore.questionId,
        );
      }

      if (this.isLiked) {
        this.questionDataStore.decreaseLikes();
        this.questionDataStore.increaseDislikes();

        await this.questionService.decreaseQuestionLikes(
          this.questionDataStore.questionId,
        );
        await this.questionService.increaseQuestionDislikes(
          this.questionDataStore.questionId,
        );
      }

      if (this.isDisliked) {
        this.questionDataStore.decreaseDislikes();

        await this.questionService.decreaseQuestionDislikes(
          this.questionDataStore.questionId,
        );
      }

      this.questionDataStore.dislikeQuestion();
    } catch (e) {
      // the catch flow
    }
  }
}
