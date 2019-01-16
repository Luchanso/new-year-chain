import React from 'react';
import Card from 'components/Card';
import { getFirstThree } from 'utils/getFirstThree';
import {
  Carousel, Stack, MainCard, LastCard,
} from './Style';

const CardsCarousel = ({ cards }) => (
  <Carousel>
    <Stack>
      {getFirstThree(cards).map(props => (
        <Card {...props} key={Math.random()} />
      ))}
    </Stack>
    <MainCard>
      <Card {...cards[3]} />
    </MainCard>
    <LastCard>
      <Card {...cards[4]} />
    </LastCard>
    {/*
      Далее хотел доделать здесь две карточки - одна полностью видна,
      другая видна только 12.5% или 25%
    */}
  </Carousel>
);

export default CardsCarousel;
