import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import driversReducer from './drivers';

const persistDriverConfig = {
  key: 'drivers',
  storage: AsyncStorage,
  whitelist: ['list', 'driversTotal', 'offset'],
};

const persistDriversReducer = persistReducer(
  persistDriverConfig,
  driversReducer,
);

const reducers = combineReducers({
  drivers: persistDriversReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
