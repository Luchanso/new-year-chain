/*
 * Хотелось бы сделать ограничение по длине текста которое будет отображаться снизу
 * И вообще лучше сделать отдельную панель внизу инпута.
 */

import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  CardCarouselOffset,
  RemoveBodyScroll,
} from 'components/CardsCarousel/Style';
import CardsCarousel from 'components/CardsCarousel';
import { PLATE_HEIGHT } from 'components/Card/Style';
import BgElement from './Background';

import background from './background.jpg';

// const PALETTE = [
//   '#6441A5',
//   '#BD4199',
//   '#F5597F',
//   '#FF8964',
//   '#FFC158',
//   '#F9F871',
// ];

const PALETTE = {
  primary: {
    shades: ['#6441A5', '#8760C8', '#AA81EC', '#CEA2FF', '#F3C5FF'],
  },
  secondory: {
    shades: ['#FFC158', '#CD952C', '#9D6B00', '#6E4400', '#472000'],
  },
};

const Header = styled.div`
  background: center / cover no-repeat url(${background}) white;
  display: flex;
  height: 100vh;
  width: 100%;
`;

const Root = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #6441a5;
  background: linear-gradient(
    to right top,
    #6441a5,
    #7550b6,
    #8760c8,
    #9870da,
    #aa81ec
  );
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
  padding-right: 8%;
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  background: ${PALETTE.secondory.shades[0]};
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
    background: ${PALETTE.secondory.shades[1]};
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
    opacity 0.9;
  }
`;

const moveAnimation = keyframes`
  from {
    transform: translate(0, -1px);
  }

  to {
    transform: translate(0, 3px);
  }
`;

const ShowMore = styled.span`
  user-select: none;
  color: rgba(255, 255, 255, 0.9);
  position: absolute;
  bottom: 16px;
  right: 50%;
  cursor: pointer;

  animation: ${flashAnimation} 4s cubic-bezier(0.4, 0, 1, 1) infinite alternate,
    ${moveAnimation} 2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
`;

const MessageBlock = styled.div`
  box-shadow: 0px 2px 10px 0px #00000054;
  display: flex;
  position: relative;
  width: 100%;
`;

const Layout = styled.div`
  position: absolute;
  top: calc(50% - ${PLATE_HEIGHT / 2}px);
  right: 0;
`;

const cards = [
  {
    hash: '216315e',
    text:
      'Обещаю начать ходить в спорт зал, записаться на курсы английского языка и по чаще навещать родителей.',
    date: new Date('05/01/2019, 23:56:01'),
  },
  { hash: '7075ef7', text: '', date: new Date('05/01/2019, 23:56:22') },
  { hash: '5622edb', text: '', date: new Date('05/01/2019, 23:56:41') },
  {
    hash: '23b8bd2',
    text:
      'Купить дочке рыжую собаку, найти новою работу, не есть после 8 часов...',
    date: new Date('05/01/2019, 23:56:04'),
  },
  { hash: '5889f4e', text: '', date: new Date('05/01/2019, 23:56:52') },
];

const Main = () => (
  <Fragment>
    <Root>
      {/* <BgElement /> */}
      <LeftColumn data-name="LeftColumn">
        <AlignAction>
          <Description>
            Отправь новогоднее обещание в
            {' '}
            <b>Blockchain!</b>
          </Description>
          <MessageBlock>
            <MessageBox defaultValue="В 2019 году обещаю " />
            <TextLength>35 / 512</TextLength>
            <Send>➤</Send>
          </MessageBlock>
        </AlignAction>
      </LeftColumn>
      <RightColumn>
        <Layout>
          <CardCarouselOffset>
            <RemoveBodyScroll />
            <CardsCarousel cards={cards} />
          </CardCarouselOffset>
        </Layout>
      </RightColumn>
      {/* Должно скролить на следующий экран */}
      <ShowMore>↓ ещё ↓</ShowMore>
    </Root>
    <Header />
  </Fragment>
);

export default Main;
