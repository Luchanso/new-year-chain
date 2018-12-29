/*
 * Хотелось бы сделать ограничение по длине текста которое будет отображаться снизу
 * И вообще лучше сделать отдельную панель внизу инпута.
 */

import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

import background from './background.jpg';

const Header = styled.div`
  background: center / cover no-repeat url(${background}) white;
  display: flex;
  height: 100vh;
  width: 100%;
`;

const Root = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  background: #6441a5;
  background: linear-gradient(to right, #6441a5, #2a0845);
  display: flex;
  min-height: 100vh;
`;

const LeftColumn = styled.div`
  width: 50%;
  padding-left: 6%;
  padding-right: 3%;
`;

const RightColumn = styled.div`
  width: 50%;
  padding-right: 6%;
  padding-left: 3%;
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
  border-width: 0;
  padding: 0 12px;
  border-radius: 8px;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  min-height: 165px;
  outline: none;
  overflow-y: hidden;
  padding: 8px;
  resize: none;
  width: 100%;
`;

const Send = styled.button`
  background: #6441a5;
  border-radius: 50%;
  border: none;
  bottom: 4px;
  color: #fff;
  height: 32px;
  width: 32px;
  line-height: 0;
  margin: 0;
  outline: none;
  position: absolute;
  right: 4px;

  :hover {
    cursor: pointer;
    background: #7243c7;
  }
`;

const TextLength = styled.span`
  left: 8px;
  bottom: 8px;
  position: absolute;
  color: #9e9e9e;
  font-size: 12px;
  user-select: none;
`;

const flashAnimation = keyframes`
  from {
    opacity 0.3;
  }

  to {
    opacity 1;
  }
`;

const ShowMore = styled.span`
  user-select: none;
  color: rgba(255, 255, 255, 0.9);
  position: absolute;
  bottom: 16px;
  right: 50%;
  cursor: pointer;

  animation: ${flashAnimation} 3s linear infinite alternate;
`;

const MessageBlock = styled.div`
  box-shadow: 0px 2px 10px 0px #00000054;
  display: flex;
  position: relative;
  width: 100%;
`;

const Main = () => (
  <Fragment>
    <Root>
      <LeftColumn data-name="LeftColumn">
        <AlignAction>
          <Description>
            Отправь новогоднее обещание в
            {' '}
            <b>Blockchain!</b>
          </Description>
          <MessageBlock>
            <MessageBox defaultValue="В 2018 году обещаю" />
            <TextLength>0 / 512</TextLength>
            <Send>➤</Send>
          </MessageBlock>
        </AlignAction>
      </LeftColumn>
      <RightColumn>
        Examples
      </RightColumn>
      {/* Долэно скролить на следуюзий экран */}
      <ShowMore>↓ подробнее ↓</ShowMore>
    </Root>
    <Header />
  </Fragment>
);

export default Main;
