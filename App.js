import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Components/Menu/Menu'
import Widget from './Components/Widget'

import Profile from './Components/Profile'
import Resume from './Components/Resume/Resume'
import Portfolio from './Components/Portfolio/Portfolio'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'

// import menuData from './mock-data/menu.json'




var App = React.createClass({
	getInitialState: function () {
        return {
                profileData : {
                  "name": "Keith Cox",
                  "birth": "14/09/2015",
                  "address": "4 Autumn Leaf Drive",
                  "city": "Palma Gil",
                  "job": "web designer",
                  "email": "kcox0@reverbnation.com",
                  "phone": "52-(954)593-2616",
                  "website": "https://printfriendly.com",
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
   render: function(){
	return (
      	<div>
	        {/*[if lt IE 7]>
	                <p className="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	        <![endif]*/}

	        {/* Laoding page */}
	        <div id="preloader"><div id="spinner"></div></div>

	        {/* .slideshow */}
	        {/*<ul className="cb-slideshow" id="cb_slideshow">
	            <li><span>Image 01</span><div></div></li>
	            <li><span>Image 02</span><div></div></li>
	            <li><span>Image 03</span><div></div></li>
	            <li><span>Image 04</span><div></div></li>
	            <li><span>Image 05</span><div></div></li>
	            <li><span>Image 06</span><div></div></li>
	        </ul> */}
	        {/* /.slideshow */}  

	        {/* .wrapper */} 
	        <div className="wrapper">

	            {/*- .Content */} 
	            <section className="tab-content">
	                <div className="container">

	                    <div className="row">

	                        <div className="col-md-12">

	                            <div className="row">   

                                    <Widget profileData={this.state.profileData}/>

	                                <div className="col-md-9 flexy_content" style={{paddingLeft: 0, paddingRight: 0}}>

	                                    {/* verticalTab menu */}
	                                    <div id="verticalTab">

	                                        <Menu />
	                                        {/* /resp-tabs-list */}

	                                        {/* resp-tabs-container */} 
	                                        <div className="resp-tabs-container">

	                                            <Profile profileData={this.state.profileData}/>

	                                            <Resume />

	                                            <Portfolio />

	                                            <Blog />

	                                            <Contact profileData={this.state.profileData}/>

	                                        </div>
	                                        {/* End #resp-tabs-container */} 

	                                    </div>{/* End verticalTab */}

	                                </div>{/* End flexy_content */}


	                            </div>{/* End row */}

	                        </div>{/* End col-md-12 */}

	                    </div>{/* End row */}

	                </div>{/* End container */}

	            </section>
	            {/* End Content */}

	        </div>
	        {/* End wrapper */}
	    </div>
      )
   }
});

export default App
