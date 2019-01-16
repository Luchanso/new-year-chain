import React from 'react';
import HashLink from 'components/HashLink';
import {
  Plate, Title, Body, Footer,
} from './Style';

const Card = ({ hash, date, text }) => (
  <Plate>
    <Title>
      <HashLink hash={hash} />
    </Title>
    <Body>{text}</Body>
    <Footer>{new Date(date).toLocaleString()}</Footer>
  </Plate>
);

export default Card;
