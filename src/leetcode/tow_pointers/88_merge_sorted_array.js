// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let arrResPointer = m + n - 1
  let arr1Pointer = m - 1
  let arr2Pointer = n - 1
  while (arr1Pointer >= 0 && arr2Pointer >= 0) {
    if (nums2[arr2Pointer] >= nums1[arr1Pointer]) {
      nums1[arrResPointer--] = nums2[arr2Pointer--]
    } else {
      nums1[arrResPointer--] = nums1[arr1Pointer--]
    }
  }
  nums1.splice(0, arr2Pointer + 1, ...nums2.slice(0, arr2Pointer + 1))
};