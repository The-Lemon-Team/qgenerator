import { useContext } from 'react';

import { NavigatorContext } from './NavigatorContext';

export function useNavigator() {
  return useContext(NavigatorContext);
}
