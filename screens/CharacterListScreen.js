import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CharacterItem from '../components/CharacterItem';
import PageController from '../components/PageController';
import {
  FIRST_PAGE,
  LAST_PAGE,
  NEXT_PAGE,
  PREVIOUS_PAGE,
} from '../store/actions/PageNavigation';

const CharacterListScreen = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const Characters = useSelector(state => state.character);
  const pageQueryString = '?page=';

  const dispatch = useDispatch();

  const firstPage = useCallback(() => {
    setLoading(true);
    console.log('1.0: ' + Characters.pageNumber);
    dispatch({type: FIRST_PAGE});
    console.log('1.1: ' + Characters.pageNumber);
    fetch(
      Characters.apiLink.concat(
        pageQueryString.concat(1),
        Characters.pageDisplayLimit,
      ),
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [dispatch]);

  const previousPage = useCallback(() => {
    setLoading(true);
    dispatch({type: PREVIOUS_PAGE});
    if (Characters.pageNumber !== 1) {
      fetch(
        Characters.apiLink.concat(
          pageQueryString.concat(Characters.pageNumber - 1),
          Characters.pageDisplayLimit,
        ),
      )
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch, Characters]);

  const nextPage = useCallback(() => {
    setLoading(true);
    dispatch({type: NEXT_PAGE});
    if (Characters.pageNumber !== 214) {
      fetch(
        Characters.apiLink.concat(
          pageQueryString.concat(Characters.pageNumber + 1),
          Characters.pageDisplayLimit,
        ),
      )
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch, Characters]);

  const lastPage = useCallback(() => {
    setLoading(true);
    dispatch({type: LAST_PAGE});
    fetch(
      Characters.apiLink.concat(
        pageQueryString.concat(214),
        Characters.pageDisplayLimit,
      ),
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    props.navigation.setParams({
      firstPage: firstPage,
      previousPage: previousPage,
      nextPage: nextPage,
      lastPage: lastPage,
    });
  }, [firstPage, previousPage, nextPage, lastPage]);

  // console.log(data);
  useEffect(async () => {
    await fetch(
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
        imageUri={Characters.imageLink.concat(
          data.indexOf(itemData.item) + 1 + (Characters.pageNumber - 1) * 10,
        )}
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
          <PageController
            firstPage={firstPage}
            previousPage={previousPage}
            nextPage={nextPage}
            lastPage={lastPage}
            // currentPage={Characters.pageNumber}
          />

          <FlatList
            keyExtractor={(item, index) => data.indexOf(item) + 1}
            data={data}
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
