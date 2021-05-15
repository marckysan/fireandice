import React from 'react';
import {StyleSheet, View} from 'react-native';

const FavouriteCharactersScreen = () => {
  return (
    <View>
      <Text>This is the Favourite Characters Screen.</Text>
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

export default FavouriteCharactersScreen;
