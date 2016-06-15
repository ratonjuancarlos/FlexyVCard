import React from 'react';

import SkillbarGroup from './SkillbarGroup';
import ExperienceGroup from './ExperienceGroup';

import ClientReferenceItem from './ClientReferenceItem';

var Resume = React.createClass({
    getInitialState: function () {
        return {
          resume:{
            
                resumeData : [],
                experienceData:[],
                referenceData:[]
          }
        }
    },
     componentWillMount: function() {
        fetch('Components/Resume/mock-data/resume.json')
          .then((res) => res.json())
          .then((dataJSON) => {
            this.setState({
              resume: dataJSON
            });
          });

      },
  render: function() {
    return (
            <div id="resume" className="content_2">
                {/* .title */}
                <h1 className="h-bloc">Resume - Personal Info</h1> 

                <div className="row">

                    {/* .resume-right */}
                    <div className="col-md-6">

                        {
                            this.state.resume.resumeData.map(function(itemResume, index) {
                                return <SkillbarGroup key={'SkillbarGroup_'+index} {...itemResume} />
                            })
                        }

                        {/* .title_content */}
                        <div className="title_content" style={{float: 'none'}}>
                            <div className="text_content">My Resume</div>
                            <div className="clear"></div>
                        </div>
                        {/* /.title_content */}

                        {/* .download_resume */}
                        <a className="download" style={{margin:0, float: 'left'}} href="#">
                            <span data-hover="Download My Resume"><i className="glyphicon glyphicon-download-alt"></i> Download My Resume</span>
                        </a>
                        {/* /.download_resume */}

                    </div>
                    {/* /.resume-right */}



                    {/* .resume-left */}
                    <div className="col-md-6 resume-left">    

                        {
                            this.state.resume.experienceData.map(function(itemExperience, index) {
                                return <ExperienceGroup key={'ExperienceGroup_'+index} {...itemExperience} />
                            })
                        }

                    </div>
                    {/* /.resume-left */}
                </div>

                <div style={{clear: 'both'}}></div>  


                {/* client reference */}
                <div className="row">
                    <div className="col-md-12">   

                        <div className="reference clearfix"> 

                            {/* .title_content */}
                            <div className="title_content" style={{marginBottom:'5px'}}>
                                <div className="text_content">Client reference</div>
                                <div className="clear"></div>
                            </div>
                            {/* /.title_content */}


                            <ul>
                                {
                                    this.state.resume.referenceData.map(function(itemReference, index) {
                                        return <ClientReferenceItem key={'ClientReferenceItem_'+index} {...itemReference} />
                                    })
                                }
                                
                            </ul>
                        </div>
                    </div>
                    <div style={{clear: 'both'}}></div>   
                </div>
            </div>
    );
  }
});

export default Resume