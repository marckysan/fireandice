import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PageController = props => {
  return (
    <View style={styles.ButtonBar}>
      <TouchableOpacity
        title="First"
        style={styles.Button}
        onPress={props.firstPage}>
        <Text style={styles.ButtonText}>First</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Previous"
        style={styles.Button}
        onPress={props.previousPage}>
        <Text style={styles.ButtonText}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Next"
        style={styles.Button}
        onPress={props.nextPage}>
        <Text style={styles.ButtonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Last"
        style={styles.Button}
        onPress={props.lastPage}>
        <Text style={styles.ButtonText}>Last</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonBar: {
    flexDirection: 'row',
    paddingTop: 15,
    marginBottom: 15,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  Button: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b9540c',
    borderRadius: 10,
    width: 70,
    height: 25,
  },
  ButtonText: {
    color: 'white',
  },
});

export default PageController;
