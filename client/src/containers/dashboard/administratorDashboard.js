/**
 * Created by imran on 20/02/2018.
 */

import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class AdministratorDashboard extends React.Component {
  render() {
    return (
      <div>
  			<div className='row'>
          <div className='col-xl-3'>
            <div className='row m-row--full-height'>
              <div className='col-sm-12 col-md-12 col-lg-12'>
                <div style={{height: 'auto'}} className='m-portlet m-portlet--half-height m-portlet--border-bottom-brand'>
                  <div className='m-portlet__body'>
                    <div className='m-widget26'>
                      <div className='m-widget26__number'>
                        2065
                        <small>
                          Total Users
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='m--space-30' />
              </div>
            </div>
          </div>
          <div className='col-xl-3'>
            <div className='row m-row--full-height'>
              <div className='col-sm-12 col-md-12 col-lg-12'>
                <div style={{height: 'auto'}} className='m-portlet m-portlet--half-height m-portlet--border-bottom-success'>
                  <div className='m-portlet__body'>
                    <div className='m-widget26'>
                      <div className='m-widget26__number'>
                        1075
                        <small>
                          Total Students
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='m--space-30' />
              </div>
            </div>
          </div>
          <div className='col-xl-3'>
            <div className='row m-row--full-height'>
              <div className='col-sm-12 col-md-12 col-lg-12'>
                <div style={{height: 'auto'}} className='m-portlet m-portlet--half-height m-portlet--border-bottom-accent'>
                  <div className='m-portlet__body'>
                    <div className='m-widget26'>
                      <div className='m-widget26__number'>
                        960
                        <small>
                          Total Faculty
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='m--space-30' />
              </div>
            </div>
          </div>
          <div className='col-xl-3'>
            <div className='row m-row--full-height'>
              <div className='col-sm-12 col-md-12 col-lg-12'>
                <div style={{height: 'auto'}} className='m-portlet m-portlet--half-height m-portlet--border-bottom-danger'>
                  <div className='m-portlet__body'>
                    <div className='m-widget26'>
                      <div className='m-widget26__number'>
                        58
                        <small>
                          Total Office Bearers
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='m--space-30' />
              </div>
            </div>
          </div>
  			</div>
        <div className="row">
					<div className="col-lg-12">
						<div className="m-portlet m-portlet--tab">
							<div className="m-portlet__head">
								<div className="m-portlet__head-caption">
									<div className="m-portlet__head-title">
										<span className="m-portlet__head-icon m--hide">
											<i className="la la-gear"></i>
										</span>
                    <h3 className="m-portlet__head-text">
											Societies vs Events
										</h3>
									</div>
								</div>
							</div>
							<div className="m-portlet__body">
								<div id="m_morris_1" style={{height: '500px'}}></div>
							</div>
						</div>
					</div>
				</div>
     </div>
    );
  }
}

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
  },
    dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AdministratorDashboard)
