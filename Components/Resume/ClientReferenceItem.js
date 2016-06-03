import React from 'react';

var ClientReferenceItem = React.createClass({
  render: function() {
    return (
    	<li className="clearfix">
            <img src={this.props.image} className="img_reference" width="100" height="100" alt="" />
            <p>{this.props.reference}</p>
            <span>{this.props.name}, {this.props.job}</span>
        </li>
    );
  }
});

export default ClientReferenceItem