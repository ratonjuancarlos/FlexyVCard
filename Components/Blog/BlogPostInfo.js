import React from 'react';

var BlogPostInfo = React.createClass({
  render: function() {
    return (
    	<ul className="info-post">
            <li><i className="glyphicon glyphicon-comment"></i> {this.props.commentsNumber} Comments</li>
            <li><i className="glyphicon glyphicon-time"></i> {this.props.date}</li>
            <li><i className="glyphicon glyphicon-user"></i> by {this.props.author}</li>
            <li><i className="glyphicon glyphicon-tag"></i> {this.props.tagList}</li>
        </ul>
    );
  }
});

export default BlogPostInfo