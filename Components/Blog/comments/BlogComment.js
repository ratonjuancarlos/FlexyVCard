import React from 'react';

var BlogComment = React.createClass({
  render: function() {
    return (
    	<div className={'comment' +(this.props.sub? 'sub' : '')}>
            <img src={this.props.image} width="100" height="100" alt="img" />
            <div className="text">
                <div className="name">{this.props.name} <a className="reply" href="#">Reply</a></div>
                <div className="date">{this.props.date}</div>
                {this.props.comment}
            </div>
            <div className="clear"></div>
        </div>
    );
  }
});

export default BlogComment








