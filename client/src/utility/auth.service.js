/**
 * Created by imran on 25/02/2018.
 */
import cookie from 'react-cookie';

// If login was successful, set the token in local storage
// cookie.save('token', user.token.token, {path: '/'});
// printlogs('log', cookie.load('token'));
// browserHistory.push('/dashboard')

const auth = {
  getToken() {
    var token = cookie.load('token');
    return token
  },

  putCookie (val) {
    console.log('putting cookie')
    cookie.save('token', val)
  },

  putUserId (val) {
    cookie.save('userid', val)
  },

  removeNext () {
    cookie.remove('next')
  },

  logout (cb) {
    cookie.remove('userid')
    cookie.remove('token', { path: '/' })
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn () {
    const token = cookie.load('token')
    // first check from server if this token is expired or is still valid
    return !(typeof token === 'undefined' || token === '')
  },

  onChange () {}
};

export default auth;
