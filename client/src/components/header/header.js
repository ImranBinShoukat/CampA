/**
 * Created by imran on 20/02/2018.
 */

import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import auth from '../../utility/auth.service'

class Header extends React.Component {
  render() {
    return (
      <header className='m-grid__item    m-header'  data-minimize-offset='200' data-minimize-mobile-offset='200' >
        <div className='m-container m-container--fluid m-container--full-height'>
          <div className='m-stack m-stack--ver m-stack--desktop'>
            <div className='m-stack__item m-brand  m-brand--skin-dark'>
              <div className='m-stack m-stack--ver m-stack--general'>
                <div className='m-stack__item m-stack__item--middle m-brand__logo'>
                  <h4 style={{color: '#f0f1f4'}}>CampA</h4>
								</div>
                <div className='m-stack__item m-stack__item--middle m-brand__tools'>
                  <a id='m_aside_left_minimize_toggle' className='m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block'>
                    <span />
                  </a>
                  <a id='m_aside_left_offcanvas_toggle' className='m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block'>
                    <span />
                  </a>
									<a id='m_aside_header_menu_mobile_toggle'className='m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block'>
										<span />
									</a>
									<a id='m_aside_header_topbar_mobile_toggle' className='m-brand__icon m--visible-tablet-and-mobile-inline-block'>
										<i className='flaticon-more' />
									</a>
                </div>
              </div>
            </div>
            <div style={{boxShadow: '0 1px 15px 1px rgba(113,106,202,.1)'}} className='m-stack__item m-stack__item--fluid m-header-head' id='m_header_nav'>
              <button className='m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn'>
								<i className='la la-close' />
							</button>
              <div id='m_header_topbar' className='m-topbar  m-stack m-stack--ver m-stack--general'>
                <div className='m-stack__item m-topbar__nav-wrapper'>
                  <ul className='m-topbar__nav m-nav m-nav--inline'>
                    <li className='m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width' data-dropdown-toggle='click' data-dropdown-persistent='true'>
                      <a href='' className='m-nav__link m-dropdown__toggle' id='m_topbar_notification_icon'>
                        <span className='m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger' />
												<span className='m-nav__link-icon'>
													<i className='flaticon-music-2' />
												</span>
											</a>
											<div className='m-dropdown__wrapper'>
                        <span className='m-dropdown__arrow m-dropdown__arrow--center' />
												<div className='m-dropdown__inner'>
                          <div className='m-dropdown__header m--align-center' style={{background: 'url(assets/app/media/img/misc/notification_bg.jpg)', backgroundSize: 'cover'}} >
                            <span className='m-dropdown__header-title'>
															9 New
														</span>
														<span className='m-dropdown__header-subtitle'>
															User Notifications
														</span>
													</div>
													<div className='m-dropdown__body'>
														<div className='m-dropdown__content'>
															<div className='tab-content'>
																<div className='tab-pane active' id='topbar_notifications_notifications' role='tabpanel'>
																	<div className='m-scrollable' data-scrollable='true' data-max-height='250' data-mobile-max-height='200'>
																		<div className='m-list-timeline m-list-timeline--skin-light'>
																			<div className='m-list-timeline__items'>
																				<div className='m-list-timeline__item'>
																					<span className='m-list-timeline__badge -m-list-timeline__badge--state-success' />
																					<span className='m-list-timeline__text'>
																						12 new users registered
																					</span>
																					<span className='m-list-timeline__time'>
																						Just now
																					</span>
																				</div>
																				<div className='m-list-timeline__item'>
																					<span className='m-list-timeline__badge' />
																					<span className='m-list-timeline__text'>
																						System shutdown
																						<span className='m-badge m-badge--success m-badge--wide'>
																							pending
																						</span>
																					</span>
																					<span className='m-list-timeline__time'>
																						14 mins
																					</span>
																				</div>
																				<div className='m-list-timeline__item'>
																					<span className='m-list-timeline__badge' />
																					<span className='m-list-timeline__text'>
																						New invoice received
																					</span>
																					<span className='m-list-timeline__time'>
																						20 mins
																					</span>
																				</div>
																				<div className='m-list-timeline__item'>
																					<span className='m-list-timeline__badge' />
																					<span className='m-list-timeline__text'>
																						DB overloaded 80%
																						<span className='m-badge m-badge--info m-badge--wide'>
																							settled
																						</span>
																					</span>
																					<span className='m-list-timeline__time'>
																						1 hr
																					</span>
																				</div>
																				<div className='m-list-timeline__item'>
																					<span className='m-list-timeline__badge' />
																					<span className='m-list-timeline__text'>
																						System error -
																						<a href='' className='m-link'>
																							Check
																						</a>
																					</span>
																					<span className='m-list-timeline__time'>
																						2 hrs
																					</span>
																				</div>
																				<div className='m-list-timeline__item m-list-timeline__item--read'>
																					<span className='m-list-timeline__badge' />
																					<span href='' className='m-list-timeline__text'>
																						New order received
																						<span className='m-badge m-badge--danger m-badge--wide'>
																							urgent
																						</span>
																					</span>
																					<span className='m-list-timeline__time'>
																						7 hrs
																					</span>
																				</div>
																				<div className='m-list-timeline__item m-list-timeline__item--read'>
																					<span className='m-list-timeline__badge' />
																					<span className='m-list-timeline__text'>
																						Production server down
																					</span>
																					<span className='m-list-timeline__time'>
																						3 hrs
																					</span>
																				</div>
																				<div className='m-list-timeline__item'>
																					<span className='m-list-timeline__badge' />
																					<span className='m-list-timeline__text'>
																						Production server up
																					</span>
																					<span className='m-list-timeline__time'>
																						5 hrs
																					</span>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className='m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light' data-dropdown-toggle='click'>
											<a href='' className='m-nav__link m-dropdown__toggle'>
                        <span className='m-nav__link-text'>
                          Imran Shoukat
                        </span>
												<span className='m-topbar__userpic'>
													<img src='assets/app/media/img/users/user4.jpg' className='m--img-rounded m--marginless m--img-centered' alt='' />
												</span>
											</a>
											<div className='m-dropdown__wrapper'>
												<span className='m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust' />
												<div className='m-dropdown__inner'>
													<div className='m-dropdown__header m--align-center' style={{background: 'url(assets/app/media/img/misc/user_profile_bg.jpg)', backgroundSize: 'cover'}} >
														<div className='m-card-user m-card-user--skin-dark'>
															<div className='m-card-user__pic'>
																<img src='assets/app/media/img/users/user4.jpg' className='m--img-rounded m--marginless' alt='' />
															</div>
															<div className='m-card-user__details'>
																<span className='m-card-user__name m--font-weight-500'>
																	Imran Shoukat
																</span>
																<a href='' className='m-card-user__email m--font-weight-300 m-link'>
																	imran.shoukat@khi.iba.edu.pk
																</a>
															</div>
														</div>
													</div>
													<div className='m-dropdown__body'>
														<div className='m-dropdown__content'>
															<ul className='m-nav m-nav--skin-light'>
																<li className='m-nav__section m--hide'>
																	<span className='m-nav__section-text'>
																		Section
																	</span>
																</li>
																<li className='m-nav__item'>
																	<a href='' className='m-nav__link'>
																		<i className='m-nav__link-icon flaticon-profile-1' />
																		<span className='m-nav__link-title'>
																			<span className='m-nav__link-wrap'>
																				<span className='m-nav__link-text'>
																					My Profile
																				</span>
																			</span>
																		</span>
																	</a>
																</li>
																<li className='m-nav__separator m-nav__separator--fit' />
																<li className='m-nav__item'>
																	<a href='' className='m-nav__link'>
																		<i className='m-nav__link-icon flaticon-info' />
																		<span className='m-nav__link-text'>
																			FAQ
																		</span>
																	</a>
																</li>
																<li className='m-nav__item'>
																	<a href='' className='m-nav__link'>
																		<i className='m-nav__link-icon flaticon-lifebuoy' />
																		<span className='m-nav__link-text'>
																			Support
																		</span>
																	</a>
																</li>
																<li className='m-nav__separator m-nav__separator--fit' />
																<li className='m-nav__item'>
																	<a onClick={() => { console.log('logout called'); auth.logout(); }} href='/' className='btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder'>
																		Logout
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
    );
  }
}

function mapStateToProps (state) {
  return {
    userdetails: (state.loginInfo.userdetails)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
  },
    dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
