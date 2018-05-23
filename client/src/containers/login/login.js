/**
 * Created by imran on 20/02/2018.
 */

import React from 'react';
import { login } from '../../redux/actions/login.actions'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      password: false,
      redirect: true,
      error: false,
      success: false
    }
    this.edit = this.edit.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.notify = this.notify.bind(this)
  }

  onSubmit (event) {
    event.preventDefault()
    var data = {
      username: this.refs.username.value.trim(),
      password: this.refs.password.value.trim()
    }

    this.props.login(data)
  }

  edit () {
    this.setState({error: false})
  }

  notify (message) {
    toast.error(message, {
      position: toast.POSITION.TOP_LEFT
    })
  }

  componentWillReceiveProps (nextprops) {
    if (nextprops.errorMessage) {
      this.setState({error: true})
    }
    if (nextprops.successMessage) {
      this.setState({success: true, error: false})
      this.props.history.push({
        pathname: '/dashboard'
      })
    }
  }

  render() {
    return (
      <div className='m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default'  >
        <ToastContainer />
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
                      Sign In To CampA
                    </h3>
                  </div>
                  <form onSubmit={this.onSubmit} className='m-login__form m-form' action=''>
                    {
                      this.state.error && this.notify(this.props.errorMessage)
                    }
                    <div className='form-group m-form__group'>
                      <input className='form-control m-input' type='text' placeholder='Username/ERP' name='username' required ref='username' onChange={this.edit} autoComplete='off' />
                    </div>
                    <div className='form-group m-form__group'>
                      <input className='form-control m-input m-login__form-input--last' type='password' placeholder='Password' name='password' ref='password' required onChange={this.edit} />
                    </div>
                    <div className='row m-login__form-sub'>
                      <div className='col m--align-right m-login__form-right'>
                        <Link to='/forgotPassword' id='m_login_forget_password' className='m-link'>
                          Forget Password ?
                        </Link>
                      </div>
                    </div>
                    <div className='m-login__form-action'>
                      <button type='submit' id='m_login_signin_submit' className='btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary'>
                        Sign In
                      </button>
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

function mapStateToProps (state) {
  return {
    errorMessage: (state.loginInfo.errorMessage),
    successMessage: (state.loginInfo.successMessage)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    login
  },
    dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
