import { AsyncStore } from '../../common/stores';
import { UserStore } from '../stores/UserStore';

const asyncStore = new AsyncStore();
export const userStore = new UserStore(asyncStore);
