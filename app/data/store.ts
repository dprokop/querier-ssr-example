import { initReducersRegistry } from 'app/utils/redux/reducersRegistry';
import { isDev } from 'lib/utils/env';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MockStore } from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

export interface StoreShape {

}

let store: Store<StoreShape>;
export const sagaMiddleware = createSagaMiddleware();

export const getStore = (isServer?: boolean): Store<StoreShape> => {
  return store;
};

export const getState = (): StoreShape => {
  return getStore().getState();
};

export function* rootSaga() {
  yield all([]);
}

export const configureStore = (isServer?: boolean): Store<StoreShape> => {
  if (!isServer) {
    // Initial store injected server side
    const preloadedState = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
    store = createStore<StoreShape>((state, action) => state, preloadedState, composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    ));

    sagaMiddleware.run(rootSaga);

    // For dev purposes we are giving access to store on window
    if (isDev()) {
      window.__APP__ = {
        store
      };
    }
  } else {
    store = createStore<StoreShape>(
      (state, action) => state,
      {
        configurator: {},
      },
      applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);
  }

  initReducersRegistry(store);

  // registerReducer(STORE_CONTEXT_STORE_KEY, storeContextReducer);
  // registerReducer(PRODUCTS_STORE_KEY, productsReducer);
  // registerReducer(CONFIGURATOR_STORE_KEY, configuratorReducer);
  // registerReducer(CART_STORE_KEY, cartReducer);

  return store;
};

/**
 * For testing purposes - allows temporarily override store with mocked one.
 * Use redux-mock-store package for mocking store of your needs
 */
export const overrideStoreInstance = (storeMock: Store<StoreShape> | MockStore<StoreShape>) => {
  store = storeMock;
};
