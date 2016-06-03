import React from 'react';

var ProfileServiceColumn = React.createClass({
  render: function() {
    return (
    	<div className="col-md-4 pack-service">
            <div className="service">
                <div className="service-icon"><i className={'fa '+this.props.icon}></i></div>
                <div className="service-detail">
                    <h6>{this.props.name}</h6>
                    <p>{this.props.description}</p>
                </div>
            </div>
        </div>
    );
  }
});

export default ProfileServiceColumn
