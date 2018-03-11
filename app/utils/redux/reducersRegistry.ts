/**
 * Reducers Registry - util to allow dynamic reducers addition. *
 */

import { combineReducers, Reducer, Store } from 'redux';
import { isDev } from 'lib/utils/env';

class ReducersRegistry {
  reducers: { [index: string]: Reducer<{}> } = {};

  store: Store<{}> | null = null;

  constructor(_store: Store<{}>) {
    this.store = _store;
  }

  // tslint:disable-next-line
  registerReducer(key: string, reducer: Reducer<any>) {
    this.reducers[key] = reducer;

    if (isDev()) {
      // tslint:disable-next-line
      console.info(`ReducersRegistry: new reducer registered under ${key}`)
    }

    if (this.store) {
      this.store.replaceReducer(combineReducers(this.reducers));
    }
  }
}

let reducersRegistry: ReducersRegistry;

/**
 * Creates ReducersRegistry instance
 *
 * @param _store: Store<any>
 */
export const initReducersRegistry = (_store: Store<{}>) => reducersRegistry = new ReducersRegistry(_store);

/**
 * Registers new reducer under a defined key
 *
 * @param key - store key
 * @param reducer - reducer function
 */
export const registerReducer = (key: string, reducer: Reducer<{} | null>) => {
  if (!reducersRegistry) {
    throw new Error('Reducers registry not initialized');
  }

  reducersRegistry.registerReducer(key, reducer);
};
