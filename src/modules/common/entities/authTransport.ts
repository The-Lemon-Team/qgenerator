import { AuthTransport, HttpTransport } from '../../../api';

export const authTransport = new AuthTransport({
  httpTransport: new HttpTransport(),
  window,
});
