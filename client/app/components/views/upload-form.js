import React from 'react';
import { ProgressBar } from 'react-bootstrap';

class UploadForm extends React.Component{
    render(){
        return (
          <div className='row'>
            <div className='col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1'>
              <div className="panel panel-default">
                <div className="panel-heading">
                  Form
                </div>
                <div className="panel-body">
                  <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                      <div className="form-group">
                        <label>Import file</label>
                        <input type="file" className="form-control-file" id="uploadField"
                          onChange={this.props.updateFile}/>
                        <button type="submit" id="uploadButton" className="btn btn-primary"
                          onClick={this.props.uploadFile}>Submit</button>
                        <Choose>
                          <When condition={this.props.status=='import'}>
                            <ProgressBar now={this.props.progress} label={`${this.props.progress}%`} />
                          </When>
                        </Choose>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default UploadForm;
