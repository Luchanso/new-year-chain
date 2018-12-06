import React, { Fragment } from 'react';
import styled from 'styled-components';
// import ExchangeRates from 'components/ExchangeRates';

import background from './background.jpg';

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: url(${background}) white;
  background-size: cover;
  background-position: center;
`;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Root = styled.div`
  background: #6441a5;
  background: -webkit-linear-gradient(to right, #6441a5, #2a0845);
  background: linear-gradient(to right, #6441a5, #2a0845);
  display: flex;
  background-color: white;
  min-width: 100vw;
  min-height: 96vh;
`;

const Main = () => (
  <Fragment>
    <Root>{/* <ExchangeRates /> */}</Root>
    <Header>
      <Mask />
    </Header>
  </Fragment>
);

export default Main;
