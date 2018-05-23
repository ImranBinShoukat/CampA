/**
 * Created by imran on 20/02/2018.
 */

import React from 'react';
import { Link } from 'react-router'

class ForgotPassword extends React.Component {
  render() {
    return (
      <div className='m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default'  >
        <div className='m-grid m-grid--hor m-grid--root m-page'>
          <div className='m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--singin m-login--2 m-login-2--skin-2" id="m_login" style="background-image: url(../../../assets/app/media/img//bg/bg-3.jpg);'>
            <div className='m-grid__item m-grid__item--fluid	m-login__wrapper'>
              <div className='m-login__container'>
                <div className='m-login__logo'>
                 <img style={{width: '200px'}} src="../../../assets/app/media/img//logos/logo.png" />
                </div>
                <div className='m-login__signin'>
                  <div className='m-login__head'>
                    <h3 className='m-login__title'>
                      Forgotten Password ?
                    </h3>
                    <div className='m-login__desc'>
                      Enter your email to reset your password:
                    </div>
                  </div>
                  <form className='m-login__form m-form' action=''>
                    <div className='form-group m-form__group'>
                      <input className='form-control m-input' type='text' placeholder='Email' name='email' id='m_email' autoComplete='off' />
                    </div>
                    <div className='m-login__form-action'>
                      <button id='m_login_forget_password_submit' className='btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air  m-login__btn m-login__btn--primaryr'>
                        Request
                      </button>
                      &nbsp;&nbsp;
                      <Link to='/' id='m_login_forget_password_cancel' className='btn btn-outline-focus m-btn m-btn--pill m-btn--custom m-login__btn'>
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgotPassword
