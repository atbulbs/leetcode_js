/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingslidingWindow = function(nums, k) {
  if (k === 1) {
    return nums
  } else if (nums.length * k === 0) {
    return []
  } else if (nums.length <= 2) {
    if (nums.length === 1) {
      return nums[0]
    } else {
      return nums[0] > nums[1] ? [nums[0]] : [nums[1]]
    }
  } else {
    const result = []
    const deque = [0]
    for (let i = 0; i < nums.length; i++) {
      for (let j = deque.length; j >= 0; j--) {
        if (nums[i] > nums[deque[j]]) {
          deque.pop()
        }
      }
      deque.push(i)
      result.push(nums[deque[0]])
    }
    return result.slice(2)
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingslidingWindow = function(nums, k) {
  if (nums.length < k || nums.length === 0) return nums;

  let numsLength = nums.length,
      answer = [],
      slidingWindow = [];

  for (let i = 0; i < k; i++) {
    let c = nums[i];

    while (slidingWindow.length > 0 && c > nums[ slidingWindow[slidingWindow.length - 1] ]) {
      slidingWindow.pop();
    }

    slidingWindow.push( i );
  }
  answer.push( nums[ slidingWindow[0] ] );

  for (let i = k; i < numsLength; i++) {
    let c = nums[ i ];

    while (slidingWindow.length > 0 && slidingWindow[0] < i + 1 - k) {
      slidingWindow.shift();
    }

    while (slidingWindow.length > 0 && c > nums[ slidingWindow[slidingWindow.length - 1] ]) {
      slidingWindow.pop();
    }

    slidingWindow.push( i );
    answer.push( nums[ slidingWindow[0] ] );
  }

  return answer;
};

var maxSlidingslidingWindow = function(nums, k) {
  if (nums.length < k || nums.length === 0) {
    return nums;
  }

  const numsLength = nums.length
  const answer = []
  const slidingWindow = []

  for (let i = 0; i < k; i++) {
    let c = nums[i];

    while (slidingWindow.length > 0 && c > nums[ slidingWindow[slidingWindow.length - 1] ]) {
      slidingWindow.pop();
    }

    slidingWindow.push( i );
  }
  answer.push( nums[ slidingWindow[0] ] );

  for (let i = k; i < numsLength; i++) {
    let c = nums[ i ];

    // while (slidingWindow.length > 0 && slidingWindow[0] < i + 1 - k) {
    //   slidingWindow.shift();
    // }

    let start
    while (slidingWindow[0] < i - k + 1) {
      start = slidingWindow[0]
    }
    slidingWindow.splice(0, start + 1)

    while (slidingWindow.length > 0 && c > nums[ slidingWindow[slidingWindow.length - 1] ]) {
      slidingWindow.pop();
    }

    slidingWindow.push( i );
    answer.push( nums[ slidingWindow[0] ] );
  }

  return answer;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length < k || nums.length === 0) {
    return nums
  }
  const numsLength = nums.length
  const answer = []
  const slidingWindow = []
  for (let i = 0; i < k; ++i) {
    while (slidingWindow.length > 0 && nums[i] > nums[slidingWindow[slidingWindow.length - 1]]) {
      slidingWindow.pop()
    }
    slidingWindow.push(i)
  }
  answer.push(nums[slidingWindow[0]])
  for (let i = k; i < numsLength; ++i) {
    let start = 0
    while (slidingWindow[start] < i - k + 1) {
      ++start
    }
    slidingWindow.splice(0, start)
    while (slidingWindow.length > 0 && nums[i] > nums[slidingWindow[slidingWindow.length - 1] ]) {
      slidingWindow.pop()
    }
    slidingWindow.push(i)
    answer.push(nums[slidingWindow[0]])
  }
  return answer
}

var maxSlidingWindow = function(nums, k) {
  // 考虑特殊情况
  if (nums.length < k || nums.length === 0) {
    return nums
  } else {
    const numsLength = nums.length
    const answer = []
    const slidingWindow = []
    // 初始化第一个窗口
    for (let i = 0; i < k; ++i) {
      while (slidingWindow.length > 0 && nums[i] > nums[slidingWindow[slidingWindow.length - 1]]) {
        slidingWindow.pop()
      }
      slidingWindow.push(i)
    }
    answer.push(nums[slidingWindow[0]])
    // 遍历数组
    for (let i = k; i < numsLength; ++i) {
      // 删除超出窗口左侧的数组下标
      let start = 0
      while (slidingWindow[start] < i - k + 1) {
        ++start
      }
      slidingWindow.splice(0, start)
      // 删除小于当前元素值的数组下标
      while (slidingWindow.length > 0 && nums[i] > nums[slidingWindow[slidingWindow.length - 1]]) {
        slidingWindow.pop()
      }
      slidingWindow.push(i)
      answer.push(nums[slidingWindow[0]])
    }
    return answer
  }
}
