import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './Reducer';

const persistedStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));

  const persistor = persistStore(store);
  return {store, persistor};
};

export default persistedStore;
