/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  function helper (digit) {
    if (digits[digit] === 9) {
      digits[digit] = 0
      helper(digit - 1)
    } else if (digits[digit] === undefined) {
      digits.unshift(1)
    } else {
      digits[digit]++
    }
  }
  const len = digits.length
  helper(len - 1)
  return digits
};