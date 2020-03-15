/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let leftPointer = 0
  let rightPointer = s.length - 1
  while (leftPointer < rightPointer) {
    let leftTemp = s[rightPointer]
    s[rightPointer--] = s[leftPointer]
    s[leftPointer++] = leftTemp
  }
};

console.log(reverseString(["h","e","l","l","o"]))