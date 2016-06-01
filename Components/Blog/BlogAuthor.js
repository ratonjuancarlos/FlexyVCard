import React from 'react';

var BlogAuthor = React.createClass({
  render: function() {
    return (
        <div className="about_author">
            <div className="title_content" style={{marginBottom:'10px'}}>
                <div className="text_content">BILL GATES</div>
                <div className="clear"></div>
            </div>

            <div className="clear"></div>


            <div className="prg_content">
                <img src="http://placehold.it/100x100" width="100" height="100" alt="img" />

                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Praesent condimentum sed elit
                    vitae tristique. Aliquam erat volutpat. Nunc sit
                    amet cursus libero. In fringilla egestas ornare.
                </div>

                <div className="nb_post" style={{marginTop: '10px'}}>
                    <b id="nb_post"> 15 posts</b> created by author
                </div>
            </div>

            <div className="clear"></div>
        </div>
    );
  }
});

export default BlogAuthor