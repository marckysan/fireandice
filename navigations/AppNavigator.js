import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen';
import CharacterListScreen from '../screens/CharacterListScreen';

const AppNavigator = createStackNavigator(
  {
    ListPage: CharacterListScreen,
    CharacterDetailsPage: CharacterDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#b9540c',
      },
      headerTitleStyle: {
        fontFamily: 'monospace',
        fontSize: 15,
      },
      headerTintColor: 'white',
    },
  },
);

export default createAppContainer(AppNavigator);
