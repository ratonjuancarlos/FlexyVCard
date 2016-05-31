import React from 'react';

var Contact = React.createClass({
  render: function() {
    return (
            <div id="contact" className="content_2">

                <h1 className="h-bloc">Contact - Contact Me</h1>


                <div className="row">

                    <div className="col-lg-12">
                        <div id="map"></div>
                    </div>  

                    <div className="col-lg-12">
                        <div className="row" id="contact-user">
                            <div className="col-md-5">
                                <div className="contact-info">
                                    {/*<h3 className="main-heading"><span>Contact info</span></h3>*/}

                                    <div className="title_content" style={{float: 'none'}}>
                                        <div className="text_content">Contact info</div>
                                        <div className="clear"></div>
                                    </div>

                                    <ul>
                                        <li><span className="span-info"><i className="glyphicon glyphicon-map-marker"></i> Adress:</span> San Francisco , CA.<br /><br /></li>
                                        <li><span className="span-info"><i className="glyphicon glyphicon-envelope"></i> Email:</span> brown.smith@gmail.com</li>
                                        <li><span className="span-info"><i className="glyphicon glyphicon-phone"></i> Phone:</span> +123 456 789 111</li>
                                        <li><span className="span-info"><i className="glyphicon glyphicon-globe"></i> Website:</span> www.brown-smith.com</li>
                                        <li><span className="span-info"><i className="glyphicon glyphicon-comment"></i> Skype:</span> brown-smith-skype</li>
                                        <li><span className="span-info"><i className="glyphicon glyphicon-thumbs-up"></i> G. Drive:</span> brown-s-gm@gmail.com</li>
                                        <li><span className="span-info"><i className="glyphicon glyphicon-unchecked"></i> Skydrive:</span> brown-s-sk@hotmail.com</li>
                                    </ul>
                                </div>
                                {/* /Contact Info */}
                                <div className="clear"></div>

                                {/*<h3 className="main-heading" style="margin-left: 22px;"><span>Follow me</span></h3>*/}

                                <div className="title_content tiltle_contacts" style={{float: 'none'}}>
                                    <div className="text_content">Follow me</div>
                                    <div className="clear"></div>
                                </div>



                                <div id="profile_social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa fa-dribbble"></i></a>
                                    <a href="#"><i className="fa fa-foursquare"></i></a>
                                    <div className="clear"></div>
                                </div>



                            </div>

                            <div className="col-md-7">
                                {/* Contact Form */}
                                <div className="title_content" style={{float: 'none'}}>
                                    <div className="text_content">Let's keep in touch</div>
                                    <div className="clear"></div>
                                </div>

                                <div className="contact-form">
                                    {/*<h3 className="main-heading"><span>Let's keep in touch</span></h3>*/}



                                    <div id="contact-status"></div>

                                    <form action="" id="contactform">
                                        <p className="form-group" id="contact-name">
                                            <label for="name">Your Name</label>
                                            <input type="text" name="name" className="form-control name-contact" id="inputSuccess" placeholder="Name..." />
                                        </p>
                                        <p className="form-group" id="contact-email"> 
                                            <label for="email">Your Email</label>
                                            <input type="text" name="email" className="form-control email-contact" id="inputSuccess" placeholder="Email..." />
                                        </p>

                                        <p className="form-group" id="contact-message">
                                            <label for="message">Your Message</label>
                                            <textarea name="message" cols="88" rows="6" className="form-control message-contact" id="inputError" placeholder="Message..."></textarea>
                                        </p>
                                        <input type="reset" name="reset" value="CLEAR" className="reset" />
                                        {/* <input type="submit" name="submit" value="SEND MESSAGE" className="submit">*/}

                                        <section className="button-demo" style={{display: 'inline-block'}}>
                                            <button className="ladda-button submit send_email" name="submit" data-color="green" data-style="expand-left">SEND MESSAGE</button>
                                        </section>

                                    </form>
                                </div>
                                {/* /Contact Form */}
                            </div>
                        </div>
                    </div>  

                </div>
            </div>
    );
  }
});

export default Contact