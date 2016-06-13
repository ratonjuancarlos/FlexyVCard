import React from 'react';

var MenuItem = React.createClass({
  render: function() {
    return (
    	<li className={this.props.class+" hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a "+this.props.tabName} data-tab-name={this.props.tabName} style={this.props.style}>			
            <span className="tite-list">{this.props.title}</span>
            <i className={'fa '+this.props.faIcon+' icon_menu '+(this.props.active ? 'icon_menu_active':'')}></i>
        </li>
    );
  }
});

export default MenuItem
