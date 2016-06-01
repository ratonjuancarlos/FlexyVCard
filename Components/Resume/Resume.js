import React from 'react';

import SkillbarGroup from './SkillbarGroup';
import ExperienceGroup from './ExperienceGroup';

import ClientReferenceItem from './ClientReferenceItem';


var Resume = React.createClass({
  render: function() {
    return (
            <div id="resume" className="content_2">
                {/* .title */}
                <h1 className="h-bloc">Resume - Personal Info</h1> 

                <div className="row">

                    {/* .resume-right */}
                    <div className="col-md-6">

                        <SkillbarGroup />


                        <SkillbarGroup />


                        <SkillbarGroup />


                        <SkillbarGroup />


                        <SkillbarGroup />


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

                        <ExperienceGroup />


                        <ExperienceGroup />


                        <ExperienceGroup />

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
                                <ClientReferenceItem />
                                
                                <ClientReferenceItem />
                                
                                <ClientReferenceItem />
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