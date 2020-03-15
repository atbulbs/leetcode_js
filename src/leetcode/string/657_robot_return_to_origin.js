/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let x = 0
  let y = 0
  for (let i = moves.length - 1; i >= 0; i--) {
    if (moves[i] === 'U') {
      ++y
    } else if (moves[i] === 'D') {
      --y
    } else if (moves[i] === 'R') {
      ++x
    } else {
      --x
    }
  }
  return x === 0 && y === 0
};