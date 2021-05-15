import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CharacterItem from '../components/CharacterItem';
import Header from '../components/Header';

const CharacterListScreen = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://www.anapioficeandfire.com/api/characters')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <View styles="styles.headerContainer">
        <Header />
      </View>
      <View>
        <ScrollView>
          <CharacterItem navigationProps={props.navigation} />
          <CharacterItem navigationProps={props.navigation} />
          <CharacterItem navigationProps={props.navigation} />
          <CharacterItem navigationProps={props.navigation} />
          <CharacterItem navigationProps={props.navigation} />
        </ScrollView>
      </View>
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
