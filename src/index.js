/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Root = styled.div`
  body:not(&) {
    margin: 0;
  }
`;

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root'),
);
registerServiceWorker();
