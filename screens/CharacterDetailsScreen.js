import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CharacterDetailsScreen = props => {
  console.log(props.navigation.state.params);
  return (
    <View>
      <View style={styles.modalBox}>
        <View style={styles.characterDetailsBox}>
          <Image
            source={{
              uri: JSON.stringify(props.navigation.state.params.passOnImageUri),
            }}
            styles={styles.image}
          />
          <Text style={styles.characterName}>
            {JSON.stringify(
              props.navigation.state.params.passOnCharacter.aliases[0],
            )}
          </Text>
          <Text style={styles.characterName}>
            {JSON.stringify(
              props.navigation.state.params.passOnCharacter.culture,
            )}
          </Text>

          <Button
            title="Back"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
      </View>
      {/* </Modal> */}
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

export default CharacterDetailsScreen;
