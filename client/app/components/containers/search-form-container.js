import React from 'react';
import {connect} from 'react-redux';
import SearchForm from '../views/search-form';
import * as searchApi from '../../api/search-api';

const SearchFormContainer = React.createClass({
  getInitialState: function() {
    return {
      keyword: ''
    };
  },

  updateKeyword: function(keyword) {
    //var keyword = event.target.value;
    this.setState({keyword: keyword});
    this.props.dispatch(searchApi.getSuggestion(keyword));
    this.searchKeyword(keyword);
  },

  searchKeyword: function(keyword) {
    var query = keyword;
    this.props.dispatch(searchApi.searchKeyword(query));
  },

  render: function(){
        return (
            <SearchForm {...this.props}
              updateKeyword={this.updateKeyword}
              searchKeyword={this.searchKeyword}
              keyword={this.state.keyword} />
        );
  }
});

const mapStateToProps = store => {
    return {
      result: store.searchState.result,
      suggestion: store.searchState.suggestion
    };
}

export default connect(mapStateToProps)(SearchFormContainer);
