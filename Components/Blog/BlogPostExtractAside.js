import React from 'react';

var BlogPostExtractAside = React.createClass({
  render: function() {
    return (
	    <article id="post-2" className="blog-article">                    

            <div className="col-md-12">

                <div className="row">

                    <div className="col-md-12 post_media">

                        <div className="post-format-icon">
                            <a href="#" className="item-date"><span className="fa fa-pencil"></span></a>
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

export default BlogPostExtractAside