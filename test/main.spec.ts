import MyQueue from '../lib/leetcode_playground.es.js'

const queue = new MyQueue()
queue.push(1)
queue.push(2)

test('peek', () => {
  expect(queue.peek()).toBe(1)
})

test('pop', () => {
  expect(queue.pop()).toBe(1)
})

test('empty', () => {
  expect(queue.empty()).toBe(false)
})
