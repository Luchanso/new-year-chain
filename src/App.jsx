/* eslint-disable */
import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';

import loading from 'components/Loading';

const AsyncMain = Loadable({
  loader: () =>
    new Promise(res => setTimeout(() => res(import('pages/Main')), 500)),
  loading: loading
});

// const

const App = () => (
  <Router>
    <Route path="/" exact component={AsyncMain} />
  </Router>
);

export default App;
