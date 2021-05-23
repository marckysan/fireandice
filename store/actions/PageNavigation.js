export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const FIRST_PAGE = 'FIRST_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const LAST_PAGE = 'LAST_PAGE';

// Add API calls into each method, then getState each page and then paste in accordingly.
// Since each getState retrieves the current state, we can do conditional calls to decide how to update
// the new state can then be set inside the reducer, then update the state in the store
// Since the store state is updated, we can safely retrieve the value inside the store from the Screen
// and then retrieve the page number inside the screen to retreive images from the image API

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = error => {
  return {
    type: FETCH_DATA_ERROR,
    payload: error,
  };
};

export function fetchInitialData() {
  return async (dispatch, getState) => {
    console.log(getState());
    dispatch(fetchDataRequest);
    await fetch(
      getState().character.apiLink.concat(getState().character.pageQueryString),
      getState().character.pageNumber,
      getState().character.pageDisplayLimit,
    )
      .then(response => {
        characters = response.json();
        // console.log(characters);
        dispatch(fetchDataSuccess(characters));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchDataFailure(errorMsg));
      });
  };
}

// export const firstPage = () => {
//   return {type: FIRST_PAGE, pageNumber: 1};
// };

// export const previousPage = pageNumber => {
//   return {type: PREVIOUS_PAGE, pageNumber: pageNumber};
// };

// export const nextPage = pageNumber => {
//   return {type: NEXT_PAGE, pageNumber: pageNumber};
// };

// export const lastPage = () => {
//   return {type: LAST_PAGE, pageNumber: 214};
// };

//last character id = 2138
//last image id = 1084
