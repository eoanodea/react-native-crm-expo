/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers/PeopleReducer';

import Navigation from './Navigation';
import { View } from 'react-native';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const Main: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default Main;
