export const FIRST_PAGE = 'FIRST_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const LAST_PAGE = 'LAST_PAGE';

// Add API calls into each method, then getState each page and then paste in accordingly.
// Since each getState retrieves the current state, we can do conditional calls to decide how to update
// the new state can then be set inside the reducer, then update the state in the store
// Since the store state is updated, we can safely retrieve the value inside the store from the Screen
// and then retrieve the page number inside the screen to retreive images from the image API

export const firstPage = () => {
  return {type: FIRST_PAGE, pageNumber: 1};
};

export const previousPage = pageNumber => {
  return {type: PREVIOUS_PAGE, pageNumber: pageNumber};
};

export const nextPage = pageNumber => {
  return {type: NEXT_PAGE, pageNumber: pageNumber};
};

export const lastPage = () => {
  return {type: LAST_PAGE, pageNumber: 214};
};

//last character id = 2138
//last image id = 1084
