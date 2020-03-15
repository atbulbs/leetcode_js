const nodes = [
  [                  'a'                 ],
  [        'b',                 'c'      ],
  [   'd',      'e',      'f',      'g'  ],
  ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'] 
  // ...
]
// 如上数组
// 'a'节点的子节点为'b'和'c'
// 'b'节点的子节点为'd'和'e', 'c'节点的子节点为'f'和'g'
// 'd'节点的子节点为'h'和'i', 'e'节点的子节点为'j'和'k'
// 以此类推
// 当我们从根节点'a'逐级向下遍历节点时
// 创建当前节点和它的子节点按照深度组成的二维数组
// 例: 如果当前节点是 'b'
// 所需创建的二维数组如下
// [
//  [        'b'       ]
//  [   'd',      'e'  ]
//  ['h', 'i', 'j', 'k']
//  // ...
// ]

const tree = {
  "a": {
    "parent": "",
    "children": ["b", "c"]
  },
  "b": {
    "parent": "a",
    "children": ["d", "e"]
  },
  "c": {
    "parent": "a",
    "children": ["f", "g"]
  },
  "d": {
    "parent": "b",
    "children": ["h", "i"]
  },
  "e": {
    "parent": "b",
    "children": ["j", "k"]
  },
  "f": {
    "parent": "c",
    "children": ["l", "m"]
  },
  "g": {
    "parent": "c",
    "children": ["n", "o"]
  },
  "h": {
    "parent": "d",
    "children": []
  },
  "i": {
    "parent": "d",
    "children": []
  },
  "j": {
    "parent": "e",
    "children": []
  },
  "k": {
    "parent": "e",
    "children": []
  },
  "l": {
    "parent": "f",
    "children": []
  },
  "m": {
    "parent": "f",
    "children": []
  },
  "n": {
    "parent": "g",
    "children": []
  },
  "o": {
    "parent": "g",
    "children": []
  }
}

// tranform_tree_nodes_to_double_dimensional_array
function ttn2dda (tree, currentNodeId) { 
  let res = [[currentNodeId]];
  +function func (optionNodeId, deepth) {
    if (tree[optionNodeId].children.length) {
      res[deepth] = res[deepth] || []
      tree[optionNodeId].children.forEach(child => {
        res[deepth].push(child)
        func(child, deepth + 1)
      })
    }
  }(currentNodeId, 1)
  return res
}

console.warn('ttn2dda(tree, "a")')
console.table(ttn2dda(tree, 'a'))
console.warn('\n\n\n\n\n')
console.warn('ttn2dda(tree, "b")')
console.table(ttn2dda(tree, 'b'))
