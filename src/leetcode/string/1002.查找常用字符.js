// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

// 你可以按任意顺序返回答案。

// 示例 1：

// 输入：["bella","label","roller"]
// 输出：["e","l","l"]
// 示例 2：

// 输入：["cool","lock","cook"]
// 输出：["c","o"]
 
// 提示：

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] 是小写字母

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let memory = []
  for (let i = A.length - 1; i >= 0; i--) {
    let _memory = {}
    for (let j = A[i].length - 1; j >= 0; j--) {
      for (let k = alphabet.length - 1; k >= 0; k--) {
        if (alphabet[k] === A[i][j]) {
          if (_memory[alphabet[k]]) {
            _memory[alphabet[k]]++
          } else {
            _memory[alphabet[k]] = 1
          }
        }
      }
    }
    memory.push(_memory)
  }
  let count = {}
  let blackList = {}
  for (let l = memory.length - 1; l >= 0; l--) {
    for (let m = alphabet.length - 1; m >= 0; m--) {
      if (memory[l][alphabet[m]]) {
        if (count[alphabet[m]]) {
          count[alphabet[m]]++
        } else {
          count[alphabet[m]] = 1
        }
      } else {
        blackList[alphabet[m]] = true
      }
    }
  }
  let str = []
  for (let key in count) {
    if (!blackList[key]) {
      str.push(key)
    }
  }
  let res = ''
  str.forEach((item) => {
    let strCount = []
    memory.forEach((_item) => {
      for (let _key in _item) {
        if (_key === item) {
          strCount.push(_item[_key])
        }
      }
    })
    let min = Math.min(...strCount)
    res += item.repeat(min)
  })
  return res.split('')
};

commonChars(["bella","label","roller"])