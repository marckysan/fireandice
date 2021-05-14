import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CharacterItem from '../components/CharacterItem';

const CharacterListScreen = () => {
  return (
    <View>
      <ScrollView>
        <CharacterItem />
        <CharacterItem />
        <CharacterItem />
        <CharacterItem />
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

export default CharacterListScreen;