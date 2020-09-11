import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../pages/Login';

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Login} />
    </>
  )
}

export default Routes;
