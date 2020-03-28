/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  const resArr = [words[0]]
  let res = 0
  for (let i = 0; i < words.length; ++i) {
    const word = words[i]
    for (let j = 0; j < resArr.length; ++j) {
      const _word = resArr[j]
      let hasEndsWith = false
      if (word.length > _word.length) {
        if (word.endsWith(_word)) {
          resArr[j] = word
          hasEndsWith = true
          break
        }
      } else {
        if (_word.endsWith(word)) {
          hasEndsWith = true
          break
        }
      }
      if (!hasEndsWith) {
        resArr.push(word)
      }
    }
  }

  resArr.forEach(item => {
    res += item.length + 1
  })
  return res
};

var minimumLengthEncoding = function(words) {
  const resArr = [words[0]]
  let res = 0
  function hasCommonEnd (str1, str2) {
    let i = str1.length - 1
    let j = str2.length - 1
    let k = 0
    while (k <= i && k <= j) {
      if (str1[i - k] !== str2[j - k]) {
        return false
      }
      ++k
    }
    return true
  }
  for (let i = 0; i < words.length; ++i) {
    const word = words[i]
    for (let j = 0; j < resArr.length; ++j) {
      const _word = resArr[j]
      if (hasCommonEnd(word, _word)) {
        if (word.length > _word.length) {
          resArr[j] = word
        }
      } else {
        resArr.push(word)
      }
    }
  }

  resArr.forEach(item => {
    res += item.length + 1
  })
  return res
};

var minimumLengthEncoding = function(words) {
  const resArr = [words[0]]
  let res = 0
  const memory = {}
  function hasCommonEnd (str1, str2) {
    let i = str1.length - 1
    let j = str2.length - 1
    let k = 0
    while (k <= i && k <= j) {
      if (str1[i - k] !== str2[j - k]) {
        return false
      }
      ++k
    }
    return true
  }
  function addToMemory (word) {
    for (let i = 0; i < word.length; ++i) {
      const str = word.substring(i)
      memory[str] = 1
    }
  }
  addToMemory(words[0])
  for (let i = 1; i < words.length; ++i) {
    const word = words[i]
    if (memory[word] === undefined) {
      for (let j = 0; j < resArr.length; ++j) {
        const _word = resArr[j]
        if (hasCommonEnd(word, _word)) {
          if (word.length > _word.length) {
            resArr[j] = word
            addToMemory(word)
          }
        } else {
          resArr.push(word)
          addToMemory(word)
        }
      }
    }
  }
  resArr.forEach(item => {
    res += item.length + 1
  })
  return res
};

// 数据结构的力量
var minimumLengthEncoding = function(words) {
  const wordsSet = new Set(words)
  for (let word of wordsSet) {
    for (let i = word.length - 1; i > 0; --i) {
      const str = word.substring(i)
      if (wordsSet.has(str)) {
        wordsSet.delete(str)
      }
    }
  }
  let res = 0
  wordsSet.forEach(word => {
    res += word.length + 1
  })
  return res
};

console.warn(minimumLengthEncoding(["time", "me", "bell"]))
