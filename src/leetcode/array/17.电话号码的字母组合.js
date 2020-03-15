// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母

// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (str) {
      if (str === '') {
      return []
    }
    if (!/[1-9]+/.test(str)) {
      return
    }
    const map = [ '', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz' ]
    if (str.length === 1) {
      return map[str]
    }
  let num = str.split('')
  let code = []
  num.forEach((item) => {
    if (map[item]) {
      code.push(map[item])
    }
  })
  let comb = (arr) => {
    let temp = []
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, temp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return temp
    }
    console.warn(arr[0])
    return arr[0]
  }
  return comb(code)

}


// var letterCombinations = function (digits) {
//     console.warn('digits', digits)
//     if (digits === '') {
//       return []
//     }
//     if (!/[1-9]+/.test(digits)) {
//       return
//     }
//     const map = [ '', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz' ]
//     if (digits.length === 1) {
//       return map[digits]
//     }
//     const inputArr = digits.split('')
//     let arr = []
//     inputArr.forEach((item) => {
//       if (map[item]) {
//         arr.push(map[item]) // ['abc', 'def', 'ghi]
//       }
//     })
//     return function count (arr) {
//       let res = []
//       if (arr.length < 2) {
//         return
//       }
//       if (arr.length > 2) {
//         const newArr0 = count([arr[0], arr[1]])
//         arr.splice(0, 2, newArr0)
//         count(arr)
//       } else {
//         console.warn('arr[0]', arr[0])
//         for (let i = 0; i < arr[0].length; i++) {
//           for (let j = 0; j < arr[1].length; j++) {
//             let item = `${arr[0][i]}${arr[1][j]}`
//             res.push(item)
//           }
//         }
//       }
//       console.warn('res', res)
//       return res
//     }(arr)
// };

letterCombinations('2345')