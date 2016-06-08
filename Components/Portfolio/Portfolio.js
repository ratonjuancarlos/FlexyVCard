import React from 'react';

import PortfolioItem from './PortfolioItem';

var Portfolio = React.createClass({
    getInitialState: function () {
        return {
                portfolioData : {
                  "id": 1,
                  "categories": [
                    {
                      "name": "Web Design",
                      "cat": "catWeb"
                    },
                    {
                      "name": "Graphic Design",
                      "cat": "catGraphic"
                    },
                    {
                      "name": "Motion Graphic",
                      "cat": "catMotion"
                    },
                    {
                      "name": "Logo",
                      "cat": "logo"
                    }
                  ],
                  "projects": [
                    {
                      "id": 1,
                      "cat": "catGraphic",
                      "name": "Skyble",
                      "description": "Nulla suscipit ligula in lacus.",
                      "image": "http://dummyimage.com/600x849.png/ff4444/ffffff",
                      "content": "<a href=\"http://themeforest.net/item/flexyvcard-responsive-vcard-template-/7158750?WT.ac=solid_search_thumb&amp;WT.seg_1=solid_search_thumb&amp;WT.z_author=flexycodes?width=800&amp;height=500&amp;iframe=true\" rel=\"portfolio\" className=\"info external\"><i className=\"fa fa-link\"></i></a>"
                    },
                    {
                      "id": 2,
                      "cat": "catGraphic",
                      "name": "JumpXS",
                      "description": "Cras non velit nec nisi vulputate nonummy.",
                      "image": "http://dummyimage.com/600x849.png/dddddd/000000",
                      "content": "<a href=\"http://themeforest.net/?width=800&amp;height=500&amp;iframe=true\" rel=\"portfolio\"  className=\"info external\"><i className=\"fa fa-link\"></i></a>"
                    },
                    {
                      "id": 3,
                      "cat": "catWeb",
                      "name": "Photolist",
                      "description": "Curabitur convallis.",
                      "image": "http://dummyimage.com/600x849.png/5fa2dd/ffffff",
                      "content": "<a href=\"http://themeforest.net/user/flexycodes\" target=\"_blank\" className=\"info external\"><i className=\"fa fa-link\"></i></a"
                    },
                    {
                      "id": 4,
                      "cat": "catGraphic",
                      "name": "Pixope",
                      "description": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
                      "image": "http://dummyimage.com/600x849.png/5fa2dd/ffffff",
                      "content": "<a href=\"http://themeforest.net/user/flexycodes\" className=\"info external\"><i className=\"fa fa-link\"></i></a>"
                    },
                    {
                      "id": 5,
                      "cat": "catMotion",
                      "name": "Kanoodle",
                      "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
                      "image": "http://dummyimage.com/600x849.png/dddddd/000000",
                      "content": "<a href=\"http://themeforest.net/user/flexycodes\" className=\"info external\"><i className=\"fa fa-link\"></i></a>"
                    },
                    {
                      "id": 6,
                      "cat": "catWeb",
                      "name": "Brainsphere",
                      "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                      "image": "http://dummyimage.com/600x849.png/5fa2dd/ffffff",
                      "content": "<a href=\"http://themeforest.net/user/flexycodes\" target=\"_blank\" className=\"info external\"><i className=\"fa fa-link\"></i></a"
                    },
                    {
                      "id": 7,
                      "cat": "catGraphic",
                      "name": "Rhyloo",
                      "description": "Aliquam quis turpis eget elit sodales scelerisque.",
                      "image": "http://dummyimage.com/600x849.png/5fa2dd/ffffff",
                      "content": "<a href=\"http://themeforest.net/user/flexycodes/portfolio\" target=\"_blank\" className=\"info external\"><i className=\"fa fa-link\"></i></a>"
                    },
                    {
                      "id": 8,
                      "cat": "catMotion",
                      "name": "Meezzy",
                      "description": "Integer ac neque.",
                      "image": "http://dummyimage.com/600x849.png/dddddd/000000",
                      "content": "<a href=\"http://themeforest.net/user/flexycodes/portfolio\" target=\"_blank\" className=\"info external\"><i className=\"fa fa-link\"></i></a>"
                    },
                    {
                      "id": 9,
                      "cat": "catMotion",
                      "name": "Vipe",
                      "description": "Duis bibendum.",
                      "image": "http://dummyimage.com/600x849.png/cc0000/ffffff",
                      "content": "<a href=\"http://www.youtube.com/watch?v=c9MnSeYYtYY\" rel=\"portfolio\" className=\"info external\"><i className=\"fa fa-play\"></i></a>"
                    }
                  ]
                }
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
                {/* .title */}
                <h1 className="h-bloc">Portfolio - My Works</h1>

                {/* .container-portfolio */}
                    
                 <div className="container-portfolio">
                
                  {/* #filters */}


                    <ul id="filters" className="clearfix">
                    {/* "catWeb catGraphic catMotion logo" */}
                        <li><span className="filter active" data-filter={getAllCat(this.state.portfolioData.categories)}>All</span></li>
                        {
                            this.state.portfolioData.categories.map(function(cat, index) {
                                return <li><span className="filter" data-filter={cat.cat}>{cat.name}</span></li>
                            })
                        }
                    </ul>                    {/* /#filters */}
                
                    {/* #portfoliolist */}
                    <div id="portfoliolist">
                        {
                            this.state.portfolioData.projects.map(function(project, index) {
                                return <PortfolioItem key={index} {...project}/>
                            })
                        }
                        
                        
                    
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