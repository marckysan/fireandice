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

export const fetchDataSuccess = (data, pageNum) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
    pageNum: pageNum,
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
    dispatch(fetchDataRequest);
    try {
      let response = await fetch(
        getState().character.apiLink.concat(
          getState().character.pageQueryString,
          getState().character.pageNumber,
          getState().character.pageDisplayLimit,
        ),
      );

      let characters = await response.json();
      dispatch(fetchDataSuccess(characters, getState().character.pageNumber));
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchDataFailure(errorMsg));
    }
  };
}

export function nextPage(pageNumber) {
  return async (dispatch, getState) => {
    dispatch(fetchDataRequest);
    if (pageNumber !== 214) {
      try {
        let response = await fetch(
          getState().character.apiLink.concat(
            getState().character.pageQueryString,
            pageNumber + 1,
            getState().character.pageDisplayLimit,
          ),
        );

        let characters = await response.json();
        dispatch(fetchDataSuccess(characters, pageNumber + 1));
      } catch (error) {
        const errorMsg = error.message;
        dispatch(fetchDataFailure(errorMsg));
      }
    } else {
      dispatch(fetchDataSuccess(getState().character.characters, pageNumber));
    }
  };
}

export function prevPage(pageNumber) {
  return async (dispatch, getState) => {
    dispatch(fetchDataRequest);
    if (pageNumber !== 1) {
      try {
        let response = await fetch(
          getState().character.apiLink.concat(
            getState().character.pageQueryString,
            pageNumber - 1,
            getState().character.pageDisplayLimit,
          ),
        );

        let characters = await response.json();
        dispatch(fetchDataSuccess(characters, pageNumber - 1));
      } catch (error) {
        const errorMsg = error.message;
        dispatch(fetchDataFailure(errorMsg));
      }
    } else {
      dispatch(fetchDataSuccess(getState().character.characters, pageNumber));
    }
  };
}

export function firstPage() {
  return async (dispatch, getState) => {
    dispatch(fetchDataRequest);
    try {
      let response = await fetch(
        getState().character.apiLink.concat(
          getState().character.pageQueryString,
          1,
          getState().character.pageDisplayLimit,
        ),
      );

      let characters = await response.json();
      dispatch(fetchDataSuccess(characters, 1));
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchDataFailure(errorMsg));
    }
  };
}

export function lastPage() {
  return async (dispatch, getState) => {
    dispatch(fetchDataRequest);
    try {
      let response = await fetch(
        getState().character.apiLink.concat(
          getState().character.pageQueryString,
          214,
          getState().character.pageDisplayLimit,
        ),
      );

      let characters = await response.json();
      dispatch(fetchDataSuccess(characters, 214));
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchDataFailure(errorMsg));
    }
  };
}
