import styled, { createGlobalStyle } from 'styled-components';
import { Plate, PLATE_HEIGHT, PLATE_WIDTH } from 'components/Card/Style';

export const RESIZE_STEP = 32;

/**
 * Функция которая возвращает транформацию уменьшения для Plate элемента.
 *
 * @param {Number} step Шаг трансформации.
 * @return {String}
 */
const getPlateScale = (step) => {
  const scaleX = 1 - (RESIZE_STEP * step) / PLATE_WIDTH;
  const scaleY = 1 - (RESIZE_STEP * step) / PLATE_HEIGHT;

  return `scale(${scaleX}, ${scaleY})`;
};

/**
 * Возвращает отступ слева для Plate элемента.
 *
 * @param {Number} step Шаг трансформации
 * @return {String}
 */
const getPlateMarginLeft = step => `${(-step * RESIZE_STEP) / 2}px`;

export const Carousel = styled.div`
  display: flex;
`;

// prettier-ignore
export const Stack = styled.div`
  padding-left: ${RESIZE_STEP}px;
  width: ${PLATE_WIDTH}px;
  flex-shrink: 0;

  ${Plate} {
    position: absolute;
    transform-origin: left center;
  }

  ${Plate}:nth-child(1) {
    z-index: 3;
  }

  ${Plate}:nth-child(2) {
    z-index: 2;
    transform: ${getPlateScale(1)};
    margin-left: ${getPlateMarginLeft(1)};
    opacity: 0.66;
  }

  ${Plate}:nth-child(3) {
    z-index: 1;
    transform: ${getPlateScale(2)};
    margin-left: ${getPlateMarginLeft(2)};
    opacity: 0.33;
  }
`;

export const MainCard = styled.div`
  margin-left: 16px;
`;

export const LastCard = styled.div`
  margin-left: 16px;
`;

export const CardCarouselOffset = styled.div`
  position: absolute;
  right: -${0.9 * PLATE_WIDTH}px;
`;

export const RemoveBodyScroll = createGlobalStyle`
  body {
    overflow-x: hidden;
  }
`;
