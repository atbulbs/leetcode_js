// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s === '') {	
      return true
    }
    if (s.length <= 1) {	
      return false
    }
    if (s[0] === ')' || s[0] === ']' || s[0] === '}') {	
      return false
    }
    const map = {
      '}': '{',
      ']': '[',
      ')': '('
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
      const el = s[i]
      if (el !== ')' && el !== ']' && el !== '}') {	
        stack.push(el)
      } else {
        if (stack.pop() !== map[el]) {
          return false	
        }
      }
    }
    return stack.length === 0
}

const test = '()[]{[]}'

console.log(isValid(test))