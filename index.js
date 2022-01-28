function split(string) {
	return string.split(/(?=[A-Z])/)
}

console.log(split('camelCasing'))		// Для тестов
console.log(split('identifier'))
console.log(split(''))
console.log(split('NequePorroQuisquamEstQuiDoloremIpsum'))