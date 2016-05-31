import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Components/Menu'
import Widget from './Components/Widget'

import Profile from './Components/Profile'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import Blog from './Components/Blog'
import Contact from './Components/Contact'

var App = React.createClass({
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

                                    <Widget />

	                                <div className="col-md-9 flexy_content" style={{paddingLeft: 0, paddingRight: 0}}>

	                                    {/* verticalTab menu */}
	                                    <div id="verticalTab">

	                                        <Menu />
	                                        {/* /resp-tabs-list */}

	                                        {/* resp-tabs-container */} 
	                                        <div className="resp-tabs-container">

	                                            <Profile />

	                                            {/* 
	                                            <Resume />

	                                            <Portfolio />

	                                            */} 
	                                            <Blog />

	                                            <Contact />

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
