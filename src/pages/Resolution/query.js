import gql from 'graphql-tag';

export default hash => gql`
  {
    promise(hash: "${hash}") {
      hash
      text
      date
    }
  }
`;
