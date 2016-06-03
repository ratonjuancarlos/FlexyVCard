import React from 'react';

import Skillbar from './Skillbar';
import SkillbarTitle from './SkillbarTitle';

var SkillbarGroup = React.createClass({
	  componentDidMount: function() {
    $('.skillbar').each(function() {
		$(this).find('.skillbar-bar').width(0);
	});
	
	$('.skillbar').each(function() {
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 2000);
	});
  },
  render: function() {
    return (
    	<div>
			<SkillbarTitle skillTitle={this.props.group_skills}/>

			<div className="skills">
				{
                    this.props.skills.map(function(skill) {
                        return <Skillbar {...skill} />
                    })
                }
			</div>
		</div>
    );
  }
});

export default SkillbarGroup