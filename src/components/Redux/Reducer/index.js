import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import authReducer from './auth';
import movieReducer from './movie';
import cinemaReducer from './cinema';

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

// const movieConfig = {
//   key: 'movie',
//   storage: AsyncStorage,
//   stateReconciler: hardSet,
// };

// const cinemaConfig = {
//   key: 'cinema',
//   storage: AsyncStorage,
//   stateReconciler: hardSet,
// };

const reducers = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  movie: movieReducer,
  cinema: cinemaReducer,
});

export default reducers;
