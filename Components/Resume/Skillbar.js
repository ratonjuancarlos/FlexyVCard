import React from 'react';

var Skillbar = React.createClass({
  render: function() {
    return (
    	<div className="skillbar clearfix" data-percent={this.props.percent}>
            <div className="skillbar-title"><span>{this.props.skill}</span></div>
            <div className="skillbar-bar"></div>
            <div className="skill-bar-percent">{this.props.percent}</div>
        </div>
    );
  }
});

export default Skillbar