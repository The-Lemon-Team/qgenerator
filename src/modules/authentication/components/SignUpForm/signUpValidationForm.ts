import { string, object } from 'yup';

import { api } from '../../../common/entities';

export const signUpValidationForm = object().shape({
  login: string()
    .required('Required')
    .test('checkDupName', 'User is exists', async (login?: string) => {
      return !!login && !(await api.usersService.findUserByLogin(login));
    }),
  password: string()
    .min(6, 'The password must be at least 6 but not longer than 30 characters')
    .max(
      50,
      'The password must be at least 6 but not longer than 30 characters',
    )
    .required('Required'),
  email: string().email('Invalid email').required('Required'),
});
