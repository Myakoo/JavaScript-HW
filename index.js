function removeChar(string) {
	string = string.slice(1, -1) // Интересно. Перебирал полчаса значение для последнего символа, добрёл кое-как до -1. Полез узнавать в чём подвох, а оказалось, что это как length-1 работает. Круто)
	return string
}


console.log(removeChar('eloquent')); // loquen
console.log(removeChar('country')); // ountr
console.log(removeChar('person')); // erso