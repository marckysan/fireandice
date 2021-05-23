import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from '../actions/PageNavigation';

const initialState = {
  isLoading: true,
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

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload,
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

export default CharacterReducer;

// case FIRST_PAGE:
//   return {...state, pageNumber: 1};
// case PREVIOUS_PAGE:
//   const prevPageCurrentPage = state.pageNumber;
//   if (prevPageCurrentPage == 1) {
//     return {...state};
//   } else {
//     return {...state, pageNumber: prevPageCurrentPage - 1};
//   }
// case NEXT_PAGE:
//   const nextPageCurrentPage = state.pageNumber;
//   if (nextPageCurrentPage == 214) {
//     return {...state};
//   } else {
//     return {...state, pageNumber: nextPageCurrentPage + 1};
//   }
// case LAST_PAGE:
//   return {...state, pageNumber: 214};
