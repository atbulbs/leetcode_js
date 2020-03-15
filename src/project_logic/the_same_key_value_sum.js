// 如果某个属性的值相同, 则属性都累加

var arr = [
	{
		'name' : 'liao',
		'age' : 11,
		'height': 11
	},
	{
		'name' : 'lio',
		'age' : 14,
		'height': 11
	},
	{
		'name' : 'Tom',
		'age' : 16,
		'height': 12
	},
	{
		'name' : 'David',	
		'age' : 15,
		'height': 13
	},
	{
		'name' : 'Lily',
		'age' : 14,
		'height': 14
	},
	{
		'name' : 'Lucy',
		'age' : 17,
		'height': 15
	},
	{
		'name' : 'LiLei',
		'age' : 16,
		'height': 16
	},
	{
		'name' : 'HanMei',
		'age' : 15,
		'height': 11
	}
]

function first (str) {	
	return str.split('_')[0]
}

function format (arr, key) {	
	const keyHash = {}
	const sum = {}
	const keysArr = Object.keys(arr[0])
	const ln = keysArr.length
	const index = keysArr.indexOf(key)
	keysArr.splice(index, 1)
	arr.forEach((item) => {
		if (!keyHash[item[key]]) {	
			keyHash[item[key]] = 1
			keysArr.forEach((_item) => {	
				sum[key + '_' + item[key]] = item[key]
				sum[_item + '_' + item[key]] = item[_item]
			})
		} else {
			keysArr.forEach((_item) => {	
				sum[key + '_' + item[key]] += item[key]
				sum[_item + '_' + item[key]] += item[_item]
			})
		}
	})
	const _keysArr = Object.keys(sum)
	const result = []
	for (let i = _keysArr.length - 1; i > 0; i -= ln) {
		const resultItem = {}
		for (let j = ln - 1; j >= 0; j--) {
			resultItem[first(_keysArr[i - j])] = sum[_keysArr[i - j]]
		}
		result.push(resultItem)
	}
	return result
}

console.log(format(arr, 'age'))

 			 