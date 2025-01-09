import type { IUserAuth } from './interfaces/IUserAuth';
import Store from './Store';

export const userAuthStore = Store.createStore<IUserAuth | null>('userAuth', null);
