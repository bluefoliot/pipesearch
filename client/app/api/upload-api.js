import * as uploadActions from '../actions/upload-actions';
import axios from 'axios';
import io from 'socket.io-client';
var uuid = require('uuid4');

export function upload(file) {
  return dispatch => {
    var formData = new FormData();
    var socket = io.connect();
    var id = uuid();
    formData.append('data', new Blob([file]));
    formData.append('id', id);

    axios.post('/import', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: progressEvent => {
        var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
        if(percentCompleted==100){
          socket.on('progress-'+id, function(data) {
            dispatch(uploadActions.updateUploadProgress(data.percentage));
          })
          dispatch(uploadActions.updateUploadStatus('import'));
        }
      }
    }).then(
      response => dispatch(uploadActions.updateUploadStatus('success'))
    ).catch(
      response => dispatch(uploadActions.updateUploadStatus('fail'))
    );
  }
}
