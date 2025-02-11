import React from 'react';

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';

import App from './App';
import {name as appName} from './app.json';
import store from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const RNRedux = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={ persistStore(store)}>
        <App />
      </PersistGate >
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);
