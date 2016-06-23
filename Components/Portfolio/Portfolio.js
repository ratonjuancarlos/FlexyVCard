import React from 'react';

import PortfolioItem from './PortfolioItem';

var Portfolio = React.createClass({
    getInitialState: function () {
        return {
                portfolioData :  require("./mock-data/portfolio.js")
        }
    },
    render: function() {
      function getAllCat(cats){
          var all = "";
          for (var i = cats.length - 1; i >= 0; i--) {
              all = all + ' ' + cats[i].cat;
          }
          return all;
      }
      return (
        <div id="portfolio" className="content_2">
          <h1 className="h-bloc">Portfolio - My Works</h1>
          <div className="container-portfolio">
            <ul id="filters" className="clearfix">
              <li><span className="filter active" data-filter={getAllCat(this.state.portfolioData.categories)}>All</span></li>
              {
                this.state.portfolioData.categories.map(function(cat, index) {
                  return <li><span className="filter" data-filter={cat.cat}>{cat.name}</span></li>
                })
              }
            </ul>
            <div id="portfoliolist">
              {
                this.state.portfolioData.projects.map(function(project, index) {
                  return <PortfolioItem key={index} {...project}/>
                })
              }
              <div className="clear"></div>
            </div>
          </div>
        </div>
      );
    }
});

export default Portfolio