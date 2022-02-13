import { useContext } from 'react';

import { StoreContext } from './StoreContext';

export function useStores() {
  return useContext(StoreContext);
}
