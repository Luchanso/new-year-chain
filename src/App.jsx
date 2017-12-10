import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';

import loading from 'components/Loading';

const AsyncMain = Loadable({
  loader: () =>
    new Promise(res => setTimeout(() => res(import('pages/Main')), 500)),
  loading
});

const App = () => (
  <Router>
    <Route path="/" exact component={AsyncMain} />
  </Router>
);

export default App;
