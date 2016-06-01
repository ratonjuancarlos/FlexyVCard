import React from 'react';

import ExperienceTitle from './ExperienceTitle';
import ExperienceItem from './ExperienceItem'

var ExperienceGroup = React.createClass({
  render: function() {
    return (
    	<div>
		  	<ExperienceTitle />
		  	<ul className="attributes">
	            <ExperienceItem />

	            <ExperienceItem />
	        </ul>
	        <br />
		</div>
    );
  }
});

export default ExperienceGroup