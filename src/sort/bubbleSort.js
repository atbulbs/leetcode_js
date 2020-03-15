function bubbleSort (arr) {
  // 外层循环控制冒泡的次数, 每次冒泡把最大的那个数放到最右边
  for (let i = arr.length - 1; i > 0; i--) {
    // 内层循环, 从0到边界, 依次比较两个数的大小, 把大的数放到右边
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 拓展, 交换两个数的方法, 封装swap函数
        arr[j] ^= arr[j + 1]
        arr[j + 1] ^= arr[j]
        arr[j] ^= arr[j + 1]
      }
    }
    console.warn('arr', arr)
  }
  return arr
}

bubbleSort([3, 2, 1, 5, 6, 2, 4, 9, 1, 2, 4, 5])