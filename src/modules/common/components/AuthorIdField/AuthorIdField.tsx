import React from 'react';
import { Field, FieldProps } from 'formik';
import { FormattedMessage } from 'react-intl';

import { TextField } from '../TextField';

import { commonTranslations } from '../../../../translations';

interface AuthorIdFieldProps {
  id: string;
}

export const AuthorIdField: React.FC<AuthorIdFieldProps> = ({ id }) => {
  return (
    <Field name="authorId">
      {({ field }: FieldProps) => (
        <TextField
          {...field}
          id={id}
          label={<FormattedMessage {...commonTranslations.authorId} />}
          fullWidth
        />
      )}
    </Field>
  );
};
