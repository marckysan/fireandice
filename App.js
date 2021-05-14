import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import CharacterListScreen from './screens/CharacterListScreen';

const App = () => {
  return (
    <View>
      <View styles="styles.headerContainer">
        <Header />
      </View>
      <CharacterListScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    height: 300,
  },
});

export default App;
