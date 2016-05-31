import React from 'react';

var BlogPostExtractGallery = React.createClass({
  render: function() {
    return (
    	<article id="post-1" className="blog-article">                    

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
                                        <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel-1" data-slide-to="1"></li>
                                        <li data-target="#carousel-1" data-slide-to="2"></li>
                                    </ol>

                                    <div className="carousel-inner">

                                        <div className="item active">
                                            <img src="http://placehold.it/825x340" alt="" />
                                            <div className="carousel-caption">
                                                <h4>First Thumbnail label</h4>
                                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                            </div>
                                        </div>


                                        <div className="item">
                                            <img src="http://placehold.it/825x340" alt="" />
                                            <div className="carousel-caption">
                                                <h4>First Thumbnail label</h4>
                                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <img src="http://placehold.it/825x340" alt="" />
                                            <div className="carousel-caption">
                                                <h4>First Thumbnail label</h4>
                                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                            </div>
                                        </div>

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
                                    <div className="text_content"><a href="#post-1" className="read_more">Blog Post Gallery</a></div>
                                    <div className="clear"></div>
                                </div>

                                <ul className="info">
                                    <li><i className="glyphicon glyphicon-comment"></i> 2 Comments</li>
                                    <li><i className="glyphicon glyphicon-time"></i> January 31, 2014</li>
                                    <li><i className="glyphicon glyphicon-user"></i> by Jane Doe</li>
                                    <li><i className="glyphicon glyphicon-tag"></i> jquery, slider, web design</li>
                                </ul>

                                <div className="blog-content">
                                    <p><i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo...</p></div>
                            </div>
                        </div>	

                        <a href="#post-1" className="read_m pull-right">Read More <i class='glyphicon glyphicon-chevron-right'></i></a>

                    </div>
                </div>

            </div>
        </article>
    );
  }
});

export default BlogPostExtractGallery