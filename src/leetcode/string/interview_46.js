/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
  num *= 1
  const memory = {}
  function helper (num) {
    // console.warn('helper', num)
    if (memory[num] !== undefined) {
      return memory[num]
    }
    numStrArr = (num + '').split('')
    // console.warn('numStrArr', numStrArr)
    let res
    if (numStrArr.length === 0) {
      res = 1
    } else if (numStrArr.length === 1) {
      res = 1
    } else if (numStrArr.length === 2) {
      if (num <= 25) {
        res = 2
      } else {
        res = 1
      }
    } else {
      res =  helper(numStrArr.slice(1).join('') * 1)
      if (numStrArr.slice(0, 2).join('') * 1 <= 25 && numStrArr.slice(0, 2).join('') * 1 >= 10) {
        // console.warn("numStrArr.slice(0, 2).join('') * 1", numStrArr.slice(0, 2).join('') * 1)
        // console.warn("numStrArr.slice(2).join('') * 1", numStrArr.slice(2).join('') * 1)
        // console.warn('numStrArr.slice(2)', numStrArr.slice(2))
        res += helper(numStrArr.slice(2).join('') * 1)
        // if (numStrArr.slice(2).length) {
        //   // console.warn("helper(numStrArr.slice(2).join('') * 1)", helper(numStrArr.slice(2).join('') * 1))
        // }
      }
    }
    if (memory[num] === undefined) {
      memory[num] = res
    }
    return res
  }
  return helper(num)

};

console.warn(translateNum(220))
console.warn(translateNum(624)) // 2
console.warn(translateNum(506))


