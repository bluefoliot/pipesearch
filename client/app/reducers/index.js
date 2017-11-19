import { combineReducers } from 'redux';
import searchReducer from './search-reducers';
import uploadReducer from './upload-reducers';

var reducers = combineReducers({
  searchState: searchReducer,
  uploadState: uploadReducer
});

export default reducers;
