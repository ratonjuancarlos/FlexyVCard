import React from 'react';

import BlogCommentForm from './BlogCommentForm';

var BlogComments = React.createClass({
  render: function() {
    return (
    	<div className="post_comments">

            <div className="title_content">
                <div className="text_content">7 Comments</div>
                <div className="clear"></div>
            </div>

            <div className="clear"></div>

            <div className="comments">

                <div className="comment">
                    <img src="http://placehold.it/100x100" width="100" height="100" alt="img" />
                    <div className="text">
                        <div className="name">John Doe <a className="reply" href="#">Reply</a></div>
                        <div className="date">12, September, 2013</div>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Praesent condimentum sed elit
                        vitae tristique. Aliquam erat volutpat. Nunc sit
                        amet cursus libero. In fringilla egestas ornare.
                    </div>
                    <div className="comment sub">
                        <img src="http://placehold.it/100x100" width="100" height="100" alt="img" />
                        <div className="text">
                            <div className="name">Bill Gates <a className="reply" href="#">Reply</a></div>
                            <div className="date">12, September, 2013</div>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Praesent condimentum sed elit
                            vitae tristique. Aliquam erat volutpat. Nunc sit
                            amet cursus libero. In fringilla egestas ornare.
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>{/* .comments */}

                <div className="comment">
                    <img src="http://placehold.it/100x100" width="100" height="100" alt="img" />
                    <div className="text">
                        <div className="name">John Smith <a className="reply" href="#">Reply</a></div>
                        <div className="date">12, September, 2013</div>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Praesent condimentum sed elit
                        vitae tristique. Aliquam erat volutpat. Nunc sit
                        amet cursus libero. In fringilla egestas ornare.
                    </div>
                    <div className="comment sub">
                        <img src="http://placehold.it/100x100" width="100" height="100" alt="img" />
                        <div className="text">
                            <div className="name">Bill Gates <a className="reply" href="#">Reply</a></div>
                            <div className="date">12, September, 2013</div>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Praesent condimentum sed elit
                            vitae tristique. Aliquam erat volutpat. Nunc sit
                            amet cursus libero. In fringilla egestas ornare.
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>{/* .comments */}

                <div className="comment">
                    <img src="http://placehold.it/100x100" width="100" height="100" alt="img" />
                    <div className="text">
                        <div className="name">Andrian Robert <a className="reply" href="#">Reply</a></div>
                        <div className="date">12, September, 2013</div>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Praesent condimentum sed elit
                        vitae tristique. Aliquam erat volutpat. Nunc sit
                        amet cursus libero. In fringilla egestas ornare.
                    </div>
                    <div className="comment sub">
                        <img src="http://placehold.it/100x100" width="100" height="100" alt="img" />
                        <div className="text">
                            <div className="name">Bill Gates <a className="reply" href="#">Reply</a></div>
                            <div className="date">12, September, 2013</div>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Praesent condimentum sed elit
                            vitae tristique. Aliquam erat volutpat. Nunc sit
                            amet cursus libero. In fringilla egestas ornare.
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>{/* .comments */}

                <div className="comment">
                    <img src="http://placehold.it/100x100" width="100" height="100" alt="img" />
                    <div className="text">
                        <div className="name">Andrian Robert <a className="reply" href="#">Reply</a></div>
                        <div className="date">12, September, 2013</div>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Praesent condimentum sed elit
                        vitae tristique. Aliquam erat volutpat. Nunc sit
                        amet cursus libero. In fringilla egestas ornare.
                    </div>
                    <div className="clear"></div>
                </div>{/* .comments */}



            </div>{/* .post_comments */}

            <div className="clear"></div>      


            <BlogCommentForm />
            
        </div>
    );
  }
});

export default BlogComments