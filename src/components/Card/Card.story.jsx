import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module).add('Default state', () => (
  <Card
    hash="a12f3ed"
    date={new Date()}
    text="Обещаю в новом году начать ходить на фитнес и выучить английский"
  />
));
