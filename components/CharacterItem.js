import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CharacterItem = props => {
  return (
    <View style={styles.characterBox}>
      <Image source={{uri: props.imageUri}} style={styles.image} />
      <Text>{props.character.aliases}</Text>
      <Button
        title="View Details"
        onPress={() =>
          props.navigationProps.navigate('CharacterDetailsPage', {
            passOnCharacter: props.character,
            passOnImageUri: props.imageUri,
          })
        }
      />
    </View>
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
  },

  image: {
    alignItems: 'center',
    height: 200,
    width: '80%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CharacterItem;
