import React from 'react';

var Skillbar = React.createClass({
  render: function() {
    return (
    	<div className="skillbar clearfix" data-percent="95%">
            <div className="skillbar-title"><span>Photoshop</span></div>
            <div className="skillbar-bar"></div>
            <div className="skill-bar-percent">95%</div>
        </div>
    );
  }
});

export default Skillbar