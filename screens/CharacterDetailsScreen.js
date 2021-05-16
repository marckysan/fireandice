import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CharacterDetailsScreen = props => {
  console.log(props.navigation.state.params);
  const imageSize = '/300/400';
  const character = props.navigation.state.params.passOnCharacter;

  function Culture(character) {
    if (character.culture == '') {
      return (
        <Text style={styles.characterName}>
          {character.alias[0]} does not have a culture.
        </Text>
      );
    } else {
      return (
        <Text style={styles.characterName}>
          {JSON.stringify(character.culture)}
        </Text>
      );
    }
  }
  return (
    <View>
      <View style={styles.modalBox}>
        <View style={styles.characterDetailsBox}>
          <Image
            source={{
              uri: JSON.stringify(
                props.navigation.state.params.passOnImageUri.concat(imageSize),
              ),
            }}
            styles={styles.image}
          />
          <Text style={styles.characterName}>{character.aliases[0]}</Text>
          {character.culture == '' ? (
            <Text>{character.aliases[0]} does not have a culture!</Text>
          ) : (
            <Text style={styles.characterName}>{character.culture}</Text>
          )}
          <Button
            title="Back"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  characterDetailsBox: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#000',
    padding: 10,
    marginTop: 22,

    height: 'auto',
    width: 310,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 10,
  },

  modalBox: {
    margin: 40,
    alignItems: 'center',
  },

  characterName: {
    fontSize: 20,
  },

  // image: {
  //   width: '80%',
  //   height: 300,
  // },
});

CharacterDetailsScreen.navigationOptions = {
  headerTitle: 'Character Detail',
};

export default CharacterDetailsScreen;
