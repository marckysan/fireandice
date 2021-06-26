import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {App} from '..';

// jest.useFakeTimers();

it('renders correctly', async () => {
  renderer.create(<App />);
});
