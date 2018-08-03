import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route,
         Switch,
         Redirect } from 'react-router-dom';

import Users from '../pages/user/Users';
import NotFound from '../pages/notFound/NotFound';

class Routers extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/user' render={() => <Redirect to={'/'} />} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
