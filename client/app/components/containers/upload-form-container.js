import React from 'react';
import {connect} from 'react-redux';
import UploadForm from '../views/upload-form';
import * as uploadApi from '../../api/upload-api';
import * as uploadActions from '../../actions/upload-actions';

const UploadFormContainer = React.createClass({
  getInitialState: function() {
      return {
        file: ''
      };
  },

  updateFile: function(event) {
    this.setState({file: event.target.files[0]});
  },

  uploadFile: function() {
    if(this.state.file) {
      this.props.dispatch(uploadActions.updateUploadStatus('upload'));
      this.props.dispatch(uploadApi.upload(this.state.file));
    }
  },

  render: function(){
        return (
            <UploadForm {...this.props} updateFile={this.updateFile} uploadFile={this.uploadFile} />
        );
    }
});

const mapStateToProps = store => {
    return {
      status: store.uploadState.status,
      progress: store.uploadState.progress
    };
}

export default connect(mapStateToProps)(UploadFormContainer);
