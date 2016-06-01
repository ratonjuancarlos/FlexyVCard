import React from 'react';

var ExperienceItem = React.createClass({
  render: function() {
    return (
    	<li className="first">
            <h5>Web Developer <span className="duration"><i className="fa fa-calendar color"></i> 2011 - 2013</span></h5>
            <h6><span className="fa fa-briefcase"></span> Name of Company</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.</p>
        </li>
    );
  }
});

export default ExperienceItem