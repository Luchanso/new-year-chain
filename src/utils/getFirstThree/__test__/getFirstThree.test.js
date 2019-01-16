import { getFirstThree } from '../index';

describe('should return first three element', () => {
  it('should return first three elements', () => {
    const data = [1, 2, 3];
    const result = getFirstThree(data);

    expect(result).toEqual(data);
  });

  it('should return first two if array size equal 2', () => {
    const data = [1, 2];
    const result = getFirstThree(data);

    expect(result).toEqual(data);
  });

  it('should return first three elements if items in array more than 3', () => {
    const data = [1, 2, 3, 4];
    const actual = [1, 2, 3];
    const result = getFirstThree(data);

    expect(result).toEqual(actual);
  });
});
