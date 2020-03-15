var shortestToChar = function(S, C) {
  const res = []
  for (let i = 0; i < S.length; i++) {
    res.push(helper(i, S, C))
  }
  function helper (i, S, C) {
    let leftPointer = i
    let rightPointer = i
    while (true) {
      if (S[leftPointer] === C) {
        return i - leftPointer
      } else {
        if (leftPointer >= 0) {
          leftPointer--
        }
      }
      if (S[rightPointer] === C) {
        return rightPointer - i
      } else {
        if (rightPointer < S.length) {
          rightPointer++
        }
      }
    }
  }
  return res
};