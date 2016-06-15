import React from 'react';

var BlogPostLayoutExtractImage = React.createClass({
  render: function() {
    return (
        <div className="col-md-12 post_media">
            <div className="post-format-icon">
                <a href="#" className="item-date"><span className="fa fa-picture-o"></span></a>
            </div>
            <div className="media">
                <div className="he-wrap tpl2">
                    <img src={this.props.image} className="img-hover" alt="" />
                </div>
            </div>
        </div>
    )
  }
});

export default BlogPostLayoutExtractImage