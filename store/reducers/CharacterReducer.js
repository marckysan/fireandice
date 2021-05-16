import {
  FIRST_PAGE,
  LAST_PAGE,
  NEXT_PAGE,
  PREVIOUS_PAGE,
} from '../actions/PageNavigation';

const initialState = {
  pageNumber: 10,
  pageDisplayLimit: '&pageSize=10',
  apiLink: 'https://www.anapioficeandfire.com/api/characters',
  imageLink: 'https://picsum.photos/id/',
  searchLink: 'https://www.anapioficeandfire.com/api/characters',
  filteredCharacters: [],
  favouriteCharacters: [],
};

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_PAGE:
      return {...state, pageNumber: 1};
    case PREVIOUS_PAGE:
      const prevPageCurrentPage = state.pageNumber;
      if (currentPage == 1) {
        return {...state};
      } else {
        return {...state, pageNumber: prevPageCurrentPage - 1};
      }
    case NEXT_PAGE:
      const nextPageCurrentPage = state.pageNumber;
      if (currentPage == 214) {
        return {...state};
      } else {
        return {...state, pageNumber: nextPageCurrentPage + 1};
      }
    case LAST_PAGE:
      return {...state, pageNumber: 214};
    default:
      return state;
  }
};

export default CharacterReducer;
