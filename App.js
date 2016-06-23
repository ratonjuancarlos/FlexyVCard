import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Components/Menu/Menu'
import Widget from './Components/Widget'

import Profile from './Components/Profile'
import Resume from './Components/Resume/Resume'
import Portfolio from './Components/Portfolio/Portfolio'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'


var App = React.createClass({
	getInitialState: function () {
        return {
                profileData : {
                	service: []
                }
        }
    },
    componentWillMount: function() {
    	this.setState({
            profileData: require("./mock-data/profile.js")
        });
    },

   render: function(){
	return (
      	<div>
	        <div id="preloader"><div id="spinner"></div></div>

	        <div className="wrapper">

	            <section className="tab-content">
	                <div className="container">

	                    <div className="row">

	                        <div className="col-md-12">

	                            <div className="row">   

                                    <Widget profileData={this.state.profileData}/>

	                                <div className="col-md-9 flexy_content" style={{paddingLeft: 0, paddingRight: 0}}>

	                                    <div id="verticalTab">

	                                        <Menu />

	                                        <div className="resp-tabs-container">

	                                            <Profile profileData={this.state.profileData}/>

	                                            <Resume />

	                                            <Portfolio />

	                                            <Blog />

	                                            <Contact profileData={this.state.profileData}/>

	                                        </div>

	                                    </div>{/* End verticalTab */}

	                                </div>{/* End flexy_content */}

	                            </div>{/* End row */}

	                        </div>{/* End col-md-12 */}

	                    </div>{/* End row */}

	                </div>{/* End container */}

	            </section>

	        </div>

	    </div>
      )
   }
});

export default App
