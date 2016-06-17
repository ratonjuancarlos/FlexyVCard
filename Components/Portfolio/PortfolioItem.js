import React from 'react';

var PortfolioItem = React.createClass({
    render: function() {
        return (
            <div className={"view view-first portfolio " + this.props.cat} data-cat={this.props.cat}>
                <img src={this.props.thumbnail} />
                <div className="mask">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description}</p>
                    
                    <a href={this.props.image} rel="portfolio" className="info open-imag">
                        <i className="fa fa-search"></i>
                    </a>
                    {this.props.content} 
                </div>
            </div>
        );
    }
});

export default PortfolioItem