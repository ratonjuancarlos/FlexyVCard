import React from 'react';

var Widget = React.createClass({
  render: function() {
    return (
	    	<div className="col-md-3 widget-profil">
                <div className="row">

                    {/* Profile Image */}
                    <div className="col-lg-12 col-md-12 col-sm-3 col-xs-12 ">

                        <div className="image-holder one" id="pic_prof_1"  style={{display:'none'}}>

                            <img className="head-image up circle" src="http://placehold.it/150x150" width="150" height="150" alt="" />
                            <img className="head-image up-left circle" src="http://placehold.it/150x150" width="150" height="150" alt="" />
                            <img className="head-image left circle" src="http://placehold.it/150x150" width="150" height="150" alt="" />
                            <img className="head-image down-left circle" src="http://placehold.it/150x150" width="150" height="150" alt="" />
                            <img className="head-image down circle" src="http://placehold.it/150x150" width="150" height="150" alt="" />
                            <img className="head-image down-right circle" src="http://placehold.it/150x150" width="150" height="150" alt="" />
                            <img className="head-image right circle" src="http://placehold.it/150x150" width="150" height="150" alt="" />
                            <img className="head-image up-right circle" src="http://placehold.it/150x150" width="150" height="150" alt="" />
                            <img className="head-image front circle" src="http://placehold.it/150x150" width="150" height="150" alt="" />

                        </div>

                        {/* style for simple image profile */}		
                        <div className="circle-img" id="pic_prof_2"></div>

                    </div>
                    {/* End Profile Image */}

                    <div className="col-lg-12 col-md-12 col-sm-9 col-xs-12">

                        {/* Profile info */}
                        <div id="profile_info">
                            <h1 id="name" className="transition-02">{this.props.profileData.name}</h1>
                            <h4 className="line">{this.props.profileData.job}</h4>
                            <h6><span className="fa fa-map-marker"></span> {this.props.profileData.address}</h6>
                        </div>
                        {/* End Profile info */}  


                        {/* Profile Description */}
                        <div id="profile_desc">
                            <p>
                                {this.props.profileData.quote1}
                            </p>
                            <p>
                                {this.props.profileData.quote2} 
                            </p>
                        </div>
                        {/* End Profile Description */}  


                        {/* Name */}
                        <div id="profile_social">
                            <h6>My Social Profiles</h6>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-foursquare"></i></a>
                            <div className="clear"></div>
                        </div>
                        {/* End Name */}  

                    </div>

                </div>
            </div>
    );
  }
});

export default Widget