import React from 'react';

import ProfileServiceColumn from './Profile/ProfileServiceColumn'
import ProfileServiceAccordion from './Profile/ProfileServiceAccordion'

var Profile = React.createClass({

  render: function() {
    return (
        <div id="profile" className="content_2">
            {/* .title */}
            <h1 className="h-bloc">Profile - About Me</h1>

            <div className="row top-p">
                <div className="col-md-6 profile-l">

                    {/*About me*/}
                    <div className="title_content">
                        <div className="text_content">{this.props.profileData.name}</div>
                        <div className="clear"></div>
                    </div>

                    <ul className="about">

                        <li>
                            <i className="glyphicon glyphicon-user"></i>
                            <label>Name</label>
                            <span className="value">{this.props.profileData.name}</span>
                            <div className="clear"></div>
                        </li>

                        <li>
                            <i className="glyphicon glyphicon-calendar"></i>
                            <label>Date of birth</label>
                            <span className="value">{this.props.profileData.birth}</span>
                            <div className="clear"></div>
                        </li>

                        <li> 
                            <i className="glyphicon glyphicon-map-marker"></i>
                            <label>Adress</label>
                            <span className="value">{this.props.profileData.address}</span>
                            <div className="clear"></div>
                        </li>

                        <li>
                            <i className="glyphicon glyphicon-envelope"></i>
                            <label>Email</label>
                            <span className="value">{this.props.profileData.email}</span>
                            <div className="clear"></div>
                        </li>

                        <li>
                            <i className="glyphicon glyphicon-phone"></i>
                            <label>Phone</label>
                            <span className="value">{this.props.profileData.phone}</span>
                            <div className="clear"></div>
                        </li>

                        <li>
                            <i className="glyphicon glyphicon-globe"></i>
                            <label>Website</label>
                            <span className="value"><a href="#" target="_blank">{this.props.profileData.website}</a></span>
                            <div className="clear"></div>
                        </li>

                    </ul>


                    <p style={{marginTop: 20+'px'}} >
                        <i className="fa fa-quote-left"></i>       
                        {this.props.profileData.quote1}
                    </p>

                    <p style={{marginTop:20+'px'}}>
                        <i className="fa fa-quote-left"></i>       
                        {this.props.profileData.quote2} 

                    </p>

                </div>
                {/* End left-wrap */}

                <div className="col-md-6 profile-r">

                    <div className="cycle-slideshow">
                        {
                          this.props.profileData.service.map(function(serviceItem, index) {
                            return <img key={'serviceImage_'+index}src={serviceItem.image} />
                          })
                        }
                    </div>

                </div>

            </div>

            <div className="clear"></div>


            <div className="row" id="services">
                <div className="col-md-12">
                    <div className="title_content">
                        <div className="text_content">My Services 1</div>
                        <div className="clear"></div>
                    </div>
                    {
                      this.props.profileData.service.map(function(serviceItem, index) {
                        return <ProfileServiceColumn key={'serviceColumn_'+index} {...serviceItem} />
                      })
                    }

                </div> 
            </div>{/* End Services */}


            <div className="clear"></div>
            <div className="border-list"></div>

            <div className="row">
                <div className="col-md-12">
                    <div className="bottom-p">
                        <div className="title_content">
                            <div className="text_content">My Services 2</div>
                            <div className="clear"></div>
                        </div>

                        <div className="panel-group" id="accordion">
                            {
                              this.props.profileData.service.map(function(serviceItem, index) {
                                return <ProfileServiceAccordion key={'serviceAccordion_'+index} index={index} {...serviceItem} />
                              })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="clear"></div>

        </div>
    );
  }
});

export default Profile