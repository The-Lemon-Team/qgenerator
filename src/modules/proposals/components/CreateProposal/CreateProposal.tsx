import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, FieldProps, Formik, FormikHelpers } from 'formik';

import {
  AuthorIdField,
  FormActions,
  TextField,
  ToolWrapper,
} from '../../../common/components';

import {
  commonTranslations,
  usersTranslations,
} from '../../../../translations';

import { IUser } from '../../../users/interfaces';
import { IProposeQuestionDto } from '../../dto';

interface CreateProposalProps {
  onCreate(payload: IProposeQuestionDto): void;
  authorId: string;
}

const initialValues: IProposeQuestionDto = {
  text: '',
  authorId: '',
};

export const CreateProposal: React.FC<CreateProposalProps> = ({
  onCreate,
  authorId = '' as IUser['id'],
}) => {
  const handleSubmit = useCallback(
    (
      payload: IProposeQuestionDto,
      helpers: FormikHelpers<IProposeQuestionDto>,
    ) => {
      onCreate(payload);
      helpers.resetForm({ values: { ...initialValues, authorId } });
    },
    [authorId],
  );

  return (
    <Formik<IProposeQuestionDto>
      initialValues={{ ...initialValues, authorId }}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <ToolWrapper
          borderless={true}
          title={
            <FormattedMessage {...usersTranslations.createQuestionProposal} />
          }
        >
          <Field name="text">
            {({ field }: FieldProps) => (
              <TextField
                {...field}
                id="question-proposal-field"
                label={
                  <FormattedMessage {...commonTranslations.questionProposal} />
                }
                fullWidth
              />
            )}
          </Field>
          <AuthorIdField id="proposal-question-authorId" />
          <FormActions onSubmit={handleSubmit} />
        </ToolWrapper>
      )}
    </Formik>
  );
};
