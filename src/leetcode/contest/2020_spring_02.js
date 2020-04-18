/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, relation, k) {
  function findTargets (targets, depth) {
    if (depth <= 0) {
      return targets
    }
    const _targets = new Set()
    for (let num of targets) {
      for (let i = relation.length - 1; i >= 0; --i) {
        if (relation[i][1] === num) {
          _targets.add(relation[i][0])
        }
      }
    }
    console.warn('_targets', _targets)
    return findTargets(_targets, --depth)
  }
  const targets = new Set()
  targets.add(n - 1)
  const __targets = findTargets(targets, k)
  let res = 0
  for (let __target of __targets) {
    if (__target === 0) {
      ++res
    }
  }
  return res
};

var numWays = function(n, relation, k) {
  let res = 0
  function findTarget (target, depth) {
    if (depth === 0) {
      if (target === 0) {
        ++res
      }
    }
    for (let i = relation.length - 1; i >= 0; --i) {
      if (relation[i][1] === target) {
        if (depth > 0) {
          findTarget(relation[i][0], depth - 1)
        }
      }
    }
  }
  findTarget(n - 1, k)
  return res
};

console.warn(numWays(5, [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], 3))
console.warn(numWays(3, [[0,2],[2,1]], 2))