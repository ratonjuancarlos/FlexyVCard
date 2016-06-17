import React from 'react';

import MenuItem from './MenuItem'

var Menu = React.createClass({
	getInitialState: function () {
	    return {
	    	menuData :[]
		}
	},
	    componentWillMount: function() {
      fetch('Components/Menu/mock-data/menu.json')
        .then((res) => res.json())
        .then((dataJSON) => {
          this.setState({
            menuData: dataJSON
          });
        });
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