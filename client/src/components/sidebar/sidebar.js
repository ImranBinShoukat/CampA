/**
 * Created by imran on 20/02/2018.
 */

import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Sidebar extends React.Component {
  render() {
    return (
			<div>
        <button className='m-aside-left-close  m-aside-left-close--skin-dark' id='m_aside_left_close_btn'>
          <i className='la la-close' />
        </button>
        <div style={{height: '200%'}} id='m_aside_left' className='m-grid__item	m-aside-left  m-aside-left--skin-dark'>
          <div id='m_ver_menu' className='m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark' data-menu-vertical='true' data-menu-scrollable='false' data-menu-dropdown-timeout='500' >
            <ul className='m-menu__nav  m-menu__nav--dropdown-submenu-arrow' >
              <li className='m-menu__item  m-menu__item' aria-haspopup='true' >
                <a className='m-menu__link' >
                  <i className='m-menu__link-icon la la-dashboard' />
                  <span className='m-menu__link-title'>
                    <span className='m-menu__link-wrap'>
                      <span className='m-menu__link-text'>
                        Dashboard
                      </span>
                    </span>
                  </span>
                </a>
              </li>
              {
                this.props.userdetails && this.props.userdetails.role === 'super user' &&
                <li className='m-menu__item  m-menu__item' aria-haspopup='true' >
                  <Link to='/universities' className='m-menu__link' >
                    <i className='m-menu__link-icon la la-university' />
                    <span className='m-menu__link-title'>
                      <span className='m-menu__link-wrap'>
                        <span className='m-menu__link-text'>
                          Universities
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              }
              {
                this.props.userdetails && this.props.userdetails.role === 'super user' &&
                <li className='m-menu__item  m-menu__item' aria-haspopup='true' >
                  <a className='m-menu__link' >
                    <i className='m-menu__link-icon la la-users' />
                    <span className='m-menu__link-title'>
                      <span className='m-menu__link-wrap'>
                        <span className='m-menu__link-text'>
                          Users
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
              }
              <li className='m-menu__item  m-menu__item' aria-haspopup='true' >
                <a className='m-menu__link' >
                  <i className='m-menu__link-icon la la-cog' />
                  <span className='m-menu__link-title'>
                    <span className='m-menu__link-wrap'>
                      <span className='m-menu__link-text'>
                        Settings
                      </span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
			</div>
    );
  }
}

function mapStateToProps (state) {
  return {
    userdetails: (state.basicInfo.userdetails)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
  },
    dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
