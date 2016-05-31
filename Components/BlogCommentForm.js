import React from 'react';

var BlogCommentForm = React.createClass({
  render: function() {
    return (
    	<div className="comment_form">
            <div className="title_content">
                <div className="text_content">Leave A Comment</div>
                <div className="clear"></div>
            </div>


            <form method="post" id="comment_form">
                <p className="form-group" id="contact-name">
                    <label for="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="inputSuccess" placeholder="Name*..." />
                </p>
                <p className="form-group" id="contact-email"> 
                    <label for="email">Your Email</label>
                    <input type="text" name="email" className="form-control" id="inputSuccess" placeholder="Email*..." />
                </p>

                <p className="form-group" id="contact-message">
                    <label for="message">Your Message</label>
                    <textarea name="message" cols="88" rows="6" className="form-control" id="inputError" placeholder="Your Comment..."></textarea>
                </p>
                <input type="reset" name="reset" value="CLEAR" className="reset" />
                {/*<input type="submit" name="submit" value="Post Comment" className="submit">*/}
                <button className="submit" data-toggle="modal" data-target=".bs-example-modal-sm">Post Comment</button>
            </form>                        
            <div className="clear"></div>

        </div>
    );
  }
});

export default BlogCommentForm