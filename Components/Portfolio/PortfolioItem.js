import React from 'react';

var PortfolioItem = React.createClass({
  render: function() {
    return (
    	<div className="view view-first portfolio catWeb" data-cat="catWeb">
            <img src="http://placehold.it/220x165" />
            <div className="mask">
                <h2>Project Nameeeeee</h2>
                <p>A wonderful serenity has taken possession of my entire soul.</p>
                
                <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                    <i className="fa fa-search"></i>
                </a>
                <a href="http://www.youtube.com/watch?v=c9MnSeYYtYY" rel="portfolio" className="info external"><i className="fa fa-play"></i></a> 
            </div>
        </div>
    );
  }
});

export default PortfolioItem