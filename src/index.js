import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

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


serviceWorker.unregister();
