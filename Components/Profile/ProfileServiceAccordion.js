import React from 'react';

var ProfileServiceAccordion = React.createClass({
  render: function() {
    return (
    	<div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href={'#collapse'+this.props.index} className="collapse_tabs">
                        {this.props.name}
                        <i className="glyphicon glyphicon-chevron-up" style={{float:'right', fontSize:13+'px' }} ></i>
                    </a>
                </h4>
            </div>
            <div id={'collapse '+this.props.index} className="panel-collapse collapse in">
                <div className="panel-body">
                    <i className="fa fa-quote-left"></i>  {this.props.description}
            	</div>
            </div>
        </div>
    );
  }
});

export default ProfileServiceAccordion
