import React from 'react';

import BlogCommentForm from './BlogCommentForm';
import BlogComment from './BlogComment';

var BlogComments = React.createClass({
    getInitialState: function () {
        return {
            blogCommentsData : 
            [
                {
                  "image": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
                  "name": "Nicole West",
                  "comment": "Nullam varius.",
                  "date": "02.10.2015",
                  "sub": true
                }, {
                  "image": "http://dummyimage.com/100x100.png/ff4444/ffffff",
                  "name": "Adam Tucker",
                  "comment": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
                  "date": "17.01.2016",
                  "sub": false
                }, {
                  "image": "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
                  "name": "Sandra Fisher",
                  "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
                  "date": "03.07.2015",
                  "sub": true
                }, {
                  "image": "http://dummyimage.com/100x100.jpg/dddddd/000000",
                  "name": "Ruby Alvarez",
                  "comment": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
                  "date": "23.01.2016",
                  "sub": false
                }, {
                  "image": "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
                  "name": "Carolyn Chapman",
                  "comment": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
                  "date": "16.04.2016",
                  "sub": false
                }, {
                  "image": "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
                  "name": "Martin Powell",
                  "comment": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
                  "date": "03.01.2016",
                  "sub": true
                }, {
                  "image": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
                  "name": "Kimberly Fox",
                  "comment": "Suspendisse potenti.",
                  "date": "01.09.2015",
                  "sub": true
                }, {
                  "image": "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
                  "name": "Lois Carter",
                  "comment": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
                  "date": "08.05.2016",
                  "sub": true
                }
            ]
        }
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