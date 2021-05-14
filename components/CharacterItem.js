import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CharacterDetails from './CharacterDetails';

const CharacterItem = props => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.characterBox}>
      <Text>Character Name</Text>
      <Button title="View Details" onPress={() => setIsVisible(true)} />
      <CharacterDetails isVisible={isVisible} onCloseModal={closeModal} />
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
});

export default CharacterItem;
