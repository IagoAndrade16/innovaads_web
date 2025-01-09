import type { IUser } from './interfaces/IUser';
import Store from './Store';

export const userStore = Store.createStore<IUser | null>('user', null);
