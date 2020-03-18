/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  function isPointInRectangle (point, rec) {
    console.warn('point', point)
    const { x, y } = point
    const leftX = rec[0]
    const bottomY = rec[1]
    const rightX = rec[2]
    const topY = rec[3]
    if (x < rightX && x > leftX && y < topY && y > bottomY) {
      console.warn('in')
      return true
    } else {
      console.warn('out')
      return false
    }
  }
  const pointRec1LeftBottom = {
    x: rec1[0],
    y: rec1[1]
  }
  const pointRec1LeftTop = {
    x: rec1[0],
    y: rec1[3]
  }
  const pointRec1RightTop = {
    x: rec1[2],
    y: rec1[3]
  }
  const pointRec1RightBottom = {
    x: rec1[2],
    y: rec1[1]
  }
  if (
    isPointInRectangle(pointRec1LeftBottom, rec2)
    || isPointInRectangle(pointRec1LeftTop, rec2)
    || isPointInRectangle(pointRec1RightTop, rec2)
    || isPointInRectangle(pointRec1RightBottom, rec2)
  ) {
    return true
  } else {
    return false
  }
};

const rec1 = [7,8,13,15]
const rec2 = [10,8,12,20]

isRectangleOverlap(rec1, rec2)
