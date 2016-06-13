import React from 'react';

import BlogComments from './BlogComments';
import BlogAuthor from './BlogAuthor';

var BlogPostAside = React.createClass({
  render: function() {
    return (
        <section id="post-2-page" className="content-post" style={{display: 'none'}}>
            <div className="row inner">

                <div className="col-md-12" style={{width: '100%', WebkitBoxSizing: 'border-box', boxSizing: 'border-box', float: 'left', background: 'rgba(255, 255, 255, 0.8)', paddingBottom: '15px', paddingTop: '15px'}}>

                    <article className="postPage">

                        <div className="col-md-12 post_media">

                            <div className="post-format-icon">
                                <a href="#" className="item-date"><span className="fa fa-pencil"></span></a>
                            </div>

                        </div>

                        <div className="title_content">
                            <div className="text_content">{this.props.title}</div>
                            <div className="clear"></div>
                        </div>


                        <p className="caps">{this.props.caps}</p>

                        <p>{this.props.content}</p>

                        <div className="col-md-12 first">
                            <div className="info">
                                <div>
                                {
                                  this.props.tags.map(function(tag, index) {
                                    return <span className="tag">{'#'+tag.tag}</span>
                                  })
                                }
                                </div>

                                <ul className="info-post">
                                    <li><i className="glyphicon glyphicon-comment"></i> {this.props.commentsNumber} Comments</li>
                                    <li><i className="glyphicon glyphicon-time"></i> {this.props.date}</li>
                                    <li><i className="glyphicon glyphicon-user"></i> by {this.props.author}</li>
                                    <li><i className="glyphicon glyphicon-tag"></i> {this.props.tagList}</li>
                                </ul>
                            </div>

                            <div className="clear"></div>      


                            <BlogAuthor />

                            <div className="clear"></div>      

                            <BlogComments />



                            <div className="col-md-12"  style={{marginTop: '20px'}}>
                                <a href={this.props.prev} className="readmore" id="pagination"><i className="glyphicon glyphicon-chevron-right"></i></a>
                                <a href={this.props.next} className="readmore" id="pagination"><i className="glyphicon glyphicon-chevron-left"></i></a>
                                <a href="#blog" className="readmore"><i className="glyphicon glyphicon-chevron-left"></i> All Posts</a>
                            </div>

                            <div className="clear"></div>
                        </div>
                    </article>
                </div>
                <div className="clear"></div>
            </div>
        </section>
    );
  }
});

export default BlogPostAside