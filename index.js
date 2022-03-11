// TODO: Функция должна возвращать каждый первый символ в слове в верхнем регистре.

let cased = []; // Создаём массив-хранилище, в которое будем помещать итог

const toJadenCase = (string) => {
	let stringArray = string.split(" "); // Добавляем каждое слово из предложения в массив
	// console.log(stringArray)
	for (let i = 0; i < stringArray.length; i++) /* Создаём цикл, который будет итерироваться по каждому элементу массива (каждому слову в предложении) */ {

		let splittedWord = stringArray[i].split(""); // Разъединяем слово по буквам
		splittedWord[0] = splittedWord[0].toUpperCase(); // Берём первую букву и делаем её заглавной
		let finalWord = splittedWord.join('') // "соединяем" слово обратно
		cased.push(finalWord); // Пушим слово в массив

	}
	return cased.join(' '); // Добавляем пробел и выводим итоговое предложение
};

console.log(toJadenCase('How can mirrors be real if our eyes aren"t real')); // How Can Mirrors Be Real If Our Eyes Aren"t Real