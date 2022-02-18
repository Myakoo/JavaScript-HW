/* passport.js */

export default class Passport {
	/**
	 * @param {string} firstName
	 * @param {string} lastName
	 */

	constructor(firstName, lastName) /* Получаем имя и фамилию */ {
		this.firstName = firstName; // Присваиваем имя
		this.lastName = lastName; // Присваиваем фамилию
	}

	getFirstName() /* Функция получения имени */ {
		return this.firstName.toLowerCase() // Возвращаем полученное имя
	}

	getLastName() /* Функция получения фамилии */ {
		return this.lastName.toUpperCase() // Возвращаем полученную фамилию
	}

	getFullName() /* Функция получения полного имени */ {
		return `${this.firstName} ${this.lastName}` // Склеиваем имя и фамилию, возвращаем
	}

	getInitials() /* Функция получения инициалов */ {
		return this.firstName[0] + "." + this.lastName[0] // Берём по первой букве из имени и фамилии, возвращаем
	}

	getIsValidName() /* Функция проверки валидности имени */ {
		if (this.firstName.length > 0 && this.lastName.length > 0) /* Проверяем наличие имени и фамилии (по первым буквам) */ {
			return "Yes" // Возвращаем, если условие выполнено
		} else return "No" // Возвращаем в ином случае
	}

}