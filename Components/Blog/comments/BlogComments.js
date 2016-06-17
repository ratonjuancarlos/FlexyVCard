import React from 'react';

import BlogCommentForm from './BlogCommentForm';
import BlogComment from './BlogComment';

var BlogComments = React.createClass({
    getInitialState: function () {
        return {
            blogCommentsData : []
        }
    },
    componentWillMount: function() {
      fetch('Components/Blog/mock-data/blogComments.json')
        .then((res) => res.json())
        .then((dataJSON) => {
          this.setState({
            blogCommentsData: dataJSON
          });
        });
    },
    
  render: function() {
    return (
    	<div className="post_comments">

            <div className="title_content">
                <div className="text_content">7 Comments</div>
                <div className="clear"></div>
            </div>

            <div className="clear"></div>

            <div className="comments">

                {
                  this.state.blogCommentsData.map(function(commentItem, index) {
                    return <BlogComment key={'commentItem_'+index} index={index} {...commentItem} />
                  })
                }

            </div>{/* .post_comments */}

            <div className="clear"></div>      


            <BlogCommentForm />
            
        </div>
    );
  }
});

export default BlogComments