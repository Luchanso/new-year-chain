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
  min-height: 96vh;
  padding: 0 64px;
`;

const Column = styled.div`
  width: 50%;
`;

const AlignAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100% - 64px);
`;

const Description = styled.h1`
  font-size: 64px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  color: #fff;
  font-weight: 200;
`;

const MessageBox = styled.textarea`
  width: 100%;
  border-radius: 8px;
  border-color: white;
  resize: none;
  padding: 8px;
  outline: none;
  overflow-y: hidden;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  box-sizing: border-box;
`;

const Main = () => (
  <Fragment>
    <Root>
      <Column>
        <AlignAction>
          <Description>
            Отправь новогоднее обещание в
            {' '}
            <b>Blockchain!</b>
          </Description>
          <MessageBox>В 2018 году обещаю </MessageBox>
        </AlignAction>
      </Column>
      <Column />
      {/* <ExchangeRates /> */}
    </Root>
    <Header>
      <Mask />
    </Header>
  </Fragment>
);

export default Main;
