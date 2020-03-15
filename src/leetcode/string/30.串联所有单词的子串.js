// 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

// 示例 1：

// 输入：
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。
// 示例 2：

// 输入：
//   s = "wordgoodgoodgoodbestword",
//   words = ["word","good","best","word"]
// 输出：[]

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (s.length < 1 || words.length < 1) {
      return []
    }
    let stringArr = []
    const len = words.length
    function combineWordsArr (arr, wordsArr) {
      if (arr.length === len) {
        stringArr.push(arr)
      } else {
        wordsArr.forEach((item, index) => {
          let tmp = [].concat(wordsArr)
          tmp.splice(index, 1)
          combineWordsArr(arr.concat(item), tmp)
        })
      }
    }
    combineWordsArr([], words)
    function findIndexes (str, string) {      
      let res = []
      let start = 0
      function findIndex (subStr, str) {
        let index = str.indexOf(subStr)
        if (index > -1) {
          res.push(start++ + index)
          _str = str.slice(1)
          findIndex(subStr, _str)
        }
      }
      findIndex(str, string)
      return res
    }
    let arr = []
    stringArr.forEach((item) => {
      let indexesArr = findIndexes(item.join(''), s)
      indexesArr.forEach((index) => {
        arr.push(index)
      })
    })
    return [...new Set(arr)].sort()
};

// console.warn(findSubstring("foobarfoobar", ["foo","bar"]))
// console.warn(findSubstring("aaa", ["a","a"]))
console.warn(findSubstring("aaaaaaaa", ["aa","aa","aa"]))