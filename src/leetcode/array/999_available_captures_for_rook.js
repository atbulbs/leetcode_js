// 在一个 8 x 8 的棋盘上，有一个白色车（rook）。也可能有空方块，白色的象（bishop）和黑色的卒（pawn）。它们分别以字符 “R”，“.”，“B” 和 “p” 给出。大写字符表示白棋，小写字符表示黑棋。

// 车按国际象棋中的规则移动：它选择四个基本方向中的一个（北，东，西和南），然后朝那个方向移动，直到它选择停止、到达棋盘的边缘或移动到同一方格来捕获该方格上颜色相反的卒。另外，车不能与其他友方（白色）象进入同一个方格。

// 返回车能够在一次移动中捕获到的卒的数量。

/**
 * @param {character[][]} board
 * @return {number}
 */
let numRookCaptures = (board) => {
  let count = 0
  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = board[0].length - 1; j >= 0; j--) {
      if (board[i][j] === 'R') {
        const R = board[i]
        R.splice(j, 0, 'R')
        const C = [ board[0][j], board[1][j], board[2][j], board[3][j], board[4][j], board[5][j], board[6][j], board[7][j] ]
        C.splice(i, 0, 'R')
        count += countPawn(R)
        count += countPawn(C)
      }
    }
  }
  function countPawn (A) {
    return A.join('').match(/p\.*R|R\.*p/g) && A.join('').match(/p\.*R|R\.*p/g).length
  }
  return count
}

// const test = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
const test = [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
console.warn(numRookCaptures(test))

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let res = 0
  let rowRook
  let columnRook
  for (let i = 0; i < 8; ++i) {
    for (let j = 0; j < 8; ++j) {
      if (board[i][j] === 'R') {
        rowRook = i
        columnRook = j
      }
    }
  }
  // left
  for (let row = rowRook - 1; row >= 0; --row) {
    const chessPiece = board[row][columnRook]
    if (chessPiece === 'p') {
      res += 1
      break
    } else if (chessPiece === 'B') {
      break
    }
  }
  // right
  for (let row = rowRook + 1; row < 8; ++row) {
    const chessPiece = board[row][columnRook]
    if (chessPiece === 'p') {
      res += 1
      break
    } else if (chessPiece === 'B') {
      break
    }
  }
  // top
  for (let column = columnRook - 1; column >= 0; --column) {
    const chessPiece = board[rowRook][column]
    if (chessPiece === 'p') {
      res += 1
      break
    } else if (chessPiece === 'B') {
      break
    }
  }
  // bottom
  for (let column = columnRook + 1; column < 8; ++column) {
    const chessPiece = board[rowRook][column]
    if (chessPiece === 'p') {
      res += 1
      break
    } else if (chessPiece === 'B') {
      break
    }
  }
  return res
};

// const test = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
const test = [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
console.warn(numRookCaptures(test))
