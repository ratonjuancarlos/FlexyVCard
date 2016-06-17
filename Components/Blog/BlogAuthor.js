import React from 'react';

var BlogAuthor = React.createClass({
    getInitialState: function () {
      return {
              blogAuthorData : {}
      }
    },
    componentWillMount: function() {
      fetch('Components/Blog/mock-data/blogAuthor.json')
        .then((res) => res.json())
        .then((dataJSON) => {
          this.setState({
            blogAuthorData: dataJSON
          });
        });
    },
  render: function() {
    return (
        <div className="about_author">
            <div className="title_content" style={{marginBottom:'10px'}}>
                <div className="text_content">{this.state.blogAuthorData.name}</div>
                <div className="clear"></div>
            </div>

            <div className="clear"></div>


            <div className="prg_content">
                <img src={this.state.blogAuthorData.image} width="100" height="100" alt="img" />

                <div className="text">{this.state.blogAuthorData.resume}</div>

                <div className="nb_post" style={{marginTop: '10px'}}>
                    <b id="nb_post"> {this.state.blogAuthorData.postCreated} posts</b> created by author
                </div>
            </div>

            <div className="clear"></div>
        </div>
    );
  }
});

export default BlogAuthor