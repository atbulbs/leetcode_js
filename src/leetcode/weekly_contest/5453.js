/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
  let t = 0
  while (left.length && right.length) {
    ++t

    const memoryLeft = {}
    const _left = []
    const memoryRight = {}
    const _right = []
    for (let i = 0; i < left.length; ++i) {
      // 没有掉下去
      if (left[i] <= n) {
        memoryLeft[left[i]] = true
      }
    }
    console.warn('memoryLeft', memoryLeft)
    for (let j = 0; j < right.length; ++j) {
      // 没有掉下去
      if (right[j] >= 0) {
        memoryRight[right[j]] = true
      }
    }
    console.warn('memoryRight', memoryRight)

    for (let i = 0; i < left.length; ++i) {
      // 碰撞了改方向
      if (memoryRight[left[i]]) {
        console.warn('碰撞了改方向', left[i])
        if (left[i] - 1 >= 0) {
          _right.push(left[i] - 1)
        }
      } else {
        if (left[i] + 1 <= n) {
          _left.push(left[i] + 1)
        }
      }
    }
    for (let j = 0; j < right.length; ++j) {
      // 碰撞了改方向
      if (memoryLeft[right[j]]) {
        console.warn('碰撞了改方向', right[j])
        if (right[j] + 1 <= n) {
          _left.push(right[j] + 1)
        }
      } else {
        if (right[j] - 1 >= 0) {
          _right.push(right[j] - 1)
        }
      }
    }
    console.warn('_left', _left)
    console.warn('_right', _right)

    left = _left
    right = _right


  }
  return t

};

console.warn(getLastMoment(4, [4,3], [0,1]))