import React from 'react';

import BlogPostExtractGallery from './BlogPostExtractGallery';
import BlogPostExtractAside from './BlogPostExtractAside';
import BlogPostExtractImage from './BlogPostExtractImage';

import BlogPostGallery from './BlogPostGallery';
import BlogPostAside from './BlogPostAside';
import BlogPostImage from './BlogPostImage';

var Blog = React.createClass({
  render: function() {
    return (
            <div id="blog" className="content_2">
                <h1 className="h-bloc">Blog - My Blog</h1><br /> 

                <div className="col-md-12">
                    <div className="row">

                        {/* Page Blog */}
                        <div className="col-md-12" id="blog_page">
                            {/* start Page Blog */}
                            <section id="blog-page">

                                {/* Post 1 */}	
                                <BlogPostExtractGallery />
                                {/* End Post 1 */}

                                <div className="clear"></div>

                                {/* Post 2 */}
                                <BlogPostExtractAside />
                                {/* End Post 2 */}

                                <div className="clear"></div>

                                {/* Post 3 */}
                                <BlogPostExtractImage />
                                {/* End Post 3 */}

                            </section>

                            {/* End Page Blog */}



                            {/* Page Blog - Post 1 */}
                            <BlogPostGallery />
                            {/* End Page Blog - Post 1 */}

                            {/* Page Blog - Post 2 */}
                            <BlogPostAside />
                            {/* End Page Blog - Post 2 */}

                            {/* Page Blog - Post 3 */}
                            <BlogPostImage />
                            {/* End Page Blog - Post 3 */}


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