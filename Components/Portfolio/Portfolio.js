import React from 'react';

import PortfolioItem from './PortfolioItem';

var Portfolio = React.createClass({
  render: function() {
    return (
            <div id="portfolio" className="content_2">
                {/* .title */}
                <h1 className="h-bloc">Portfolio - My Works</h1>

                {/* .container-portfolio */}
                	
                 <div className="container-portfolio">
                
                  {/* #filters */}
                  <ul id="filters" className="clearfix">
                        <li><span className="filter active" data-filter="catWeb catGraphic catMotion logo">All</span></li>
                        <li><span className="filter" data-filter="catWeb">Web Design</span></li>
                        <li><span className="filter" data-filter="catGraphic">Graphic Design</span></li>
                        <li><span className="filter" data-filter="catMotion">Motion Graphic</span></li>
                        <li><span className="filter" data-filter="logo">Logo</span></li>
                    </ul>
                    {/* /#filters */}
                
                    {/* #portfoliolist */}
                    <div id="portfoliolist">
                    
                        <PortfolioItem />
                    
                        <div className="view view-first portfolio logo" data-cat="logo">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                
                            </div>
                        </div> 
                        
                        <PortfolioItem />
                        <div className="view view-first portfolio catWeb" data-cat="catWeb">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://www.youtube.com/watch?v=c9MnSeYYtYY" rel="portfolio" className="info external"><i className="fa fa-play"></i></a> 
                            </div>
                        </div> 
                        
                        <div className="view view-first portfolio catWeb" data-cat="catWeb">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://themeforest.net/item/flexyvcard-responsive-vcard-template-/7158750?WT.ac=solid_search_thumb&amp;WT.seg_1=solid_search_thumb&amp;WT.z_author=flexycodes?width=800&amp;height=500&amp;iframe=true" rel="portfolio" className="info external">
                                <i className="fa fa-link"></i>
                                </a> 
                            </div>
                        </div> 
                        
                        <div className="view view-first portfolio catMotion" data-cat="catMotion">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://themeforest.net/?width=800&amp;height=500&amp;iframe=true" rel="portfolio"  className="info external"><i className="fa fa-link"></i></a> 
                            </div>
                        </div>
                        
                        <div className="view view-first portfolio catWeb" data-cat="catWeb">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://vimeo.com/7449107" rel="portfolio" className="info external"><i className="fa fa-play"></i></a> 
                            </div>
                        </div> 
                        
                        <div className="view view-first portfolio catMotion" data-cat="catMotion">
                
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://themeforest.net/user/flexycodes" target="_blank" className="info external"><i className="fa fa-link"></i></a> 
                            </div>
                        </div>
                        
                        <div className="view view-first portfolio catGraphic" data-cat="catGraphic">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://themeforest.net/user/flexycodes" target="_blank" className="info external"><i className="fa fa-link"></i></a> 
                            </div>
                        </div>
                        
                        <div className="view view-first portfolio logo" data-cat="logo">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://themeforest.net/user/flexycodes" target="_blank" className="info external"><i className="fa fa-link"></i></a> 
                            </div>
                        </div>
                        
                        <div className="view view-first portfolio catWeb" data-cat="catWeb">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://themeforest.net/user/flexycodes" target="_blank" className="info external"><i className="fa fa-link"></i></a> 
                            </div>
                        </div>
                        
                         <div className="view view-first portfolio catGraphic" data-cat="catGraphic">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://themeforest.net/user/flexycodes" target="_blank" className="info external"><i className="fa fa-link"></i></a> 
                            </div>
                        </div>
                        
                         <div className="view view-first portfolio logo" data-cat="logo">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://themeforest.net/user/flexycodes" target="_blank" className="info external"><i className="fa fa-link"></i></a> 
                            </div>
                        </div>
                        
                         <div className="view view-first portfolio logo" data-cat="logo">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" target="_blank" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://themeforest.net/user/flexycodes" className="info external"><i className="fa fa-link"></i></a> 
                            </div>
                        </div>
                        
                         <div className="view view-first portfolio catGraphic" data-cat="catGraphic">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://themeforest.net/user/flexycodes" target="_blank" className="info external"><i className="fa fa-link"></i></a> 
                            </div>
                        </div>
                        
                         <div className="view view-first portfolio logo" data-cat="logo">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://themeforest.net/user/flexycodes/portfolio" target="_blank" className="info external"><i className="fa fa-link"></i></a> 
                            </div>
                        </div>
                        
                         <div className="view view-first portfolio catGraphic" data-cat="catGraphic">
                            <img src="http://placehold.it/220x165" />
                            <div className="mask">
                                <h2>Project Name</h2>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                                
                                 <a href="http://placehold.it/600x849" rel="portfolio" className="info open-imag">
                                    <i className="fa fa-search"></i>
                                </a>
                                <a href="http://themeforest.net/user/flexycodes" target="_blank" className="info external"><i className="fa fa-link"></i></a> 
                            </div>
                        </div>
                        
                    
                        <div className="clear"></div>
                    
                  </div>
                    {/* #images/portfoliolist */}
                </div>
                {/* /.container-portfolio */}
            </div>
    );
  }
});

export default Portfolio