// TODO: Дан список целых чисел. Необходимо определить, является ли сумма его элементов четной или нечетной.

const oddOrEven = (array) => {

	var sum = array.reduce((total, current) /* Сводим массив к одному значению */ => {
		return total + current; // Сводим
	 }, 0);

	return (sum % 2 == 0) ? 'even' : 'odd'; // Делаем функцию проверки числа. Выводим. Изучил самостоятельно, вроде так удобнее даже писать

	//  if (sum % 2 == 0) {      <-- Можно и так, то же самое
	// 	return 'even';
	//  } else {
	// 	return 'odd';
	//  }

}


console.log(oddOrEven([0, 1, 5])); // 'even'
console.log(oddOrEven([0, 1, 3])); // 'even'
console.log(oddOrEven([0, -1, -5])); // 'even'

console.log(oddOrEven([0, 1, 4])); // 'odd'
console.log(oddOrEven([0, -1, 2])); // 'odd'

console.log(oddOrEven([0])); // 'even'
