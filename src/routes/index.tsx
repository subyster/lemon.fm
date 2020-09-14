import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </>
  )
}

export default Routes;
