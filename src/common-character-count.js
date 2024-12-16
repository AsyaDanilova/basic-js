const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let firstArray = Array.from(s1);
  let secondArray = Array.from(s2);

  let commonCharacters = 0;

  for (let i = 0; i < firstArray.length; i += 1) {
    let el = firstArray[i];
    let index = secondArray.indexOf(el);
    if (index !== -1) {
      commonCharacters++;
      secondArray.splice(index, 1); // Remove the matching character from secondArray
    }
  }

  return commonCharacters;
}

module.exports = {
  getCommonCharacterCount
};
