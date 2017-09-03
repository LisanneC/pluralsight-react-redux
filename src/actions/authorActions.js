import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function loadAuthorsSucces(authors) {
  return {type: types.LOAD_AUTHORS_SUCCES, authors};
}

export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSucces(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
