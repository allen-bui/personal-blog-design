import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Header from './header.jsx';
import Registration from './registration.jsx';
import Login from './login.jsx';
import Home from './home.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: '',
    };
    this.getLoggedInUser = this.getLoggedInUser.bind(this);
  }

  getLoggedInUser(username) {
    this.setState({
      loggedInUser: username,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/register' component={Registration} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
