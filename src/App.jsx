import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Main from 'pages/Main';
import Resolution from 'pages/Resolution';
import { client } from './graphql';

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <React.Fragment>
        <Route path="/" exact component={Main} />
        <Route path="/h/:hash" component={Resolution} />
      </React.Fragment>
    </Router>
  </ApolloProvider>
);

export default App;
