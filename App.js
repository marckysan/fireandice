import React from 'react';
import {StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import AppNavigator from './navigations/AppNavigator';
import CharacterReducer from './store/reducers/CharacterReducer';

const rootReducer = combineReducers({
  character: CharacterReducer,
});
const store = createStore(rootReducer);
enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
