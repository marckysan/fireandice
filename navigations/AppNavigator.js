import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen';
import CharacterListScreen from '../screens/CharacterListScreen';
// import FavouriteCharactersScreen from '../screens/FavouriteCharactersScreen';
// import SearchCharacterScreen from '../screens/SearchCharacterScreen';

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

// const CharacterBottomTabNavigator = createBottomTabNavigator({
//   listPage: CharacterListScreen,
//   searchCharactersPage: SearchCharacterScreen,
//   favouriteCharactersPage: FavouriteCharactersScreen,
// });

export default createAppContainer(AppNavigator);
