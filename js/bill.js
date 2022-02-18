/* bill.js */

export default class Bill {
	constructor() {
		this.amounts = [];
	}

	/** @param {string} amountStr */
	addAmount(amountStr) /* Функция получения строки */ {
		this.amounts.push(amountStr) // Вывод строки (через добавление в массив)
	}

	getCount() /* Функция получения кол-ва объектов в массиве */ {
		return this.amounts.length // Вывод длины массива
	}

	getTotal() /* Функция суммирования всех объектов массива */ {
		let numbered = this.amounts.map(i => Number(i)); // Превращение строчного массива в номерной
		let sum = 0; // Подготовка будущей переменной ответа

		for (let i = 0; i < numbered.length; i++) /* Цикл суммирования объектов */ {
			sum += numbered[i]; // Суммирование объектов
		}

		return sum; // Вывод
	}

	getAverage() /* Получение среднего значения от объектов */ {
		let numbered = this.amounts.map(i => Number(i));
		let sum = 0;

		for (let i = 0; i < numbered.length; i++) {
			sum += numbered[i];
		}

		let average = sum / numbered.length; // Формула получения среднего значения (Сумма всех чисел делённая на их кол-во)
		return average // Вывод
	}
}