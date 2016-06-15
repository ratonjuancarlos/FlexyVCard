import React from 'react';

import BlogPostGalleryImage from './../BlogPostGalleryImage';

var BlogPostLayoutExtractGallery = React.createClass({
  render: function() {
    return (
        <div className="col-md-12 post_media">
            <div className="post-format-icon">
                <a href="#" className="item-date"><span className="fa fa-picture-o"></span></a>
            </div>
            <div className="media">
                <div className="he-wrap tpl2">
                    <div id="carousel-1" className="carousel slide" data-ride="carousel">

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

                        <a className="left carousel-control" href="#carousel-1" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>

                        <a className="right carousel-control" href="#carousel-1" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    );
  }
});

export default BlogPostLayoutExtractGallery