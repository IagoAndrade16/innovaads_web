import type { IChoosedPackage } from './interfaces/IChoosedPackage';
import Store from './Store';

export const choosedPackageStore = Store.createStore<IChoosedPackage | null>('choosedPackage', null);
