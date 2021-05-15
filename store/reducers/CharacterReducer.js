const initialState = {
  pageNumber: 1,
  apiLink: 'https://www.anapioficeandfire.com/api/characters',
  searchLink: 'https://www.anapioficeandfire.com/api/characters',
  filteredCharacters: [],
  favouriteCharacters: [],
};

const CharacterReducer = (state = initialState, action) => {
  return state;
};

export default CharacterReducer;
