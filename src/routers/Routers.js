import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route,
         Switch
       } from 'react-router-dom';

import Users from '../pages/user/Users';
import Profile from '../pages/user/Profile';
import NotFound from '../pages/notFound/NotFound';

class Routers extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/user/:nickname' component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routers;
