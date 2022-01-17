let output = 0;

function calc(operator, value1, value2) {
	if (operator === '+') {
		output = value1 + value2
	} else if (operator === '-') {
		output = value1 - value2
	} else if (operator === '*') {
		output = value1 * value2
	} else if (operator === '/') {
		output = value1 / value2
	}
	return output
}

// Для проверки

console.log(calc('+', 1, 3));
console.log(calc('-', 17, 32));
console.log(calc('*', 4, 4));
console.log(calc('/', 12, 3));
console.log(calc('+', 14232, 33432));
console.log(calc('*', 1321, -5));
console.log(calc('-', -1342, 4232));
console.log(calc('/', 1200, 45));