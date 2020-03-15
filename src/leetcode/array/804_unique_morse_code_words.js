/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const morseCodeArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const hashTable = {}
  for (let i = 0; i < words.length; i++) {
    let code = ''
    const aCode = 'a'.charCodeAt()
    for (let j = 0; j < words[i].length; j++) {
      code += morseCodeArr[words[i][j].charCodeAt() - aCode]
    }
    if (hashTable[code] === undefined) {
      hashTable[code] = 1
    }
  }
  return Object.keys(hashTable).length
};

var uniqueMorseRepresentations = function(words) {
  const morseCodeArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const hashTable = {}
  for (let i = 0; i < words.length; i++) {
    let code = ''
    const aCode = 'a'.charCodeAt()
    for (let j = 0; j < words[i].length; j++) {
      code += morseCodeArr[words[i][j].charCodeAt() - aCode]
    }
    if (hashTable[code] === undefined) {
      hashTable[code] = 1
    }
  }
  console.warn('hashTable', hashTable)
  return Object.keys(hashTable).length
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])