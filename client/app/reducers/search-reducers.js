import * as types from '../actions/action-types';

const initialState={
    result: [],
    suggestion: []
};

const searchReducer = (state = initialState, action) => {
    switch(action.type){
      case types.UPDATE_SEARCH_RESULT:
        return Object.assign({}, state, {
            result: action.result
        });
      case types.UPDATE_SUGGESTION:
        return Object.assign({}, state, {
            suggestion: action.suggestion
        });
    }
    return state;
}

export default searchReducer;
