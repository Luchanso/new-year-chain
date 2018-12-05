import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
});

export default {
  client,
};
