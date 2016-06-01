import React from 'react';

import Skillbar from './Skillbar';
import SkillbarTitle from './SkillbarTitle';

var SkillbarGroup = React.createClass({
  render: function() {
    return (
    	<div>
		  	{/* .title_content */}
			<SkillbarTitle />
			{/* /.title_content */}

			<div className="skills">
			    
			    <Skillbar />

			    <Skillbar />

			    <Skillbar />

			    <Skillbar />
			</div>
		</div>
    );
  }
});

export default SkillbarGroup