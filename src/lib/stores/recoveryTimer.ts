import type { IRecoveryTimer } from "./interfaces/IRecoveryTimer";
import Store from "./Store";



export const recoveryTimer = Store.createStore<IRecoveryTimer | null>('recoveryTimer', null);