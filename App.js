import React from 'react';
import {StyleSheet} from 'react-native';
import {combineReducers, createStore} from 'redux';
import AppNavigator from './navigations/AppNavigator';
import CharacterReducer from './store/reducers/CharacterReducer';

const rootReducer = combineReducers({
  character: CharacterReducer,
});
const store = createStore(rootReducer);

const App = () => {
  return <AppNavigator />;
};

const styles = StyleSheet.create({});

export default App;
