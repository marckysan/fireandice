import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CharacterItem from '../components/CharacterItem';
import Header from '../components/Header';

const CharacterListScreen = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const imageUriLink = 'https://picsum.photos/id/';
  const imageSize = '/200/300';
  // console.log(data);

  useEffect(() => {
    fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=8')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderCharacterItem = itemData => {
    return (
      <CharacterItem
        navigationProps={props.navigation}
        character={itemData.item}
        Id={data.indexOf(itemData.item) + 1}
        imageUri={imageUriLink.concat(
          data.indexOf(itemData.item) + 1,
          imageSize,
        )}
      />
    );
  };

  return (
    <View>
      <View styles="styles.headerContainer">
        <Header />
      </View>
      <View>
        <FlatList
          keyExtractor={(item, index) => data.indexOf(item) + 1}
          data={data}
          renderItem={renderCharacterItem}
        />
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
