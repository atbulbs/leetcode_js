// 输入的字符串
var string = 'abbbbccc'

function countStrings (string) {
  // 把字符串转换成数组 ['a', 'b', 'b', 'b', 'b', 'c', 'c', 'c']
  var array = string.split('')
  // 创建一个空对象(一个酒店的前台)
  var object = new Object()
  // 遍历数组
  // (酒店前台查看每个进入酒店的客人)
  for (var i = 0; i < array.length; i++) {
    // 如果对象没有这个字符的键
    // (如果酒店的前台发现登记册子里面没有这个客人的名字)
    if (object[array[i]] === undefined) {
      // 给对象添加这个字符的键,并让其值初始化为1
      // (酒店的前台在登记册子里面记录这个客人的名字,备注这个客人的开房次数为1)
      object[array[i]] = 1
    } else {
      // 如果对象已经有了这个字符的键,让其值 ++
      // (如果酒店的前台发现登记册子里面已经有这个客人的名字了,给这个客人的开房次数备注+1)
      object[array[i]] ++
    }
  }
  // 对象按值排序
  newObj = Object.keys(object).sort((a, b) => object[b] - object[a])
  newObj.forEach(v => {
    console.log(v,object[v])
  })

  

  // 遍历对象的每一个键
  // (翻看登记册子里的每个客人的名字)
  // for (var key in object) {
  //   // 输出键和对应的值
  //   // (输出每个客人的名字和开房次数)
  //   console.log(key + ':' + object[key])
  // }
}

countStrings(string) 
// 输出的结果
// a: 1
// b: 2
// c: 3
