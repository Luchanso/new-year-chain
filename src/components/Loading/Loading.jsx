import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Loading = () => (
  <Container>
    <CircularProgress />
  </Container>
);

export default withStyles()(Loading);
