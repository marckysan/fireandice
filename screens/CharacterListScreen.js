import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import PageController from '../components//PageController';
import CharacterItem from '../components/CharacterItem';

const CharacterListScreen = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const imageUriLink = 'https://picsum.photos/id/';
  const Characters = useSelector(state => state.character);
  const pageQueryString = '?page=';

  // console.log(data);

  useEffect(() => {
    fetch(
      Characters.apiLink.concat(
        pageQueryString.concat(Characters.pageNumber),
        Characters.pageDisplayLimit,
      ),
    )
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
      {isLoading ? (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator size="large" color="#b9540c" />
        </View>
      ) : (
        <View>
          <PageController style={styles.pageController} />
          <FlatList
            keyExtractor={(item, index) => data.indexOf(item) + 1}
            data={data}
            renderItem={renderCharacterItem}
          />
        </View>
      )}
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
  ActivityIndicator: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 300,
  },
  pageController: {},
});

CharacterListScreen.navigationOptions = {
  headerTitle: 'Fire and Ice - List Of Characters',
};

export default CharacterListScreen;
