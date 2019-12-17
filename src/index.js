import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const PrivateRoute = ({ component: Component, child: Child, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? (
        <Component {...props} child={Child} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

fetchIntercept.register({
  response: function(response) {
    if (response.status === 401) {
      window.location.href = "/login";
    } else if (response.status === 403) {
      window.location.href = "/forbidden";
    }
    return response;
  }
});

ReactDOM.render(
 	<Router>
    <Switch>
    	<Route path="/login" component={ LoginPage } />
    	<PrivateRoute 
    </Switch>
  </Router>, 
  document.getElementById("root")
)    	


serviceWorker.unregister();
