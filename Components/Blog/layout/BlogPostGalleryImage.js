import React from 'react';

var BlogPostGalleryImage = React.createClass({
  render: function() {
    return (
    	<div className={this.props.index==0 ? "item active" : "item"}>
            <img src={this.props.image} alt="" />
            <div className="carousel-caption">
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        </div>
    );
  }
});

export default BlogPostGalleryImage