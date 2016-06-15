import React from 'react';

import BlogComments from './../comments/BlogComments';
import BlogAuthor from './../BlogAuthor';
import BlogPostGalleryImage from './BlogPostGalleryImage';

var BlogPostLayoutGallery = React.createClass({
  render: function() {
    return (
        <div className="col-md-12 post_media">
            <div className="post-format-icon">
                <a href="#" className="item-date"><span className="fa fa-picture-o"></span></a>
            </div>
            <div className="media">
                <div className="he-wrap tpl2">
                    <div id="carousel-2" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            {
                              this.props.carrousell.map(function(image, index) {
                                return <li data-target="#carousel-2" data-slide-to={index} className={index==0 ? "active" : ""}></li>
                              })
                            }
                        </ol>

                        <div className="carousel-inner">
                            {
                              this.props.carrousell.map(function(image, index) {
                                image.index = index;
                                return <BlogPostGalleryImage {...image} />
                              })
                            }

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
  }
});

export default BlogPostLayoutGallery