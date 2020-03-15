/**
 * @param {string} s
 * @return {boolean}
 */

// 输入: "()[]{}"
// 输出: true

var isValid = function(s) {
  if ((s.length & 1) === 0) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
        stack.push(s[i])
      } else if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
        if (s[i] === ')' && stack.pop() !== '(') {
          return false
        } else if (s[i] === ']' && stack.pop() !== '[') {
          return false
        } else if (s[i] === '}' && stack.pop() !== '{') {
          return false
        }
      }
    }
    return stack.length === 0
  } else {
    return false
  }
};

var isValid = function(s) {
  if ((s.length & 1) === 0) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
        stack.push(s[i])
      } else if (s[i] === ')' && stack.pop() !== '(') {
          return false
      } else if (s[i] === ']' && stack.pop() !== '[') {
          return false
      } else if (s[i] === '}' && stack.pop() !== '{') {
          return false
      }
    }
    return stack.length === 0
  } else {
    return false
  }
};

// console.warn(isValid('()'))
// console.warn(isValid('()[]{}'))