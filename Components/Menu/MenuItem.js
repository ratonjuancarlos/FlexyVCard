import React from 'react';

var MenuItem = React.createClass({
  render: function() {
    return (
    	<li className="tabs-profile hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a profile" data-tab-name="profile">			
            <span className="tite-list">profile</span>
            <i className="fa fa-user icon_menu icon_menu_active"></i>
        </li>
    );
  }
});

export default MenuItem