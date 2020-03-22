/**
 * @param {number[]} A
 * @return {number}
 */
// var minIncrementForUnique = function(A) {
//   let res = 0
//   const hashTable = new Map()
//   for (let i = 0; i < A.length; ++i) {
//     const cur = A[i]
//     if (hashTable.get(cur) === undefined) {
//       hashTable.set(cur, 1)
//     } else {
//       hashTable.set(cur, hashTable.get(cur) + 1)
//     }
//   }
//   // console.warn('hashTable', hashTable)
//   function increaseMin () {
//     let minKey = 40000
//     for (let key of hashTable.keys()) {
//       if (key * 1 < minKey * 1) {
//         minKey = key
//       }
//     }
//     // console.warn('minKey', minKey)
//     const minkeyCount = hashTable.get(minKey)
//     if (minkeyCount === 1) {
//       hashTable.delete(minKey)
//     } else {
//       const toIncreaseCount = minkeyCount - 1
//       res += toIncreaseCount
//       const secondMinKey = minKey * 1 + 1
//       if (hashTable.get(secondMinKey) === undefined) {
//         hashTable.set(secondMinKey, toIncreaseCount)
//       } else {
//         hashTable.set(secondMinKey, hashTable.get(secondMinKey) + toIncreaseCount)
//       }
//       hashTable.delete(minKey)
//     }
//     // console.warn('hashTable', hashTable)
//   }
//   while(hashTable.size > 0) {
//     increaseMin()
//   }
//   return res
// };

// /**
//  * @param {number[]} A
//  * @return {number}
//  */
var minIncrementForUnique = function(A) {
  if (A.length === 0) {
    return 0
  }
  let res = 0
  let min = A[0]
  const countArr = []
  for (let i = 0; i < A.length; ++i) {
    if (A[i] < min) {
      min = A[i]
    }
    if (countArr[A[i]] === undefined) {
      countArr[A[i]] = 1
    } else {
      countArr[A[i]]++
    }
  }
  const max = countArr.length - 1
  let pointer = min
  while (!(pointer >= max && countArr[pointer] === 1)) {
    if (countArr[pointer] > 1) {
      res += countArr[pointer] - 1
      if (countArr[pointer + 1] === undefined) {
        countArr[pointer + 1] = countArr[pointer] - 1
      } else {
        countArr[pointer + 1] += countArr[pointer] - 1
      }
    }
    ++pointer
  }
  return res
};

var minIncrementForUnique = function(A) {
  if (A.length === 0) {
    return 0
  }
  let res = 0
  let min = A[0]
  const countArr = []
  for (let i = 0; i < A.length; ++i) {
    if (A[i] < min) {
      min = A[i]
    }
    if (countArr[A[i]] === undefined) {
      countArr[A[i]] = 1
    } else {
      countArr[A[i]]++
    }
  }
  const max = countArr.length - 1
  const maxValue = countArr[max]
  let pointer = min
  while (pointer < max) {
    if (countArr[pointer] > 1) {
      res += countArr[pointer] - 1
      if (countArr[pointer + 1] === undefined) {
        countArr[pointer + 1] = countArr[pointer] - 1
      } else {
        countArr[pointer + 1] += countArr[pointer] - 1
      }
    }
    ++pointer
  }
  if (maxValue > 1) {
    res += maxValue * (maxValue - 1) / 2
  }
  return res
};

// var A = [3,2,1,2,1,7] // 6
var A = [3,3,0,2,0,9,2,11,10,14,5,13,6,5,1] // 21

console.warn(minIncrementForUnique(A))


// var minIncrementForUnique = function(A) {
//   let res = 0
//   const hashTable = {}
//   for (let i = 0; i < A.length; ++i) {
//     if (hashTable[A[i]] === undefined) {
//       hashTable[A[i]] = 1
//     } else {
//       ++hashTable[A[i]]
//     }
//   }
//   // console.warn('hashTable', hashTable)
//   function increaseMin () {
//     let minKey = 40000
//     for (let key in hashTable) {
//       if (key * 1 < minKey * 1) {
//         minKey = key
//       }
//     }
//     console.warn('minKey', minKey)
//     if (hashTable[minKey] === 1) {
//       delete hashTable[minKey]
//     } else {
//       res += (hashTable[minKey] - 1)
//       const secondMinKey = minKey * 1 + 1
//       if (hashTable[secondMinKey] === undefined) {
//         hashTable[secondMinKey] = hashTable[minKey] - 1
//       } else {
//         hashTable[secondMinKey] += hashTable[minKey] - 1
//       }
//       delete hashTable[minKey]
//     }
//     // console.warn('hashTable', hashTable)
//   }
//   while(Object.keys(hashTable).length !== 0) {
//     increaseMin()
//   }
//   return res
// };