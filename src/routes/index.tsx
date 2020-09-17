import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Login} />
      <Route path="/lastfm/:username" component={Dashboard} />
    </>
  )
}

export default Routes;
