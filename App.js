import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import CharacterList from './screens/CharacterList';

const App = () => {
  return (
    <View>
      <View styles="styles.headerContainer">
        <Header />
      </View>
      <CharacterList />
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
