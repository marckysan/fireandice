import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CharacterItem = props => {
  const imageSize = '/200/300';

  return (
    <TouchableOpacity
      onPress={() =>
        props.navigationProps.navigate('CharacterDetailsPage', {
          passOnCharacter: props.character,
          passOnImageUri: props.imageUri,
        })
      }>
      <View style={styles.characterBox}>
        <Image
          source={{uri: props.imageUri.concat(imageSize)}}
          style={styles.image}
        />
        <Text style={styles.itemText}>{props.character.aliases}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  characterBox: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#000',
    padding: 10,
    margin: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    flexDirection: 'row',
    alignContent: 'space-between',
  },

  image: {
    alignItems: 'center',
    height: 90,
    width: '30%',
    justifyContent: 'center',
    alignContent: 'center',
  },

  itemText: {
    margin: 5,
    marginTop: 25,
    fontSize: 15,
    fontFamily: 'fantasy',
  },
});

export default CharacterItem;
