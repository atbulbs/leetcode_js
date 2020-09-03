/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function ( matrix, target )
{
  if ( matrix[ 0 ] === undefined )
  { 
    return false
  }
  let right = matrix[ 0 ].length - 1
  let top = 0
  while (right >= 0 && top < matrix.length)
  {   
    if ( matrix[ top ][ right ] > target )
    {
      right--
    } else if ( matrix[ top ][ right ] < target )
    {
      top++
    } else
    { 
      return true
    }
  }
  return false
}
