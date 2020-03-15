const arr = [1, 2, 3]

function getArrOrder (arr) {	
  let ascendentCount = 0
  let descendentCount = 0
  let result = ''
  const len = arr.length - 1
  for (let i = len; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {	
      if (descendentCount) {	
        res = '乱序'
        break
      } else {
        ascendentCount++
      }
    } else if (arr[i] < arr[i - 1]) {
      if (ascendentCount) {	
        res = '乱序'
        break
      } else {
        descendentCount++
      }
    }
  }
  if (ascendentCount === 0 && descendentCount === 0) {	
    result = '平序'
  } else if (descendentCount === 0) {	
    result = '升序'
  } else {	
    result = '降序'
  }
  return result
}

console.log(getArrOrder(arr))
