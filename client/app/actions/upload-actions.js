import * as types from './action-types';

export function uploadFile(file){
  return{
      type: types.UPLOAD_FILE,
      file
  };
}

export function updateUploadStatus(status) {
  return {
    type: types.UPDATE_UPLOAD_STATUS,
    status
  };
}

export function updateUploadProgress(progress) {
  return{
    type: types.UPDATE_UPLOAD_PROGRESS,
    progress
  };
}
