import React from 'react';

var ExperienceTitle = React.createClass({
  render: function() {
    return (
    	<div className="title_content" style={{marginBottom:'5px'}}>
            <div className="text_content">{this.props.title}</div>
            <div className="clear"></div>
        </div>
    );
  }
});

export default ExperienceTitle