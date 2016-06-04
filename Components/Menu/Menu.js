import React from 'react';

import MenuItem from './MenuItem'

var Menu = React.createClass({
	getInitialState: function () {
	    return {
	    		menuData : [
			    {
				    "class": "tabs-profile",
				    "tabName": "profile",
				    "title": "Profile",
				    "faIcon": "fa-user",
				    "active": true,
				    "style": {}
				},
			    {
				    "class": "tabs-resume",
				    "tabName": "resume",
				    "title": "Resume",
				    "faIcon": "fa-tasks",
				    "active": false,
				    "style": {}
				},
			    {
				    "class": "tabs-portfolio",
				    "tabName": "portfolio",
				    "title": "Portfolio",
				    "faIcon": "fa-briefcase",
				    "active": false,
				    "style": {}
				},
				{
				    "class": "tabs-blog",
				    "tabName": "blog",
				    "title": "Blog",
				    "faIcon": "fa-bullhorn",
				    "active": false,
				    "style": {}
				},
			    {
				    "class": "tabs-contact",
				    "tabName": "contact",
				    "title": "Contact",
				    "faIcon": "fa-envelope",
				    "active": false,
				    "style": {
				    	"marginBottom": "48px !important"
				    }
				}	
			]
		}
	},
  render: function() {

    return (
    	<ul className="resp-tabs-list">
	        {
              this.state.menuData.map(function(itemMenu, index) {
                return <MenuItem key={'menu_'+index} {...itemMenu} />
              })
            }

	        <a href="#" id="print"><i className="fa fa-print icon_print"></i> </a>
	        <a href="#" id="downlowd"><i className="fa fa-download icon_print"></i> </a>

	    </ul>
    );
  }
});

export default Menu