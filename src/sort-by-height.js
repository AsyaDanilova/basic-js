const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Extract the heights (excluding -1)
  const heights = arr.filter(value => value !== -1);

  // Sort the heights
  heights.sort((a, b) => a - b);

  // Create an array to store the result
  const result = [];
  let heightIndex = 0;

  // Iterate through the original array and build the result array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(heights[heightIndex]);
      heightIndex++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};
