import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';

class SearchForm extends React.Component{
    render(){
        return (
          <div className='row'>
            <div className='col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1'>
              <div className="panel panel-default">
                <div className="panel-heading">
                  Search Form
                </div>
                <div className="panel-body">
                  <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                      <div className="form-group">
                        <label>Search</label>
                        <Typeahead
                          options={this.props.suggestion}
                          onInputChange={this.props.updateKeyword}
                          inputProps={{id: 'searchField'}}
                          value={this.props.keyword}
                          onSelect={this.props.searchKeyword} />
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <If condition={this.props.result.length>0}>
                      <div className="table-responsive col-md-10 col-md-offset-1">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Age</th>
                              <th>Address</th>
                              <th>Team</th>
                            </tr>
                          </thead>
                          <tbody>
                            <For each="item" index="idx" of={this.props.result}>
                              <tr key={idx} id={`result-${idx}`}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                                <td>{item.team}</td>
                              </tr>
                            </For>
                          </tbody>
                        </table>
                      </div>
                    </If>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default SearchForm;
