import React from 'react';

var SkillbarTitle = React.createClass({
  render: function() {
    return (
    	<div className="title_content" style={{float: 'none'}}>
            <div className="text_content">{this.props.skillTitle}</div>
            <div className="clear"></div>
        </div>
    );
  }
});

export default SkillbarTitle