// 实现一个方法求输入字符串的唯一字符串，并去掉首尾空格。比如：输入” abbcdcefgh  ”输出”abcdefgh”
function getUniqueStr (string) {
  let res = ''
  const hash = {}
  Array.prototype.forEach.call(string.trim(), str => {
    if (!hash[str]) {
      res += str
      hash[str] = 1
    }
  })
  return res
}

// function getUniqueStr (string) {
//   return [...new Set(string.trim().split(''))].join('')
// }

// console.warn('getUniqueStr', getUniqueStr('abbcdcefgh'))

// 请用闭包定义一个函数，实现每隔1秒，输出从1到500
function getPrint1To500Interval1SFn () {
  let i = 1
  return function output () {
    let timer = setInterval(() => {
      if (i >= 5) {
        clearInterval(timer)
      }
      console.log(i++)
    }, 1000)
  }
}

// getPrint1To500Interval1SFn()()

// 实现下面的字符串格式化函数 `format(String, Object)`, 避免出现 XSS：
//     ```javascript
//     document
//         .body
//         .innerHTML =
//             format('<div>I am {name}, my website is <a href="{website}">{website}</a>!</div>', {
//                 name: 'james'
//                 website: 'http://www.qq.com'
//             });



// 定义一个列表类 `List`，该类包含成员方法 `add()`、`all()` 和属性 `length`，要求构造函数和 `add()` 方法的参数为动态参数
//     ```javascript
//     // 构造函数示例：
//     var ls = new List('A', 'B', 'C');
//     // add方法示例：
//     ls.add('D', 'E');
//     // length属性
//     ls.length; // => 5
//     // items属性
//     ls.all(); // => ['A', 'B', 'C', 'D', 'E']

class List {

  private stack = []

  constructor (...args) {
    this.stack = [...args]
  }

  public add (...args) {
    this.stack = [...this.stack, ...args]
  }

  get length () {
    return this.stack.length
  }

  public all () {
    return this.stack
  }
}

// var ls = new List('A', 'B', 'C')
// console.warn('ls',ls)
// ls.add('D', 'E')
// console.warn('ls',ls)
// console.warn(ls.length)
// console.warn(ls.all())

// 通过 JS 在下面的 `ul` 中插入 10000 条 `li` 节点，并在点击 `li` 时打印其下标
//     ```html
//     <ul id="list">
//     </ul>

const fragment = document.createDocumentFragment()
const li = document.createElement('li')

for (let i = 0; i < 10; i++) {
  fragment.appendChild(li)
}

const list = document.getElementById('list')
list.appendChild(fragment)
list.addEventListener('click', e => {
  console.log(e.target)
})