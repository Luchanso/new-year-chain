import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import query from './query';

const Root = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin: 32px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 32px;
`;

class Resolution extends React.Component {
  state = {};

  render() {
    const { match } = this.props;
    const { hash } = match.params;

    // TODO: Need refactoring
    return (
      <Query query={query(hash)}>
        {({ loading, error, data: { promise } }) => (
          <Root>
            <Content>
              {!loading && !error && (
                <React.Fragment>
                  <h2>{hash}</h2>
                  <p>{promise.text}</p>
                  <p>{promise.date}</p>
                </React.Fragment>
              )}
              {loading && <p>Loading...</p>}
              {error && (
                <p>
                  error:
                  <code>{error.toString()}</code>
                </p>
              )}
            </Content>
          </Root>
        )}
      </Query>
    );
  }
}

export default Resolution;
