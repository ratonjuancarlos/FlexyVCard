import React from 'react';

var ClientReferenceItem = React.createClass({
  render: function() {
    return (
    	<li className="clearfix">
            <img src="http://placehold.it/100x100" className="img_reference" width="100" height="100" alt="" />
            <p>“Many desktop publishing packages and web page editors now use Lorem Ipsum as their default will model text, and a search for 'lorem ipsum' hope is uncover many web sites still”</p>
            <span>John Doe, UX Designer</span>
        </li>
    );
  }
});

export default ClientReferenceItem