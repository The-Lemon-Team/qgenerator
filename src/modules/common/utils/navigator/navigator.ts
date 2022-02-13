import { history } from '../../entities';
import { buildQuestionId, settingsUrl } from '../urls';

import { INavigator } from '../../interfaces';

const goToSettings = () => {
  history.push(settingsUrl);
};

const goToQuestion = (questionId: number) => {
  history.push(buildQuestionId(questionId));
};

export const navigator: INavigator = {
  goToQuestion,
  goToSettings,
};
