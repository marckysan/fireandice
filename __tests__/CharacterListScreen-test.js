import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../App';
import {CharacterListScreen} from '../screens/CharacterListScreen';

describe('Character List Screen', () => {
  it('Character List Screen UI', () => {
    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <CharacterListScreen />
        </NavigationContainer>
      </Provider>,
    );
  });
});
