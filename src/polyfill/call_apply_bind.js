Function.prototype.myCall = function (context) {
  context = context || window
  const unique = Symbol()
  // 让绑定的对象有这个方法
  context[unique] = this
  let args = ''
  for (let i = 1; i < arguments.length; ++i) {
    args += arguments[i]
    if (i !== arguments.length - 1) {
      args += ','
    }
  }
  console.warn('args', args)
  eval('context[unique](' + args + ')')
  delete context[unique]
}

Function.prototype.myApply = function (context, argsArr) {
  context = context || window
  const unique = Symbol()
  // 让绑定的对象有这个方法
  context[unique] = this
  let args = ''
  for (let i = 0; i < argsArr.length; ++i) {
    args += argsArr[i]
    if (i !== argsArr.length - 1) {
      args += ','
    }
  }
  console.warn('args', args)
  eval('context[unique](' + args + ')')
  delete context[unique]
}

Function.prototype.myBind = function (context) {
  context = context || window
  const unique = Symbol()
  // 让绑定的对象有这个方法
  context[unique] = this
  return function  () {
    let args = ''
    for (let i = 0; i < arguments.length; ++i) {
      args += arguments[i]
      if (i !== arguments.length - 1) {
        args += ','
      }
    }
    console.warn('args', args)
    eval('context[unique](' + args + ')')
    delete context[unique]
  }
}

const foo = {
  a: 1
}

function bar (b, c) {
  console.log(this.a)
  console.log('b', b)
  console.log('c', c)
}
console.warn('bar', bar)
// bar.myCall(foo, 2, 3)
// bar.myApply(foo, [2, 3])
bar.myBind(foo)(2, 3)