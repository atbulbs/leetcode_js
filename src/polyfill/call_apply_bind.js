Function.prototype.myCall = function (context) {
  context = context || window
  const unique = Symbol()
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

const foo = {
  a: 1
}

function bar (b, c) {
  console.log(this.a)
  console.log('b', b)
  console.log('c', c)
}
console.warn('bar', bar)
bar.myCall(foo, 2, 3)