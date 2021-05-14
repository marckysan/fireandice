import React from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

const CharacterDetails = props => {
  return (
    <View>
      <Modal visible={props.isVisible} animationType="slide">
        <View style={styles.modalBox}>
          <View style={styles.characterDetailsBox}>
            <Text style={styles.characterName}>Character Name</Text>
            <Button title="Back" onPress={props.onCloseModal} />
          </View>
        </View>
      </Modal>
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
  },

  modalBox: {
    margin: 40,
    alignItems: 'center',
  },

  characterName: {
    fontSize: 20,
  },
});

export default CharacterDetails;
