import {expect} from '@jest/globals';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CharacterListScreen from '../screens/CharacterListScreen';
import {
  fetchDataRequest,
  fetchDataSuccess,
} from '../store/actions/PageNavigation';

describe('Character List Screen', () => {
  const middleWares = [thunk];
  const mockStore = configureStore(middleWares);

  it('Character List Screen Fetch Data Success', () => {
    // const init = initialState;
    const init = {
      isLoading: true,
      pageNumber: 1,
      pageQueryString: '?page=',
      pageDisplayLimit: '&pageSize=10',
      apiLink: 'https://www.anapioficeandfire.com/api/characters/',
      imageLink: 'https://picsum.photos/id/',
      searchLink: 'https://www.anapioficeandfire.com/api/characters',
      characters: [],
      filteredCharacters: [],
      favouriteCharacters: [],
      error: '',
    };
    const store = mockStore(init);

    const request = fetchDataRequest;
    const success = fetchDataSuccess;

    console.log('Request', {request});

    console.log('Screen', CharacterListScreen);

    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <CharacterListScreen />
        </NavigationContainer>
      </Provider>,
    );

    expect(getByText('First')).toBeDefined();
    expect(getByText('Previous')).toBeDefined();
    expect(getByText('Next')).toBeDefined();
    expect(getByText('Last')).toBeDefined();
  });
});
