// 选择后面最小的值做交换
function selectSort (arr) {
  // 循环arr.length - 1次
  for (let i = 0; i < arr.length - 1; i++) {
    // 假设i就是最小数的索引
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      // 注意每次与动态输入的最小值去比较
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      // 把最小的数放到最左边
      arr[i] ^= arr[minIndex]
      arr[minIndex] ^= arr[i]
      arr[i] ^= arr[minIndex]
    }
    console.warn('arr', arr)
  }
  return arr
}

selectSort([ 10, 3, 1, 4, 65, 2, 4, 5 ])