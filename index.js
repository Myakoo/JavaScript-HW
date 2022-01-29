const cities = ['moscow', 'london', 'berlin', 'porto'];

function get(arr, index, forDefault = null) {

	if (arr[index] !== undefined) {
		return arr[index]
	} else if (-1 >= index || arr.length <= index) {
		return forDefault
	}
}

console.log(get(cities, 1))		// Для тестов
console.log(get(cities, 4))
console.log(get(cities, 10, 'paris'))
console.log(get(cities, -1, 'oops'))
