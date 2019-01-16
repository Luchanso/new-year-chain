/**
 * Возвращает первые три элемента из массива.
 *
 * @param {*} array Массив.
 * @returns {*} Массив из трёх элементов.
 */
export const getFirstThree = (array) => {
  const maxItems = array.length > 3 ? 3 : array.length;
  const result = [];
  for (let i = 0; i < maxItems; i += 1) {
    result.push(array[i]);
  }

  return result;
};

export default {
  getFirstThree,
};
