import React from 'react';

import BlogExtractPostTemplate from './BlogExtractPostTemplate';
import BlogPostTemplate from './BlogPostTemplate';

var Blog = React.createClass({
    getInitialState: function () {
        return {
            blogData : []
        }
    },
    componentWillMount: function() {
      fetch('Components/Blog/mock-data/blog.json')
        .then((res) => res.json())
        .then((dataJSON) => {
          this.setState({
            blogData: dataJSON
          });
        });
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
                                return <BlogExtractPostTemplate key={'BlogExtractPostTemplate_'+index} {...blogItem}/>
                              })
                            }
                            </section>

                            {
                              this.state.blogData.map(function(blogItem, index, blogData) {
                                blogItem.tagList = concaTag(blogItem.tags);
                                return <BlogPostTemplate key={'BlogPostTemplate_'+index} {...blogItem}/>
                              })
                            }
                        </div>

                        <div className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
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