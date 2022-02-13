import React from 'react';
import { FormattedMessage } from 'react-intl';

import { DataFields, DataField } from '../../../users/components';

import { usersTranslations } from '../../../../translations';

import { IUser } from '../../../users/interfaces';

export interface UserDataProps extends Pick<IUser, 'login' | 'email' | 'role'> {
  answerCount: number;
  questionsCount: number;
  questionProposalsCount: number;
}

export const UserData: React.FC<UserDataProps> = ({
  login,
  email,
  answerCount,
  questionsCount,
  questionProposalsCount,
  role,
}) => {
  return (
    <DataFields<UserDataProps>
      title={<FormattedMessage {...usersTranslations.userInfo} />}
    >
      <DataField
        name="login"
        value={login}
        label={<FormattedMessage {...usersTranslations.userLogin} />}
      />
      <DataField
        name="email"
        value={email}
        label={<FormattedMessage {...usersTranslations.email} />}
      />
      <DataField
        name="answerCount"
        value={answerCount}
        label={<FormattedMessage {...usersTranslations.questionsCount} />}
      />
      <DataField
        name="questionsCount"
        value={questionsCount}
        label={<FormattedMessage {...usersTranslations.answerCount} />}
      />
      <DataField
        name="questionProposalsCount"
        value={questionProposalsCount}
        label={
          <FormattedMessage {...usersTranslations.questionProposalsCount} />
        }
      />
      <DataField
        name="role"
        value={role}
        label={<FormattedMessage {...usersTranslations.role} />}
      />
    </DataFields>
  );
};
