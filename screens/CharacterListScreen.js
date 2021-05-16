import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CharacterItem from '../components/CharacterItem';

const CharacterListScreen = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const imageUriLink = 'https://picsum.photos/id/';

  console.log(props);

  // console.log(data);

  useEffect(() => {
    fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10')
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
        imageUri={imageUriLink.concat(data.indexOf(itemData.item) + 1)}
      />
    );
  };

  return (
    <View>
      {/* <View styles="styles.headerContainer">
        <Header />
      </View> */}
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

CharacterListScreen.navigationOptions = {
  headerTitle: 'Fire and Ice - List Of Characters',
};

export default CharacterListScreen;
