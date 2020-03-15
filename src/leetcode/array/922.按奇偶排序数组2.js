// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

// 你可以返回任何满足上述条件的数组作为答案。

 

// 示例：

// 输入：[4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 

// 提示：

// 2 <= A.length <= 20000
// A.length % 2 == 0
// 0 <= A[i] <= 1000

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const len = A.length
  const index = len - 1
  for (let i = 0; i < index; i++) {
    if (isOdd(i) && isOdd(A[i])) {
    }
    if (!isOdd(i) && !isOdd(A[i])) {
    }
    // 如果索引为偶数, 值不为偶数, 找到最近的索引为奇数, 值为偶数的交换
    if (isOdd(i)) {
      for (let j = i + 1; j < len; j++) {
        if (!isOdd(j) && isOdd(A[j])) {
          swap(A, i, j)
          break
        }
      }
    }
    // 如果索引为奇数, 值为偶数, 找到最近的索引为偶数, 值为奇数的交换
    if (!isOdd(i)) {
      for (let j = i + 1; j < len; j++) {
        if (isOdd(j) && !isOdd(A[j])) {
          swap(A, i, j)
          break
        }
      }
    }
    
  }
  function isOdd (num) {
    if (num === 0 || num % 2 === 0) {
      return true
    }
  }
  function swap (arr, index1, index2) {
    arr[index1] ^= arr[index2]
    arr[index2] ^= arr[index1]
    arr[index1] ^= arr[index2]
  }
  return A
};

sortArrayByParityII([ 4, 5, 7, 2 ])

// 可用奇数游标和偶数游标优化