import styled from 'styled-components';

export const PLATE_HEIGHT = 416;
export const PLATE_WIDTH = 384;

export const Plate = styled.div`
  width: ${PLATE_WIDTH}px;
  height: ${PLATE_HEIGHT}px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  background: linear-gradient(
    to bottom left,
    #ab8de1 0%,
    #8867c6 33.15%,
    #7052a8 61.88%,
    #6441a5 100%
  );
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: 28px;

  a {
    color: white;
  }
`;

export const Body = styled.div`
  margin-top: 16px;
  line-height: 1.2;
  flex-grow: 1;
`;

export const Footer = styled.div``;
