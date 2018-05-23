import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './sub.app.js';
import Login from './containers/login/login';
import Dashboard from './containers/dashboard/dashboard';
import ForgotPassword from './containers/login/forgotPassword';
import University from './containers/university/university';
import AddUniversity from './containers/university/adduniversity';
import auth from './utility/auth.service';

function requireAuth (nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function redirectAuthUsers (nextState, replace) {
  if (auth.loggedIn()) {
    // if (auth.getNext() === 'addPages') {
    //   auth.removeNext()
    //   return replace({
    //     pathname: '/addPages',
    //     state: { nextPathname: nextState.location.pathname }
    //   })
    // }
    replace({
      pathname: '/dashboard',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const routes = (
     <Route path="/" component={App}>
        <IndexRoute component={Login} onEnter={redirectAuthUsers} />
        <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/universities" component={University} onEnter={requireAuth} />
        <Route path="/addUniversity" component={AddUniversity} onEnter={requireAuth} />
     </Route>
);

export default routes;
