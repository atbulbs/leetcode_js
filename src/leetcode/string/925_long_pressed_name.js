/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let namePointer = 0
  let typedPointer = 0
  while (namePointer < name.length) {
    const curStr = name[namePointer]
    let nameCount = 0
    while (name[namePointer] === curStr) {
      nameCount++
      namePointer++
    }
    let typedCount = 0
    while (typed[typedPointer] === curStr) {
      typedCount++
      typedPointer++
    }
    if (nameCount > typedCount) {
      return false
    }
  }
  return true
};