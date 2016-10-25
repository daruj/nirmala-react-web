import React                                        from 'react';
import { Router, Route, Redirect, browserHistory }  from 'react-router';
import ApplicationContainer                         from 'app/views/shared/application-container';
import SecuredContentContainer                      from 'app/views/shared/secured-content-container';
import LoginContainer                               from 'app/views/authentication-module/login-container';
import HomeContainer                                from 'app/views/home-module/home-container';


export default function renderRoutes(store) {
  return (
    <Router history={browserHistory}>
      <Redirect from="/" to="/home" />
      <Route path="/" component={ApplicationContainer}>
        <Route component={SecuredContentContainer} >
          <Route path="home" component={HomeContainer} />
        </Route>
        <Route path="login" component={LoginContainer} />
      </Route>
    </Router>
  );
}
