import React from 'react';

import SkillbarGroup from './SkillbarGroup';
import ExperienceGroup from './ExperienceGroup';

import ClientReferenceItem from './ClientReferenceItem';


var Resume = React.createClass({
    getInitialState: function () {
        return {
                resumeData : [
                  {
                    "_id": "5750ee559159d42e3fb9600f",
                    "group_skills": "design",
                    "skills": [
                      {
                        "id": 0,
                        "skill": "aliqua",
                        "percent": "57%"
                      },
                      {
                        "id": 1,
                        "skill": "minim",
                        "percent": "57%"
                      },
                      {
                        "id": 2,
                        "skill": "voluptate",
                        "percent": "81%"
                      }
                    ]
                  },
                  {
                    "_id": "5750ee55671a9c9c9988b952",
                    "group_skills": "office",
                    "skills": [
                      {
                        "id": 0,
                        "skill": "duis",
                        "percent": "86%"
                      },
                      {
                        "id": 1,
                        "skill": "in",
                        "percent": "88%"
                      },
                      {
                        "id": 2,
                        "skill": "dolor",
                        "percent": "51%"
                      }
                    ]
                  },
                  {
                    "_id": "5750ee55d987d7d731aa1430",
                    "group_skills": "design",
                    "skills": [
                      {
                        "id": 0,
                        "skill": "adipisicing",
                        "percent": "62%"
                      },
                      {
                        "id": 1,
                        "skill": "duis",
                        "percent": "63%"
                      },
                      {
                        "id": 2,
                        "skill": "excepteur",
                        "percent": "61%"
                      }
                    ]
                  }
                ],
                experienceData:[
                {
                  "title": "experience",
                  "experience": [
                    {
                      "job": "Sales Associate",
                      "company": "Fatz",
                      "description": "sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus",
                      "start": 2010,
                      "end": 2013
                    },
                    {
                      "job": "Paralegal",
                      "company": "Browsecat",
                      "description": "eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis",
                      "start": 2012,
                      "end": 2011
                    },
                    {
                      "job": "Actuary",
                      "company": "Digitube",
                      "description": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede",
                      "start": 2010,
                      "end": 2015
                    }
                  ]
                }, {
                  "title": "education",
                  "experience": [
                    {
                      "job": "Executive Secretary",
                      "company": "Zoonoodle",
                      "description": "turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus",
                      "start": 2012,
                      "end": 2015
                    },
                    {
                      "job": "Office Assistant II",
                      "company": "Babbleset",
                      "description": "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et",
                      "start": 2016,
                      "end": 2013
                    },
                    {
                      "job": "Marketing Manager",
                      "company": "Bubblebox",
                      "description": "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in",
                      "start": 2014,
                      "end": 2011
                    }
                  ]
                }, {
                  "title": "awards",
                  "experience": [
                    {
                      "job": "Speech Pathologist",
                      "company": "LiveZ",
                      "description": "faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros",
                      "start": 2012,
                      "end": 2016
                    },
                    {
                      "job": "Web Developer IV",
                      "company": "Realbuzz",
                      "description": "eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at",
                      "start": 2016,
                      "end": 2011
                    },
                    {
                      "job": "Geological Engineer",
                      "company": "Jabberstorm",
                      "description": "massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum",
                      "start": 2014,
                      "end": 2013
                    }
                  ]
                }],
                referenceData:[{
                  "image": "http://dummyimage.com/100x100.png/cc0000/ffffff",
                  "reference": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
                  "name": "Sandra Fowler",
                  "job": "Speech Pathologist"
                }, {
                  "image": "http://dummyimage.com/100x100.png/dddddd/000000",
                  "reference": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
                  "name": "Jessica Hart",
                  "job": "Web Designer III"
                }, {
                  "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
                  "reference": "Maecenas pulvinar lobortis est.",
                  "name": "Sarah Green",
                  "job": "Payment Adjustment Coordinator"
                }]
        }
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
                            this.state.resumeData.map(function(itemResume) {
                                return <SkillbarGroup {...itemResume} />
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
                            this.state.experienceData.map(function(itemExperience) {
                                return <ExperienceGroup {...itemExperience} />
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
                                    this.state.referenceData.map(function(itemReference) {
                                        return <ClientReferenceItem {...itemReference} />
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