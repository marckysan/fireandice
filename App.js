import React from 'react';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AppNavigator from './navigations/AppNavigator';
import {CharacterReducer} from './store/reducers/CharacterReducer';

const rootReducer = combineReducers({
  character: CharacterReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
enableScreens();

export const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
