import * as types from '../actions/action-types';

const initialState={
    status: '',
    progress: 0
};

const uploadReducer = (state = initialState, action) => {
    switch(action.type){
      case types.UPDATE_UPLOAD_STATUS:
        return Object.assign({}, state, {
            status: action.status
        });
      case types.UPDATE_UPLOAD_PROGRESS:
        return Object.assign({}, state, {
            progress: action.progress
        });
    }
    return state;
}

export default uploadReducer;
