import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { PLATE_HEIGHT } from 'components/Card/Style';
import { CardCarouselOffset, RemoveBodyScroll } from './Style';
import CardsCarousel from '.';

const Layout = styled.div`
  position: absolute;
  top: calc(50% - ${PLATE_HEIGHT / 2}px);
  right: 0;
`;

const cards = [
  { hash: '216315e', text: 'Обещаю начать ходить в спорт зал, записаться на курсы английского языка и по чаще навещать родителей.', date: new Date("05/01/2019, 23:56:01") },
  { hash: '7075ef7', text: '', date: new Date("05/01/2019, 23:56:22") },
  { hash: '5622edb', text: '', date: new Date("05/01/2019, 23:56:41") },
  { hash: '23b8bd2', text: 'Купить дочке рыжую собаку, найти новою работу, не есть после 8 часов...', date: new Date("05/01/2019, 23:56:04") },
  { hash: '5889f4e', text: '', date: new Date("05/01/2019, 23:56:52") },
];

storiesOf('CardsCarousel', module)
  .add('Default state', () => <CardsCarousel cards={cards} />)
  .add('With Layout', () => (
    <Layout>
      <CardCarouselOffset>
        <RemoveBodyScroll />
        <CardsCarousel cards={cards} />
      </CardCarouselOffset>
    </Layout>
  ));
