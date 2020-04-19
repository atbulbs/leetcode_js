/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
  const res = []
  const title = ['Table']
  const memueHash = {}
  for (let i = 0; i < orders.length; ++i) {
    const item = orders[i]
    if (memueHash[item[2]] === undefined) {
      memueHash[item[2]] = 1
    }
  }
  res.push(title)
  Object.keys(memueHash).forEach(item => {
    title.push(item)
  })
  const tablesHash = {}
  for (let i = 0; i < orders.length; ++i) {
    const item = orders[i]
    if (tablesHash[item[1]] === undefined) {
      tablesHash[item[1]] = {}
    }
    if (tablesHash[item[1]][item[2]] === undefined) {
      tablesHash[item[1]][item[2]] = 1
    } else {
      ++tablesHash[item[1]][item[2]]
    }
  }
  console.warn('title', title)
  console.warn('tablesHash', tablesHash)
  const sortKeys = Object.keys(tablesHash).sort((a, b) => a * 1 - b * 1 > 0)
  console.warn('sortKeys', sortKeys)
  sortKeys.forEach(key => {
    const arr = [key]
    const item = tablesHash[key]
    Object.keys(item).forEach(name => {
      
    })
  })
  return res
};

console.warn('displayTable', displayTable([["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]))