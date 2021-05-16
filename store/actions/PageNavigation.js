export const FIRST_PAGE = 'FIRST_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const LAST_PAGE = 'LAST_PAGE';

export const firstPage = () => {
  return {type: FIRST_PAGE, pageNumber: 1};
};

export const previousPage = pageNumber => {
  return {type: PREVIOUS_PAGE, pageNumber: pageNumber};
};

export const firstPage = pageNumber => {
  return {type: NEXT_PAGE, pageNumber: pageNumber};
};

export const firstPage = () => {
  return {type: LAST_PAGE, pageNumber: 214};
};

//last character id = 2138
