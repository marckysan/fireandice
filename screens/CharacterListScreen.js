import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CharacterItem from '../components/CharacterItem';
import PageController from '../components/PageController';
import {
  fetchInitialData,
  firstPage,
  lastPage,
  nextPage,
  prevPage,
} from '../store/actions/PageNavigation';

const CharacterListScreen = props => {
  const Characters = useSelector(state => state.character);

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      await dispatch(fetchInitialData());
    }
    fetchData();
    setIsLoading(false);
  }, [dispatch]);

  const nextpage = useCallback(async () => {
    setIsLoading(true);
    await dispatch(nextPage(Characters.pageNumber));
    console.log('Next Page: ' + Characters);
    setIsLoading(false);
  }, [dispatch, Characters]);

  const prevpage = useCallback(async () => {
    setIsLoading(true);
    await dispatch(prevPage(Characters.pageNumber));
    console.log('Prev Page: ' + Characters);
    setIsLoading(false);
  }, [dispatch, Characters]);

  const firstpage = useCallback(async () => {
    setIsLoading(true);
    await dispatch(firstPage());
    console.log('First Page: ' + Characters);
    setIsLoading(false);
  }, [dispatch, Characters]);

  const lastpage = useCallback(async () => {
    setIsLoading(true);
    await dispatch(lastPage());
    console.log('Last Page: ' + Characters);
    setIsLoading(false);
  }, [dispatch, Characters]);

  const renderCharacterItem = itemData => {
    return (
      <CharacterItem
        navigationProps={props.navigation}
        character={itemData.item}
        Id={Characters.characters.indexOf(itemData.item) + 1}
        imageUri={Characters.imageLink.concat(
          Characters.characters.indexOf(itemData.item) +
            1 +
            (Characters.pageNumber - 1) * 10,
        )}
      />
    );
  };

  return (
    <View>
      <PageController
        firstPage={firstpage}
        previousPage={prevpage}
        nextPage={nextpage}
        lastPage={lastpage}
      />
      {isLoading ? (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator size="large" color="#b9540c" />
        </View>
      ) : (
        <View>
          <FlatList
            keyExtractor={(item, index) =>
              Characters.characters.indexOf(item) + 1
            }
            data={Characters.characters}
            renderItem={renderCharacterItem}
            style={styles.flatList}
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

  flatList: {
    marginBottom: 120,
  },
});

CharacterListScreen.navigationOptions = {
  // const nextPage = navigationData.navigation.getParam('nextPage');
  // return {
  headerTitle: 'Fire and Ice - List Of Characters',
  //   headerRight: <PageController />,
  // };
};

export default CharacterListScreen;
