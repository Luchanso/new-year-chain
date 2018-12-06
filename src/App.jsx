import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Main from 'pages/Main';
import { client } from './graphql';

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" exact component={Main} />
    </Router>
  </ApolloProvider>
);

export default App;
