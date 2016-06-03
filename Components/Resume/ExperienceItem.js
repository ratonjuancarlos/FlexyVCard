import React from 'react';

var ExperienceItem = React.createClass({
  render: function() {
    return (
    	<li className={this.props.index==1 ? "first": false}>
            <h5>{this.props.job}<span className="duration"><i className="fa fa-calendar color"></i> {this.props.start} - {this.props.end}</span></h5>
            <h6><span className="fa fa-briefcase"></span>{this.props.company}</h6>
            <p>{this.props.description}</p>
        </li>
    );
  }
});

export default ExperienceItem