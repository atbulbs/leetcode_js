// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

// Example 1:

// Input: "Hello"
// Output: "hello"
// Example 2:

// Input: "here"
// Output: "here"
// Example 3:

// Input: "LOVELY"
// Output: "lovely"

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let res = ''
  Array.prototype.forEach.call(new String(str), (char) => {	
    const num = char.charCodeAt()
    const _char = (num >= 65 && num <= 90) ? String.fromCharCode(num + 32) : char
    res += _char
  })
  return res
}