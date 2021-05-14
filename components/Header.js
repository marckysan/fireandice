import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Welcome to the </Text>
      <Text style={styles.headerText}>Fire and Ice App.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#cfcfc4',
    padding: 30,
    alignContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 25,
    fontFamily: 'monospace',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
