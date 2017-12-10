/* eslint-disable */
import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from 'components/Loading';

const AsyncMain = Loadable({
  loader: () => import('pages/Main'),
  loading: Loading
});

const App = () => (
  <Router>
    <Route path="/" exact component={AsyncMain} />
  </Router>
);

export default App;
