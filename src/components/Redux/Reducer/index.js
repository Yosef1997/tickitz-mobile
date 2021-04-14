import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import authReducer from './auth';
import movieReducer from './movie';
import orderReducer from './order';

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const movieConfig = {
  key: 'movie',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const reducers = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  movie: persistReducer(movieConfig, movieReducer),
  order: orderReducer,
});

export default reducers;
