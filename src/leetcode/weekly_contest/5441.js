/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
  const res = []
  const memory = {}
  names.forEach(name => {
    console.warn('name', name)
    const isMatch = /(\([1-9]\d+\))$/.test(name)
    if (isMatch) {
      name.replace(/(\([1-9]\d+\))$/, d => {
        console.warn('匹配到有效的括号 d', d)
        const numStr = d.substring(1, d.length - 1)
        console.warn('numStr', numStr)

        const _name = name.substring(0, name.length - d.length)
        console.warn('_name', _name)

        if (!memory[_name]) {
          memory[_name] = numStr * 1 + 1
          res.push(name)
        } else {
          if (memory[_name] - 1 < numStr * 1) {
            res.push(name)
            memory[_name] = numStr * 1 + 1
          } else if (memory[_name] ===  numStr * 1) {
            res.push(name)
            memory[_name] = numStr * 1 + 1
          } else {
            res.push(name + '(' + 1 + ')')
            memory[name] = 2
          }
        }
      })
    } else {
      console.warn('没有匹配到有效的括号 name', name)
      if (!memory[name]) {
        // 之前没有这个名字
        memory[name] = 1
        res.push(name)
      } else {
        // 之前有这个名字, 添加最小正整数后缀k
        res.push(name + '(' + memory[name] + ')')
        memory[name] += 1
      }
    }
  })
  console.warn('memory', memory)
  console.warn('res', res)

  return res
};

getFolderNames(["gta","gta(1)","gta","avalon"])