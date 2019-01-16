import React from 'react';

const HashLink = ({ hash }) => (
  <a href={`h/${hash}`}>{hash}</a>
);

export default HashLink;
