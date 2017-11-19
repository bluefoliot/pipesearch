import React from 'react';
import { Link } from 'react-router';

const Base = React.createClass({
    render: function() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <Link to="/" className="logo"><h1>Pipesearch</h1></Link>
                </div>
                <div className="container">
                    {this.props.upperSection}
                    {this.props.lowerSection}
                </div>
            </div>
        );
    }
});

export default Base;
