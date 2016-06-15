import React from 'react';

import BlogExtractPostTemplate from './BlogExtractPostTemplate';
import BlogPostTemplate from './BlogPostTemplate';

var Blog = React.createClass({
    getInitialState: function () {
        return {
            blogData : [
    {
      "type": "Aside",
      "id": 1,
      "title": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      "commentsNumber": 13,
      "date": "11/17/2015",
      "author": "Wayne Carr",
      "caps": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
      "content": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. ",
      "image": "http://dummyimage.com/825x340.bmp/dddddd/000000",
      "prev": "#post-0",
      "url": "#post-1",
      "anchor": "post-1",
      "next": "#post-2",
      "tags": [
        {
          "tag": "php"
        },
        {
          "tag": "web design"
        },
        {
          "tag": "web"
        }
      ],
      "carrousell": null
    },
    {
      "type": "Aside",
      "id": 2,
      "title": "Suspendisse potenti.",
      "commentsNumber": 13,
      "date": "3/14/2016",
      "author": "Ronald Jenkins",
      "caps": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "content": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. ",
      "image": "http://dummyimage.com/825x340.png/dddddd/000000",
      "prev": "#post-1",
      "url": "#post-2",
      "anchor": "post-2",
      "next": "#post-3",
      "tags": [
        {
          "tag": "php"
        },
        {
          "tag": "web design"
        },
        {
          "tag": "web"
        }
      ],
      "carrousell": null
    },
    {
      "type": "Gallery",
      "id": 3,
      "title": "Sed vel enim sit amet nunc viverra dapibus.",
      "commentsNumber": 13,
      "date": "9/11/2015",
      "author": "Tina Hughes",
      "caps": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
      "content": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. ",
      "image": "http://dummyimage.com/825x340.bmp/5fa2dd/ffffff",
      "prev": "#post-2",
      "url": "#post-3",
      "anchor": "post-3",
      "next": "#post-4",
      "tags": [
        {
          "tag": "php"
        },
        {
          "tag": "web design"
        }
      ],
      "carrousell": [
        {
          "image": "http://dummyimage.com/825x340.png/ff4444/ffffff",
          "title": "augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed",
          "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt."
        },
        {
          "image": "http://dummyimage.com/825x340.png/5fa2dd/ffffff",
          "title": "pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur",
          "description": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus."
        },
        {
          "image": "http://dummyimage.com/825x340.png/ff4444/ffffff",
          "title": "velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo",
          "description": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis."
        }
      ]
    },
    {
      "type": "Image",
      "id": 4,
      "title": "Praesent lectus.",
      "commentsNumber": 21,
      "date": "12/6/2015",
      "author": "Irene Gibson",
      "caps": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
      "content": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. ",
      "image": "http://dummyimage.com/825x340.jpg/dddddd/000000",
      "prev": "#post-3",
      "url": "#post-4",
      "anchor": "post-4",
      "next": "#post-5",
      "tags": [
        {
          "tag": "php"
        }
      ],
      "carrousell": null
    },
    {
      "type": "Gallery",
      "id": 5,
      "title": "Maecenas ut massa quis augue luctus tincidunt.",
      "commentsNumber": 14,
      "date": "9/5/2015",
      "author": "Howard Murphy",
      "caps": "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
      "content": "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. ",
      "image": "http://dummyimage.com/825x340.bmp/ff4444/ffffff",
      "prev": "#post-4",
      "url": "#post-5",
      "anchor": "post-5",
      "next": "#",
      "tags": [
        {
          "tag": "php"
        }
      ],
      "carrousell": [
        {
          "image": "http://dummyimage.com/825x340.png/cc0000/ffffff",
          "title": "mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim",
          "description": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum."
        },
        {
          "image": "http://dummyimage.com/825x340.png/cc0000/ffffff",
          "title": "nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi",
          "description": "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
        }
      ]
    }
  ]

        }
    },
  render: function() {
    function concaTag(tags){
        var tagList = [];
        {
            tags.map(function(tag, index) {
                tagList.push(tag.tag);
            })
        }
        return tagList.join(", ");
    }
    return (
            <div id="blog" className="content_2">
                <h1 className="h-bloc">Blog - My Blog</h1><br /> 
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12" id="blog_page">
                            <section id="blog-page">
                            {
                              this.state.blogData.map(function(blogItem, index, blogData) {
                                blogItem.tagList = concaTag(blogItem.tags);
                                return <BlogExtractPostTemplate {...blogItem}/>
                              })
                            }
                            </section>

                            {
                              this.state.blogData.map(function(blogItem, index, blogData) {
                                blogItem.tagList = concaTag(blogItem.tags);
                                return <BlogPostTemplate {...blogItem}/>
                              })
                            }
                        </div>

                        <div className="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-sm">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        <h3 className="modal-title h3_modal" style={{color: '#fff !important'}}>FlexyVcard - Responsive Vcard Template</h3>
                                    </div>
                                    <div className="modal-body">
                                        <p>FlexyVcard is an impressive and professional online vcard, a beautiful portfolio with sliding effect, resume and contact information with Google map.</p>
                                        <p>It’s simple! Just download and install in a few minutes, you can show your online card to your friend, customer or employer in an interview by phone or tablet. Because FlexyVcard is a responsive template, you can view your website on pc as well as handheld devices. You can also link to your social profiles, display your portfolio in many media format such as image, youtube video, flash...</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
    );
  }
});

export default Blog