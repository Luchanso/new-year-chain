import React, { Fragment } from 'react';
import styled from 'styled-components';

import background from './background.jpg';

const Header = styled.div`
  background-position: center;
  background-size: cover;
  background: url(${background}) white;
  display: flex;
  height: 100vh;
  width: 100%;
`;

const Mask = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Root = styled.div`
  background: #6441a5;
  background: linear-gradient(to right, #6441a5, #2a0845);
  display: flex;
  min-height: 96vh;
  padding: 0 64px;
`;

const Column = styled.div`
  width: 50%;
`;

const AlignAction = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100% - 64px);
`;

const Description = styled.h1`
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 64px;
  font-weight: 200;
`;

const MessageBox = styled.textarea`
  border-bottom-right-radius: 16px;
  border-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  min-height: 165px;
  outline: none;
  overflow-y: hidden;
  padding: 8px 40px 8px 8px;
  resize: none;
  width: 100%;
`;

const Send = styled.button`
  background: #6441a5;
  border-bottom-right-radius: 8px;
  border: none;
  bottom: 0;
  color: #fff;
  height: 32px;
  margin: 0;
  outline: none;
  position: absolute;
  right: 0;
`;

const MessageBlock = styled.div`
  box-shadow: 0px 2px 10px 0px #00000054;
  display: flex;
  position: relative;
  width: 100%;
`;

// ХОЧУ НАРИСОВАТЬ ИКОНКУ ОТПРАВКИ ВНУТРИ ИНПУТА

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
          <MessageBlock>
            <MessageBox>В 2018 году обещаю </MessageBox>
            <Send>Отправить ➤</Send>
          </MessageBlock>
        </AlignAction>
      </Column>
      <Column />
    </Root>
    <Header>
      <Mask />
    </Header>
  </Fragment>
);

export default Main;
