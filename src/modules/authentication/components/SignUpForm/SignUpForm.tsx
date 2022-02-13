import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik, Field, FieldProps } from 'formik';
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import { Button, TextField } from '../../../common/components';
import { signUpValidationForm } from './signUpValidationForm';

import styles from './SignUpForm.module.css';
import { loginUrl } from '../../../common/utils';
import { registrationTranslations } from '../../../../translations';

export interface ISignUpForm {
  login: string;
  password: string;
  email: string;
}

interface SignUpFormProps {
  onSignUp(payload: ISignUpForm): void;
  isLoading: boolean;
  isFailed: boolean;
  isSucceed: boolean;
}

const initialValues: ISignUpForm = {
  login: '',
  password: '',
  email: '',
};

export const SignUpForm: React.FC<SignUpFormProps> = ({
  onSignUp,
  isFailed,
  isSucceed,
  isLoading,
}) => {
  const handleSubmit = useCallback(
    (values: ISignUpForm) => {
      onSignUp(values);
    },
    [onSignUp],
  );

  return (
    <Formik<ISignUpForm>
      onSubmit={handleSubmit}
      validationSchema={signUpValidationForm}
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={initialValues}
    >
      {({ handleSubmit }) => {
        return (
          <>
            <div className={styles.fieldWrapper}>
              <Field name="login">
                {({ field, form }: FieldProps<ISignUpForm['login']>) => (
                  <>
                    <TextField
                      id="login"
                      placeholder="login"
                      disabled={isLoading}
                      label={
                        <FormattedMessage {...registrationTranslations.login} />
                      }
                      fullWidth
                      error={isFailed || !!form.errors['login']}
                      helperText={form.errors['login']}
                      {...field}
                    />
                  </>
                )}
              </Field>
            </div>
            <div className={styles.fieldWrapper}>
              <Field name="password">
                {({ field, form }: FieldProps<ISignUpForm['password']>) => (
                  <TextField
                    id="password"
                    disabled={isLoading}
                    label={
                      <FormattedMessage
                        {...registrationTranslations.password}
                      />
                    }
                    type="password"
                    fullWidth
                    className={styles.field}
                    error={isFailed || !!form.errors['password']}
                    helperText={form.errors['password']}
                    {...field}
                  />
                )}
              </Field>
            </div>
            <div className={styles.fieldWrapper}>
              <Field name="email">
                {({ field, form }: FieldProps<ISignUpForm['email']>) => (
                  <TextField
                    id="email"
                    disabled={isLoading}
                    label={
                      <FormattedMessage {...registrationTranslations.email} />
                    }
                    type="email"
                    fullWidth
                    className={styles.field}
                    error={isFailed || !!form.errors['email']}
                    helperText={form.errors['email']}
                    {...field}
                  />
                )}
              </Field>
            </div>
            {isSucceed && (
              <div className={styles.success}>
                <Alert color="success">
                  <FormattedMessage
                    {...registrationTranslations.successRegistration}
                  />{' '}
                  <Link to={loginUrl}>
                    <FormattedMessage {...registrationTranslations.login} />
                  </Link>
                </Alert>
              </div>
            )}

            <div>
              <Button
                size="small"
                type="submit"
                onClick={() => handleSubmit()}
                disabled={isLoading}
              >
                <FormattedMessage {...registrationTranslations.registration} />
              </Button>
            </div>
          </>
        );
      }}
    </Formik>
  );
};
