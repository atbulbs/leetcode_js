/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function(a, b) {
  return (a + b) / 2 + Math.abs(a - b) / 2
};