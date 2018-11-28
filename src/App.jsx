import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

import loading from 'components/Loading';

const AsyncMain = Loadable({
  loader: () => new Promise(res => setTimeout(() => res(import('pages/Main')), 500)),
  loading,
});

const App = () => (
  <Provider>
    <Router>
      <Route path="/" exact component={AsyncMain} />
    </Router>
  </Provider>
);

export default App;
