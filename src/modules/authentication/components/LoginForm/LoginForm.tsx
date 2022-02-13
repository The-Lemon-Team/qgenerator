import React, { useCallback } from 'react';
import { Formik, Field, FieldProps } from 'formik';
import { FormattedMessage } from 'react-intl';
import { Alert } from '@material-ui/lab';

import { CentredForm } from '../CenteredForm';
import { Button, TextField } from '../../../common/components';
import { loginValidationForm } from './loginValidationForm';

import { registrationTranslations } from '../../../../translations';
import styles from '../SignUpForm/SignUpForm.module.css';

import { ILoginDto } from '../../dto';

export interface ILoginForm {
  login: string;
  password: string;
}

interface LoginFormProps {
  onLogin(payload: ILoginDto): void;
  isLoading: boolean;
  isFailed: boolean;
  isSucceed: boolean;
}

const initialValues: ILoginForm = {
  login: '',
  password: '',
};

export const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  isSucceed,
  isLoading,
  isFailed,
}) => {
  const handleSubmit = useCallback((values: ILoginForm) => {
    onLogin(values);
  }, []);

  return (
    <CentredForm>
      <Formik<ILoginForm>
        onSubmit={handleSubmit}
        validationSchema={loginValidationForm}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={initialValues}
      >
        {({ handleSubmit }) => (
          <>
            <div className={styles.fieldWrapper}>
              <Field name="login">
                {({ field, form }: FieldProps<ILoginForm['login']>) => (
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
                {({ field, form }: FieldProps<ILoginForm['password']>) => (
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

            {isSucceed && (
              <div className={styles.success}>
                <Alert color="success">
                  <FormattedMessage
                    {...registrationTranslations.successLogin}
                  />{' '}
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
                <FormattedMessage {...registrationTranslations.login} />
              </Button>
            </div>
          </>
        )}
      </Formik>
    </CentredForm>
  );
};
