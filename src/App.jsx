import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Loadable from 'react-loadable';
import loading from 'components/Loading';
import { client } from './graphql';

const AsyncMain = Loadable({
  loader: () => new Promise(res => setTimeout(() => res(import('pages/Main')), 500)),
  loading,
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" exact component={AsyncMain} />
    </Router>
  </ApolloProvider>
);

export default App;
