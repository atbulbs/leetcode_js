// 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

// 给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

// 示例 1:

// 输入: flowerbed = [1,0,0,0,1], n = 1
// 输出: True
// 示例 2:

// 输入: flowerbed = [1,0,0,0,1], n = 2
// 输出: False
// 注意:

// 数组内已种好的花不会违反种植规则。
// 输入的数组长度范围为 [1, 20000]。
// n 是非负整数，且不会超过输入数组的大小。

/**
 * @param { number[] } flowerbed
 * @param { number } n
 * @return { boolean }
 */
var canPlaceFlowers = function (flowerbed, n) {
  const len = flowerbed.length
  let res = true
  if (len === 1 && flowerbed[0] === 0) {
    return true
  }
  let start = 2
  function canPlaceOneFlower (arr) {
    if (arr[0] === 0 && arr[1] === 0) {
      return arr.splice(0, 1, 1)
    }
    if (arr[len - 1] === 0 && arr[len - 2] === 0) {
      return arr.splice(len - 1, 1, 1)
    }
    for (let i = start; i < len; i++) {
      if (arr[i - 1] === 0 && arr[i] === 0 && arr[i + 1] === 0) {
        start = i + 1
        return arr.splice(i, 1, 1)
      }
    }
    return false
  }
  for (let j = 0; j < n; j++) {
    if (!canPlaceOneFlower(flowerbed)) {
      res = false
      break
    }
  }
  return res
};

console.warn(canPlaceFlowers([1,0,0,0,1], 1))
console.warn(canPlaceFlowers([1,0,0,0,1], 2))