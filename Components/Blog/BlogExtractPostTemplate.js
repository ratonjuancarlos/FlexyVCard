import React from 'react';

import BlogPostGalleryImage from './layout/BlogPostGalleryImage';
import BlogPostInfo from './BlogPostInfo';

import BlogPostLayoutExtractAside from './layout/extract/BlogPostLayoutExtractAside.js';
import BlogPostLayoutExtractGallery from './layout/extract/BlogPostLayoutExtractGallery.js';
import BlogPostLayoutExtractImage from './layout/extract/BlogPostLayoutExtractImage.js';

var BlogExtractPostTemplate = React.createClass({
  render: function() {
    return (
    	<article id={this.props.anchor} className="blog-article">
    		<div className="col-md-12">
	    		<div className="row">
					{(() => {
				        switch (this.props.type) {
				          case "Gallery": 	return <BlogPostLayoutExtractGallery {...this.props} />  
				          case "Image": 	return <BlogPostLayoutExtractImage {...this.props} />	
						  default:      	return <BlogPostLayoutExtractAside {...this.props} />	
				        }
				      })()}
				</div>
				<div className="row">
	                <div className="col-md-12 post_content">
	                    <div className="content post_format_standart">
	                        <div className="top_c ">
	                            <div className="title_content">
                                    <div className="text_content"><a href={this.props.url} className="read_more">{this.props.title}</a></div>
                                    <div className="clear"></div>
                                </div>

	                            <BlogPostInfo {...this.props} />

	                            <div className="blog-content">
                                    <p><i className="fa fa-quote-left"></i> {this.props.caps}</p>
                                </div>
	                        </div>
	                    </div>
	                    <a href={this.props.url} className="read_m pull-right">Read More <i className='glyphicon glyphicon-chevron-right'></i></a>
	                </div>
	            </div>
    		</div>
		</article>
    );
  }
});

export default BlogExtractPostTemplate