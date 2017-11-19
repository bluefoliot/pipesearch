import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Base from './components/base';
import UploadFormContainer from './components/containers/upload-form-container';
import SearchFormContainer from './components/containers/search-form-container';


export default (
  <Router history={browserHistory}>
    <Route path='/' component={Base}>
      <IndexRoute components={{upperSection: UploadFormContainer, lowerSection: SearchFormContainer}}/>
    </Route>
  </Router>
);
