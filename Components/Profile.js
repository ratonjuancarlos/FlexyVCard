import React from 'react';

import ProfileServiceColumn from './Profile/ProfileServiceColumn'
import ProfileServiceAccordion from './Profile/ProfileServiceAccordion'

var Profile = React.createClass({
        getInitialState: function () {
        return {
                profileData : {
                  "name": "Keith Cox",
                  "birth": "14/09/2015",
                  "address": "4 Autumn Leaf Drive",
                  "city": "Palma Gil",
                  "email": "kcox0@reverbnation.com",
                  "phone": "52-(954)593-2616",
                  "website": "https://sogou.com/orci/nullam/molestie.jpg",
                  "quote1": "nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque",
                  "quote2": "rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa",
                  "service": [
                    {
                      "name": "suspendisse potenti",
                      "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
                      "image": "http://dummyimage.com/348x456.png/5fa2dd/ffffff",
                      "icon": "fa-download"
                    },
                    {
                      "name": "at",
                      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
                      "image": "http://dummyimage.com/348x456.png/cc0000/ffffff",
                      "icon": "fa-picture"
                    },
                    {
                      "name": "vestibulum",
                      "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
                      "image": "http://dummyimage.com/348x456.png/5fa2dd/ffffff",
                      "icon": "fa-dribbble"
                    }
                  ]
                }
        }
    },
  render: function() {
    return (
        <div id="profile" className="content_2">
            {/* .title */}
            <h1 className="h-bloc">Profile - About Me</h1>

            <div className="row top-p">
                <div className="col-md-6 profile-l">

                    {/*About me*/}
                    <div className="title_content">
                        <div className="text_content">{this.state.profileData.name}</div>
                        <div className="clear"></div>
                    </div>

                    <ul className="about">

                        <li>
                            <i className="glyphicon glyphicon-user"></i>
                            <label>Name</label>
                            <span className="value">{this.state.profileData.name}</span>
                            <div className="clear"></div>
                        </li>

                        <li>
                            <i className="glyphicon glyphicon-calendar"></i>
                            <label>Date of birth</label>
                            <span className="value">{this.state.profileData.birth}</span>
                            <div className="clear"></div>
                        </li>

                        <li> 
                            <i className="glyphicon glyphicon-map-marker"></i>
                            <label>Adress</label>
                            <span className="value">{this.state.profileData.address}</span>
                            <div className="clear"></div>
                        </li>

                        <li>
                            <i className="glyphicon glyphicon-envelope"></i>
                            <label>Email</label>
                            <span className="value">{this.state.profileData.email}</span>
                            <div className="clear"></div>
                        </li>

                        <li>
                            <i className="glyphicon glyphicon-phone"></i>
                            <label>Phone</label>
                            <span className="value">{this.state.profileData.phone}</span>
                            <div className="clear"></div>
                        </li>

                        <li>
                            <i className="glyphicon glyphicon-globe"></i>
                            <label>Website</label>
                            <span className="value"><a href="#" target="_blank">{this.state.profileData.website}</a></span>
                            <div className="clear"></div>
                        </li>

                    </ul>


                    <p style={{marginTop: 20+'px'}} >
                        <i className="fa fa-quote-left"></i>       
                        {this.state.profileData.quote1}
                    </p>

                    <p style={{marginTop:20+'px'}}>
                        <i className="fa fa-quote-left"></i>       
                        {this.state.profileData.quote2} 

                    </p>

                </div>
                {/* End left-wrap */}

                <div className="col-md-6 profile-r">

                    <div className="cycle-slideshow">
                        {
                          this.state.profileData.service.map(function(serviceItem) {
                            return <img src={serviceItem.image} />
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
                      this.state.profileData.service.map(function(serviceItem) {
                        return <ProfileServiceColumn {...serviceItem} />
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
                              this.state.profileData.service.map(function(serviceItem, index) {
                                return <ProfileServiceAccordion index={index} {...serviceItem} />
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