import { string, object } from 'yup';

export const loginValidationForm = object().shape({
  login: string().required('Required'),
  password: string()
    .min(6, 'The password must be at least 6 but not longer than 30 characters')
    .max(
      50,
      'The password must be at least 6 but not longer than 30 characters',
    )
    .required('Required'),
});
