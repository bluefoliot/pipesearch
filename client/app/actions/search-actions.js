import * as types from './action-types';

export function searchKeyword(keyword){
  return{
      type: types.SEARCH_KEYWORD,
      keyword
  };
}

export function updateSearchResult(result) {
  return {
    type: types.UPDATE_SEARCH_RESULT,
    result
  };
}

export function updateSuggestion(suggestion) {
  return {
    type: types.UPDATE_SUGGESTION,
    suggestion
  };
}
