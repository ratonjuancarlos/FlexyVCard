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
                                    <div className="text_content"><a href="#post-2" className="read_more">Blog Aside post</a></div>
                                    <div className="clear"></div>
                                </div>

                                <ul className="info">
                                    <li><i className="glyphicon glyphicon-comment"></i> 2 Comments</li>
                                    <li><i className="glyphicon glyphicon-time"></i> January 31, 2014</li>
                                    <li><i className="glyphicon glyphicon-user"></i> by Jane Doe</li>
                                    <li><i className="glyphicon glyphicon-tag"></i> php, web design</li>
                                </ul>

                                <div className="blog-content">
                                    <p><i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo...</p></div>
                            </div>
                        </div>	

                        <a href="#post-2" className="read_m pull-right">Read More <i class='glyphicon glyphicon-chevron-right'></i></a>

                    </div>
                </div>

            </div>
        </article>
    );
  }
});

export default BlogPostExtractAside