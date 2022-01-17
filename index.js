let output = "0"

function finalGrade(exam, projects) {
	if (exam > 90 || projects > 10 ) {
		output = 100
	} else if (exam > 75 && projects >= 5) {
		output = 90
	} else if (exam > 50 && projects >= 2) {
		output = 75
	} else output = 0
	return output
}

// Для проверки

console.log(finalGrade(56, 4));
console.log(finalGrade(100, 5));
console.log(finalGrade(60, 10));
console.log(finalGrade(20, 6));
console.log(finalGrade(10, 1));
console.log(finalGrade(76, 3));