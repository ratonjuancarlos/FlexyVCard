import React from 'react';

import BlogComments from './../comments/BlogComments';
import BlogAuthor from './../BlogAuthor';

var BlogPostLayoutAside = React.createClass({
  render: function() {
    return (
        <div className="col-md-12 post_media">
            <div className="post-format-icon">
                <a href="#" className="item-date"><span className="fa fa-pencil"></span></a>
            </div>
        </div>
    );
  }
});

export default BlogPostLayoutAside