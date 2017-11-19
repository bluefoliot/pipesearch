import * as searchActions from '../actions/search-actions';
import axios from 'axios';

export function searchKeyword(keyword) {
  return dispatch => {
    axios.post('/search', {query: keyword}, {
      headers: { 'Content-Type': 'application/json' }
    }).then(
      response => dispatch(searchActions.updateSearchResult(response.data))
    ).catch(
      response => dispatch(searchActions.updateSearchResult([]))
    );
  }
}

export function getSuggestion(keyword) {
  return dispatch => {
    axios.post('/suggestion', {query: keyword}, {
      headers: { 'Content-Type': 'application/json' }
    }).then(
      response => dispatch(searchActions.updateSuggestion(response.data))
    ).catch(
      response => dispatch(searchActions.updateSuggestion([]))
    );
  }
}
