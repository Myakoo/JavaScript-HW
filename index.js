let output = 0;

function squareOfSum(value1, value2) {
	output = (value1 + value2)*(value1 + value2);
	return output;
}

// Для проверки

console.log(squareOfSum(2, 3));
console.log(squareOfSum(1, 10));
console.log(squareOfSum(6, 70));
console.log(squareOfSum(50, 40));