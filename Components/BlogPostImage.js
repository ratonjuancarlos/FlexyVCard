import React from 'react';

import BlogComments from './BlogComments';
import BlogAuthor from './BlogAuthor';

var BlogPostImage = React.createClass({
  render: function() {
    return (
    	        <section id="post-3-page" className="content-post" style={{display: 'none'}}>
                                <div className="row inner">

                                    <div className="col-md-12" style={{width: '100%', WebkitBoxSizing: 'border-box', boxSizing: 'border-box', float: 'left', background: 'rgba(255, 255, 255, 0.8)', paddingBottom: '15px', paddingTop: '15px'}}>

                                        <article className="postPage">


                                            <div className="col-md-12 post_media">

                                                <div className="post-format-icon">
                                                    <a href="#" className="item-date"><span className="fa fa-picture-o"></span></a>
                                                </div>

                                                <div className="media">
                                                    <div className="he-wrap tpl2">
                                                        <img src="http://placehold.it/825x340" className="img-hover" alt="" />
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="title_content">
                                                <div className="text_content">BLOG POST IMAGE</div>
                                                <div className="clear"></div>
                                            </div>


                                            <p className="caps">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.</p>

                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                                            <div className="col-md-12 first">
                                                <div className="info">
                                                    <div>
                                                        <span className="tag">#php</span>
                                                        <span className="tag">#web</span>
                                                        <span className="tag">#web design</span>
                                                    </div>


                                                    <ul className="info-post">
                                                        <li><i className="glyphicon glyphicon-comment"></i> 2 Comments</li>
                                                        <li><i className="glyphicon glyphicon-time"></i> January 31, 2014</li>
                                                        <li><i className="glyphicon glyphicon-user"></i> by Jane Doe</li>
                                                        <li><i className="glyphicon glyphicon-tag"></i> Photoshop</li>
                                                    </ul>
                                                </div>

                                                <div className="clear"></div>      

                                                <BlogAuthor />

                                                <div className="clear"></div>      

                                                <BlogComments />

                                                <div className="col-md-12" style={{marginTop: '20px'}}>
                                                    <a href="#" className="readmore disabled" id="pagination"><i className="glyphicon glyphicon-chevron-right"></i></a>
                                                    <a href="#post-2" className="readmore" id="pagination"><i className="glyphicon glyphicon-chevron-left"></i></a>
                                                    <a href="#blog" id="blog" className="readmore"><i className="glyphicon glyphicon-chevron-left"></i> All Posts</a>
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

export default BlogPostImage