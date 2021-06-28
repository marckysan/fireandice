import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from '../actions/PageNavigation';

export const initialState = {
  pageNumber: 1,
  pageQueryString: '?page=',
  pageDisplayLimit: '&pageSize=10',
  apiLink: 'https://www.anapioficeandfire.com/api/characters/',
  imageLink: 'https://picsum.photos/id/',
  searchLink: 'https://www.anapioficeandfire.com/api/characters',
  characters: [],
  filteredCharacters: [],
  favouriteCharacters: [],
  error: '',
};

export const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        pageNumber: action.pageNum,
        error: '',
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        characters: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

// export default CharacterReducer;
