import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CharacterItem from './components/CharacterItem';
import Header from './components/Header';

const App = () => {
  return (
    <View>
      <View styles="styles.headerContainer">
        <Header />
      </View>
      <ScrollView>
        <CharacterItem />
      </ScrollView>
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
