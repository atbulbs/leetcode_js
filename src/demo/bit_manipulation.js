let count = 20
console.time('%2')
for (let i = 0; i < count; i += 2) {
  if ((i % 2) !== 0) {
    console.warn('是奇数')
  }
}
console.timeEnd('%2')

console.time('&1')
for (let i = 0; i < count; i += 2) {
  if ((i & 1) === 1) {
    console.warn('是奇数')
  }
}
console.timeEnd('&1')

console.time('%4')
for (let i = 0; i < count; i += 4) {
  if ((i % 4) !== 0) {
    console.warn('不是4的倍数')
  }
}
console.timeEnd('%4')

console.time('&3')
for (let i = 0; i < count; ++i) {
  (i & 3) === 3
}
console.timeEnd('&3')
