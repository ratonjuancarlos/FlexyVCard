import React from 'react';

import BlogPostGalleryImage from './BlogPostGalleryImage';

var BlogPostExtractGallery = React.createClass({
  render: function() {
    return (
    	<article id={this.props.anchor} className="blog-article">                    

            <div className="col-md-12">

                <div className="row">

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
                </div>

                <div className="row">
                    <div className="col-md-12 post_content">
                        <div className="content post_format_standart">
                            <div className="top_c ">

                                <div className="title_content">
                                    <div className="text_content"><a href={this.props.url} className="read_more">{this.props.title}</a></div>
                                    <div className="clear"></div>
                                </div>

                                <ul className="info">
                                    <li><i className="glyphicon glyphicon-comment"></i> {this.props.commentsNumber} Comments</li>
                                    <li><i className="glyphicon glyphicon-time"></i> {this.props.date}</li>
                                    <li><i className="glyphicon glyphicon-user"></i> by {this.props.author}</li>
                                    <li><i className="glyphicon glyphicon-tag"></i> {this.props.tagList}</li>
                                </ul>

                                <div className="blog-content">
                                    <p><i className="fa fa-quote-left"></i> {this.props.caps}</p></div>
                            </div>
                        </div>	

                        <a href={this.props.url} className="read_m pull-right">Read More <i class='glyphicon glyphicon-chevron-right'></i></a>

                    </div>
                </div>

            </div>
        </article>
    );
  }
});

export default BlogPostExtractGallery