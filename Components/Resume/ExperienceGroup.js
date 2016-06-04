import React from 'react';

import ExperienceTitle from './ExperienceTitle';
import ExperienceItem from './ExperienceItem'

var ExperienceGroup = React.createClass({
  render: function() {
    return (
    	<div>
		  	<ExperienceTitle title={this.props.title}/>
		  	<ul className="attributes">
		  		{
                    this.props.experience.map(function(job, index) {
                        return <ExperienceItem key={'ExperienceItem_'+index} index={index} {...job} />
                    })
                }
	        </ul>
	        <br />
		</div>
    );
  }
});

export default ExperienceGroup