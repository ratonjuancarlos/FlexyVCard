import React from 'react';

import MenuItem from './MenuItem'

var Menu = React.createClass({
  render: function() {
    return (
    	<ul className="resp-tabs-list">
	        <li className="tabs-profile hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a profile" data-tab-name="profile">			
	            <span className="tite-list">profile</span>
	            <i className="fa fa-user icon_menu icon_menu_active"></i>
	        </li>

	        <li className="tabs-resume hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a" data-tab-name="resume"> 
	            <span className="tite-list">resume</span>
	            <i className="fa fa-tasks icon_menu"></i>
	        </li>

	        <li className="tabs-portfolio hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a" data-tab-name="portfolio"> 
	            <span className="tite-list">portfolio</span>
	            <i className="fa fa-briefcase icon_menu"></i>
	        </li>

	        <li className="tabs-blog hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a" data-tab-name="blog">
	            <span className="tite-list">blog</span>
	            <i className="fa fa-bullhorn icon_menu"></i>
	        </li>

	        <li className="tabs-contact hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a" data-tab-name="contact" style={{marginBottom: '48px !important'}}> 
	            <span className="tite-list">contact</span>
	            <i className="fa fa-envelope icon_menu"></i> 
	        </li>

	        <a href="#" id="print"><i className="fa fa-print icon_print"></i> </a>
	        <a href="#" id="downlowd"><i className="fa fa-download icon_print"></i> </a>

	    </ul>
    );
  }
});

export default Menu