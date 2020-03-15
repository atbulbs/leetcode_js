var generateMatrix = function(n) {
    const res = []
    for (let i = 0; i < n; ++i) {
        res.push([])
    }
    let top = 0
    let right = n - 1
    let bottom = n - 1
    let left = 0
    let num = 1
    const tar = n * n
    while (num <= tar) {
      for (let i = left; i <= right; i++) {
          res[top][i] = num++
      }
      top++
      for (let i = top; i <= bottom; i++) {
          res[i][right] = num++
      }
      right--
      for (let i = right; i >= left; i--) {
          res[bottom][i] = num++
      }
      bottom--
      for (let i = bottom; i >= top; i--) {
          res[i][left] = num++
      }
      left++
    }
    return res
  };

function generateMatrix (n) {
    let mat = []
    var l = 0, r = n - 1, t = 0, b = n - 1;
    for (let i = 0; i < n; ++i) {
        mat.push([])
    }
    var num = 1, tar = n * n;
    while(num <= tar){
        // left to right.
        for(let i = l; i <= r; i++) {
          mat[t][i] = num++;
        }
        t++;
        for(let i = t; i <= b; i++) {
          mat[i][r] = num++;
        } // top to bottom.
        r--;
        for(let i = r; i >= l; i--) {
          mat[b][i] = num++;
        } // right to left.
        b--;
        for(let i = b; i >= t; i--) {
          mat[i][l] = num++;
        } // bottom to top.
        l++;
    }
    return mat;

}

console.warn('generateMatrix', generateMatrix(3))