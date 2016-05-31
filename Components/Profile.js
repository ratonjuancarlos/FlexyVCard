import React from 'react';

var Profile = React.createClass({
  render: function() {
    return (
        <div id="profile" className="content_2">
            {/* .title */}
            <h1 className="h-bloc">Profile - About Me</h1>

            <div className="row top-p">
                <div className="col-md-6 profile-l">

                    {/*About me*/}
                    <div className="title_content">
                        <div className="text_content">brown smith</div>
                        <div className="clear"></div>
                    </div>

                    <ul className="about">

                        <li>
                            <i className="glyphicon glyphicon-user"></i>
                            <label>Name</label>
                            <span className="value">Brown Smith</span>
                            <div className="clear"></div>
                        </li>

                        <li>
                            <i className="glyphicon glyphicon-calendar"></i>
                            <label>Date of birth</label>
                            <span className="value">March 18, 1988</span>
                            <div className="clear"></div>
                        </li>

                        <li> 
                            <i className="glyphicon glyphicon-map-marker"></i>
                            <label>Adress</label>
                            <span className="value">San Francisco , CA</span>
                            <div className="clear"></div>
                        </li>

                        <li>
                            <i className="glyphicon glyphicon-envelope"></i>
                            <label>Email</label>
                            <span className="value">brown.smith@gmail.com</span>
                            <div className="clear"></div>
                        </li>

                        <li>
                            <i className="glyphicon glyphicon-phone"></i>
                            <label>Phone</label>
                            <span className="value">+123 (21) 1234-5678</span>
                            <div className="clear"></div>
                        </li>

                        <li>
                            <i className="glyphicon glyphicon-globe"></i>
                            <label>Website</label>
                            <span className="value"><a href="#" target="_blank">www.brown-smith.com</a></span>
                            <div className="clear"></div>
                        </li>

                    </ul>


                    <p style={{marginTop: 20+'px'}} >
                        <i className="fa fa-quote-left"></i>       
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nulla sagittis, scelerisque mi vitae, congue turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nulla sagittis, scelerisque mi vitae, congue turpis.
                    </p>

                    <p style={{marginTop:20+'px'}}>
                        <i className="fa fa-quote-left"></i>       
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nulla sagittis, scelerisque mi vitae, congue turpis. 

                    </p>

                </div>
                {/* End left-wrap */}

                <div className="col-md-6 profile-r">

                    <div className="cycle-slideshow">
                        <img src="http://placehold.it/348x456" alt="" />
                        <img src="http://placehold.it/348x456" alt="" />
                        <img src="http://placehold.it/348x456" alt="" />
                    </div>

                </div>

            </div>

            <div className="clear"></div>


            <div className="row" id="services">
                <div className="col-md-12">
                    <div className="title_content">
                        <div className="text_content">My Services 1</div>
                        <div className="clear"></div>
                    </div>


                    <div className="col-md-4 pack-service">
                        <div className="service">
                            <div className="service-icon"><i className="fa fa-tag"></i></div>
                            <div className="service-detail">
                                <h6>Making Money</h6>
                                <p>Fusce quis interdum ipsum.Suspendi suscipit vehicula sapienid mattis. Lorem ipsum amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 pack-service">
                        <div className="service">
                            <div className="service-icon"><i className="fa fa-cogs"></i></div>
                            <div className="service-detail">
                                <h6>Easy to Customize</h6>
                                <p>Fusce quis interdum ipsum.Suspendi suscipit vehicula sapienid mattis. Lorem ipsum amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 pack-service">
                        <div className="service">
                            <div className="service-icon"><i className="fa fa-arrows-alt"></i></div>
                            <div className="service-detail">
                                <h6>Moving Let Us Help</h6>
                                <p>Fusce quis interdum ipsum.Suspendi suscipit vehicula sapienid mattis. Lorem ipsum amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>{/* End Services */}


            <div className="clear"></div>
            <div className="border-list"></div>

            <div className="row">
                <div className="col-md-12">
                    <div className="bottom-p">
                        <div className="title_content">
                            <div className="text_content">My Services 2</div>
                            <div className="clear"></div>
                        </div>

                        <div className="panel-group" id="accordion">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" className="collapse_tabs">
                                            Making Money
                                            <i className="glyphicon glyphicon-chevron-up" style={{float:'right', fontSize:13+'px' }} ></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <i className="fa fa-quote-left"></i>  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" className="collapse_tabs">
                                            Easy to Customize
                                            <i className="glyphicon glyphicon-chevron-down" style={{float:'right', fontSize:13+'px' }}></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <i className="fa fa-quote-left"></i>  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" className="collapse_tabs">
                                            Moving Let Us Help
                                            <i className="glyphicon glyphicon-chevron-down" style={{float:'right', fontSize:13+'px' }}></i>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <i className="fa fa-quote-left"></i>  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clear"></div>

        </div>
    );
  }
});

export default Profile