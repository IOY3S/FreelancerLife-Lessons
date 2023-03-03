// Строгий режим
"use strict"

//======== Video 1 https://www.youtube.com/watch?v=6cKoB5ijaGA&list=PLM6XATa8CAG7DDIBjNVd78Fv5Ueo930IV&index=12 ===========

//Объявление функции (Function Declaration)

/*
function имя(параметры) {
	// тело (код) функции
}*/

//============================================

//Имя функции и её предназначение

/*
Как правило, в имени используются опеределенные префиксы,
обозначающие действие, после которых следует объект действия.

Например, функции, начинающиеся с
"show..." обычно что-то показывают,
"get..." – возвращают значение,
"calc..." – что-то вычисляют,
"create..." – что-то создают,
"check..." – что-то проверяют и возвращают логическое
значение, и т.д.

Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
и т.д.
*/

// Функция вывода сообщения

/*
function showMessage() {
	console.log('Сообщение');
}
*/

/*
Функция должна делать только то,
что явно подразумевается её названием.
И это должно быть одним действием.
Два независимых действия обычно подразумевают две функции,
даже если предполагается, что они будут вызываться вместе (в этом случае мы
можем создать третью функцию, которая будет их вызывать).
*/

//============================================

//Запуск функции

/*
showMessage();

// Функция вывода сообщения
function showMessage() {
	console.log('Сообщение!');
}
showMessage();
showMessage();
*/

//============================================

/*
function getSumm() {
	let numOne, numTwo;

	function getNumOne() {
		numOne = 1;
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(numSumm);
}
getNumOne();
getSumm();
*/

//============================================

// Вложенность и видимость функций

/*
"use strict"
if (2 > 1) {
	function getSumm() {
		let numOne, numTwo;

		function getNumOne() {
			numOne = 1;
		}
		function getNumTwo() {
			numTwo = 2;
		}
		getNumOne();
		getNumTwo();

		let numSumm = numOne + numTwo;
		console.log(numSumm);
	}
}
getSumm();
*/

//============================================

//Локальные и внешние переменные

/*
function showMessage() {
	// Локальная переменная
	let message = "Сообщение";
	console.log(message);
}

console.log(message);
*/

/*
// Внешняя переменная
let message;

function showMessage() {
	// Используется внешняя переменная
	message = "Сообщение";
}
console.log(message);

showMessage();
*/

/*
// Внешняя переменная
let message = "Сообщение №1";

function showMessage() {
	// Локальная переменная
	let message = "Сообщение №2";
	console.log(message);
}
console.log(message);
showMessage();

*/

//============================================

// Глобальные переменные

/*
let globalVar = "Я глобальная переменная";

function getSumm() {
	let numOne, numTwo;

	function getNumOne() {
		numOne = 1;
		console.log(globalVar);
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(globalVar);
}
console.log(globalVar);

getSumm();
*/

//============================================

// Параметры (аргументы)

/*
function calcSumm(numOne = 1, numTwo = 2) {
	console.log(`Переменная numOne:${numOne}`);
	console.log(`Переменная numTwo:${numTwo}`);

	let numSumm = numOne + numTwo;

	console.log(`Сумма:${numSumm}`);
}

calcSumm(5, 5);
*/

/*
numTwo = numTwo || 2;
*/

/*
// Функции-колбэки
function calcSumm(numOne, numTwo, more, less) {
	let numSumm = numOne + numTwo;

	if (numSumm > 3) {
		more();
	} else {
		less();
	}
}

function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm(1, 1, showMoreMessage, showLessMessage);
*/

//============================================

/*
// Возврат результата
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	// Возврат
	return numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(`Сумма: ${funcRezult}`);
*/

/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	if (numSumm >= 3) {
		// Возврат
		return numSumm;
	} else {
		return 'Сумма меньше 3';
	}
	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(funcRezult);
*/

/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	return
	numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(funcRezult);
*/

/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	if (numSumm >= 3) {
		// Возврат
		return;
		// Дальше код не выполняется
	}
}
calcSumm(5, 5)
*/

//============================================

// Рекурсия

/*
function getSumm(numOne, numTwo) {
	let numSumm = calcSumm(numOne, numTwo);

	console.log(numSumm);
}
function calcSumm(numOne, numTwo) {
	return numOne + numTwo;
}
getSumm(5, 5);
*/

/*
function calcSumm(numOne, numTwo) {
	let result = 1;
	// умножаем result на numOne numTwo раз в цикле
	for (let i = 0; i < numTwo; i++) {
		result *= numOne;
	}
	return result;
}
console.log(calcSumm(2, 3));
*/

/*
function calcSumm(numOne, numTwo) {
	if (numTwo === 1) {
		return numOne;
	} else {
		return numOne * calcSumm(numOne, numTwo - 1);
	}
}
console.log(calcSumm(2, 3));
*/

//============================================

/*
let showMessage = function () {
	console.log('Привет!');
};

showMessage();
*/

/*
function getSumm() {
	let summ = 1 + 2;
	console.log(summ);
};

let someVar = getSumm;

someVar();
getSumm();

*/

/*
//Объявление функции (Function Declaration)
function getSumm() {
	let summ = 1 + 2;
	console.log(summ);
};
getSumm();

// Функциональное выражение (Function Expression)
let showMessage = function () {
	console.log('Привет!');
};
showMessage();
*/

/*
'use strict'
if (2 > 1) {
	function getSumm() {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();
*/
/*
let getSumm;

if (2 > 1) {
	getSumm = function () {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();
*/

//============================================

//Функции стрелки(arrow functions)

/*
// Функциональное выражение (Function Expression)
let имя переменной = function (параметр, ...параметр) {
	return выражение;
};

// Cтрелочная функция (arrow function)
let имя переменной = (параметр, ...параметр) => выражение
*/

// Однострочная стрелочная функция

/*
let getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage('Привет', 'Вася'));

// Многострочная стрелочная функция
let getMessage = (text, name) => {
	let message = text + ', ' + name + '!';
	return message;
};
console.log(getMessage('Привет', 'Вася'));
*/

//============================================

// Планирование setTimeout и setInterval

/*
Что бы реализовать планирование существуют два метода:
1.	setTimeout позволяет вызвать функцию один раз
	через определённый интервал времени
2.	setInterval позволяет вызывать функцию регулярно,
	повторяя вызов через определённый интервал времени.
*/

/*
setTimeout(функция или код, задержка, параметр, ...параметр);
setInterval(функция или код, задержка, параметр, ...параметр);
*/

/*
function showMessage(text, name) {
	console.log(`${text}, ${name}!`);
	setTimeout(showMessage, 500, text, name);
}
//setInterval(showMessage, 500, 'Привет', 'Вася');
setTimeout(showMessage, 500, 'Привет', 'Вася');
*/

/*
let result = 0;
function showNumber(num) {
	result += num;
	console.log(result);
	if (result === 5) {
		clearInterval(timeId);
	}
}
let timeId = setInterval(showNumber, 1000, 1);
*/

/*
setTimeout(function () {
	console.log('Привет!');
}, 1000);

setTimeout(() => {
	console.log('Привет!');
}, 1000);
*/

/*
function showMessageOne() {
	console.log("А я первый!");
}
function showMessageTwo() {
	console.log("А я второй(");
}

setTimeout(showMessageTwo, 0);

showMessageOne();
*/

//============================================

// Применение функций

/*
// Функция соединения строк
function createMassage(text, name) {
	return `${text}, ${name}!`;
}
// Функция вывода в консоль
function showMassage(message) {
	console.log(message);
}
// Объединяющая функция, вызывает обе функции
function initMessage(text, name) {
	showMassage(createMassage(text, name));
}

initMessage('Привет', 'Фрилансер');
*/

//============================================

//ДОМАШКА

/*
1. Изучить теорию
2. Решить задачи:


// Задача №1
// Кто попадет в консоль первым Вася или Коля?
function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');
Ответ: Коля

// Задача №2
// Верно ли вызвана функция
showMessage();
function showMessage() {
	console.log('Сообщение');
}
Ответ: Да

// Задача №3
// Верно ли вызвана функция
showMessage();
let showMessage = function () {
	console.log('Сообщение');
}
Ответ: Нет

// Задача №4
// Как решить проблему?
'use strict'
if (2 > 1) {
	function showMessage() {
		console.log('Сообщение');
	}
}
showMessage(); // Error (showMessage is not defined)
Ответ:
if (2 > 1) {
	function showMessage() {
		console.log('Сообщение');
	}
	showMessage();
}
*/

//========================================================================

//======== Video 2 https://www.youtube.com/watch?v=GULFKAX0nxY&list=PLM6XATa8CAG7DDIBjNVd78Fv5Ueo930IV&index=16 ===========

/*
// Создание массива
let arr = new Array(); // Используется редко
let arr = [];
*/

//============================================

// Значения массива

// Получение значений

/*
let arrOne = [
	'Ваня', // 0я позиция
	'Иштван', // 1я позиция
	'Оля', // 2я позиция
];
console.log(arrOne[1]);
console.log(arrOne[5]); // undefined
*/

/*
let arrTwo = [
	"Коля",
	{
		type: "JS",
		age: 36
	},
	true,
	function () {
		console.log('Привет, я Коля');
	}
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();

// Многомерные массивы
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
console.log(matrix);
console.log(matrix[0][1]);
*/

//============================================

/*
// Длина массива. Свойство length
let arrOne = ['Ваня', 'Иштван', 'Оля',];
console.log(arrOne);
console.log(arrOne.length);
*/

/*
arrOne.length = 0;
console.log(arrOne);

// Таким образом, самый простой способ
// очистить массив – это arrOne.length = 0;
*/

//============================================

// Доступ к массиву

/*
Напомню что массив является объектом и, следовательно,
ведёт себя как объект. Например, копируется по ссылке:
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr);

let arrNew = arr;

arrNew.length = 2;

console.log(arr);
*/

//============================================

/*
// Изменение значений
let arr = ['Ваня', 'Иштван', 'Оля',];

// Меняем существующее
arr[0] = 'Коля';
console.log(arr);

// Добавляем новое
arr[3] = 'Ваня';
console.log(arr);
*/

//============================================

// МЕТОДЫ МАССИВОВ

/*
Итак с простеньким разобрались теперь перейдем к методам массивов.
Но перед этим стоит поговорить о вариантах применения для массивов.

Первый из них это очередь или упорядоченная коллекция элементов.
Очередь поддерживает два вида операций:
1. добавление элемента в конец очереди
2. удаление элемента в начале, сдвигая очередь,
	так что второй элемент становится первым.

Другой вариант применения для массивов – структура данных,
называемая стек.
Стек поддерживает два вида операций:
1. добавление элемента в конец
2. удаление последнего элемента

Массивы в JavaScript могут работать и как очередь, и как стек.
Мы можем добавлять/удалять элементы как в начало, так и в конец массива.
И в этом нам помогут следующие методы:
*/

//============================================

// Метод push - добавляет элемент в конец массива

/*
let arr = ['Ваня', 'Иштван', 'Оля',];
arr.push('Вася');
console.log(arr);

arr.push('Дима', 'Катя');
console.log(arr);
*/

//============================================

// Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым.

/*
let arr = ['Ваня', 'Иштван', 'Оля',];
arr.shift();
console.log(arr);
*/

//============================================

// Метод pop  - удаляет последний элемент

/*
let arr = ['Ваня', 'Иштван', 'Оля',];
arr.pop();
console.log(arr);
*/

//============================================

// Метод unshift  - добавляет элемент в начало массива

/*
let arr = ['Ваня', 'Иштван', 'Оля',];
arr.unshift('Вася');
console.log(arr);

arr.unshift('Дима', 'Катя');
console.log(arr);
*/

//============================================

/*
Методы push/pop выполняются быстро, а методы shift/unshift – медленно.

Давайте рассмотрим на примере добавления элемента
в начало массива (unshift);

Просто взять и добавить элемент с номером 0 недостаточно.
Нужно также заново пронумеровать остальные элементы.

Операция unshift должна выполнить 3 действия:
 1. Добавить элемент с индексом 0.
 2. Сдвинуть все элементы вправо, заново пронумеровать их,
	заменив 0 на 1, 1 на 2 и т.д.
 3. Обновить свойство length.

Чем больше элементов содержит массив, тем больше
времени потребуется для того, чтобы их переместить,
больше операций с памятью.

А вот что бы добавить элемент в конец массива (метод push)
не нужно ничего перемещать.
Так же не нужно заново нумеровать элементы. Достаточно
увеличить значение length.
*/

//============================================

// Удаление/добавление/изменение конкретных элементов

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

delete arr[1];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
*/

// Метод splice. Позволяет добавлять, удалять и заменять элементы.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])

/*
// Удаляем элемент
let arrOne = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (Иштван), удаляем один элемент
arrOne.splice(1, 1);
console.log(arrOne);

// Удаляем элемент и возвращаем его в переменную
let arrTwo = ['Ваня', 'Иштван', 'Оля',];
let removed = arrTwo.splice(1, 1);
console.log(removed);

// Заменяем элементы
let arrThree = ['Ваня', 'Иштван', 'Оля',];
// Начиная с нулевой позиции (Ваня), заменяем один элемент
arrThree.splice(0, 1, 'Коля');
console.log(arrThree);

// Добавляем элементы
let arrFour = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (перед 'Иштван'), добавляем два элемента
arrFour.splice(1, 0, 'Коля', 'Маша');
console.log(arrFour);

// Удаляем элемент
let arrFive = ['Ваня', 'Иштван', 'Оля',];
// Начиная с последней позиции (Оля), удаляем один элемент
arrFive.splice(-1, 1);
console.log(arrFive);
*/

//============================================

/*
// Метод slice.
// Cоздаёт новый массив, в который копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) Не включая [end]

// Копируем часть массива
let arrOne = ['Ваня', 'Иштван', 'Оля',];

// Начиная с 1й позиции 'Иштван',
// до 2й позиции 'Оля' (не включая)
let arrTwo = arrOne.slice(1, 2);
console.log(arrTwo);

// Начиная с предпоследней позиции 'Иштван',
// до последней 'Оля' (не включая)
let arrThree = arrOne.slice(-2, -1);
console.log(arrThree);

// Копируем весь массив
let arrFour = arrOne.slice();
console.log(arrFour);
*/

//============================================

/*
// Метод concat.
// Cоздаёт новый массив, в который копирует данные из других массивов
// и дополнительные значения (в конец массива)
// Синтаксис arr.concat(arg1, arg2...)

let arrOne = ['Ваня', 'Иштван', 'Оля',];
let arrTwo = arrOne.concat('Петя');
console.log(arrTwo);
*/

//============================================

// Поиск в массиве

// Методы indexOf/lastIndexOf и includes
// алналоги строковым методам

/*
1. arr.indexOf(item, from) ищет item, начиная с индекса from,
	и возвращает индекс, на котором был найден искомый
	элемент, в противном случае - 1.
2. arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
3. arr.includes(item, from) – ищет item, начиная с индекса from,
	и возвращает true, если поиск успешен.
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

// indexOf
console.log(arr.indexOf('Иштван'));
console.log(arr.indexOf('Вася'));
console.log(arr.indexOf('Иштван', 2));

// includes
console.log(arr.includes('Иштван'));
console.log(arr.includes('Вася'));
console.log(arr.includes('Иштван', 2));
*/

//============================================

// find и findIndex
// поиск в массиве объектов с пределённым условием

/*
// Синтаксис
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
*/

/*
let arr = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]

let resultOne = arr.find(function (item, index, array) {
	return item.age === 18;
});

//let resultOne = arr.find(item => item.age === 18);
console.log(resultOne);

//findIndex
let resultTwo = arr.findIndex(item => item.age === 18);
console.log(resultTwo);
*/

//============================================

// filter
// Метод ищет все элементы, на которых функция-колбэк вернёт true.

/*
let results = arr.filter(function (item, index, array) {
	// если true - элемент добавляется к результату, и перебор продолжается
	// возвращается пустой массив в случае, если ничего не найдено
});
*/

/*
let arr = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]
let result = arr.filter(function (item, index, array) {
	return item.age >= 18;
});
console.log(result);
*/

//============================================

// Сортировка массивов

/*
// Сотритовка слов
let arrOne = ['Иштван', 'Ваня', 'Оля'];
console.log(arrOne.sort());

// Сотритовка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// По умолчанию элементы сортируются как строки.
// Для строк применяется лексикографический порядок,
// и действительно выходит, что "8" > "22".
console.log("8" > "22");
*/

//============================================

// Метод sort(fn)
// сортирует массив на месте, меняя в нём порядок элементов.

/*
// Сотритовка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// Функция сортировки

function compareNumeric(a, b) {
	console.log(`Сравниваем ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;

	//return a - b
}

//console.log(arrTwo.sort((a, b) => a - b));

console.log(arrTwo.sort(compareNumeric));
*/

/*
// Метод reverse
// меняет порядок элементов в массиве на обратный.

let arrOne = ['Ваня', 'Иштван', 'Оля'];
console.log(arrOne.reverse());
*/

//============================================

// Преобразование массивов

// Метод map.
// вызывает функцию для каждого элемента массива
// и возвращает массив результатов выполнения этой функции.

/*
let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

let result = arr.map(function (item, index, array) {
	return item[0];
});
//let result = arr.map(item => item[0]);
console.log(arr);
console.log(result);
*/

/*
 Метод split преобразовывает строку в
 массив по заданному разделителю
 Синтаксис: str.split(delim)
*/

/*
let str = 'Ваня,Иштван,Оля';

let arr = str.split(',');
console.log(arr);

// Можно ограничить кол-во объектов
// которые попадут в массив

let arrTwo = str.split(',', 2);
console.log(arrTwo);
*/

/*
 Метод join преобразовывает массив в
 строку c заданным разделителем
 Синтаксис: arr.join(glue)
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];
let srt = arr.join('.');
console.log(srt);

// Получение строки из массива
let arrTwo = ['Ваня', 'Иштван', 'Оля'];
console.log(String(arrTwo));
*/

//============================================

// Проверка Array.isArray()

/*
Напомню, массивы не образуют отдельный тип данных.
Они основаны на объектах.
*/

/*
let obj = {};
let arr = [];

console.log(typeof obj);
console.log(typeof arr);
*/

// Как же нам узнать где массив а где нет?

/*
if (Array.isArray(obj)) {
	console.log('Это массив!');
} else {
	console.log('Это не массив!');
}
*/

//============================================

// Перебор элементов

/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr.length);

// Цикл FOR
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
*/

//============================================

// Цикл FOR...OF

// Можно использовать для вывода значений

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

for (let arrItem of arr) {
	console.log(arrItem);
}
*/

//============================================

// Метод перебора forEach

// Выполняет функцию для каждого элемента массива

/*
arr.forEach(function (item, index, array) {
	// ... делать что-то с item
});
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

arr.forEach(function (item, index, array) {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});
*/

/*
// Стрелочная функция
arr.forEach((item, index, array) => {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

arr.forEach(show);

function show(item) {
	console.log(item);
}
*/

//============================================

// Методы reduce/reduceRight

/*
Итак, мы выяснили что если нам нужно перебрать
массив – мы можем использовать forEach, for или for..of.
Если нам нужно перебрать массив и вернуть
данные для каждого элемента – мы используем map.

Методы arr.reduce и arr.reduceRight похожи на эти методы,
но они немного сложнее и используются для вычисления
какого-нибудь единого значения на основе всего массива.
*/

/*
// Синтаксис
let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, [initial]);
*/

/*
К привычным нам аргументам item, index, array
добавляется previousValue:

previousValue – результат предыдущего вызова этой функции,
равен initial при первом вызове (если передан initial),
item – очередной элемент массива,
index – его индекс,
array – сам массив.

Функция применяется по очереди ко всем элементам
массива и «переносит» свой результат на следующий вызов.
*/

/*
let arrOne = [1, 2, 3, 4];
let reduceValueOne = arrOne.reduce(function (previousValue, item, index, array) {
	return item + previousValue;
}, 0);
console.log(reduceValueOne);
*/

/*
Шаг №1
previousValue = 0
item = 1
их сумма = 1

Шаг №2
previousValue = 1
item = 2
их сумма = 3

Шаг №3
previousValue = 3
item = 3
их сумма = 6

Шаг №4
previousValue = 6
item = 4
их сумма = 10
*/

/*
let arrArrow = [1, 2, 3, 4];
let reduceValueArrow = arrArrow.reduce((pValue, item) => item + pValue, 0);
console.log(reduceValueArrow);
*/

/*
let arrTwo = ['Ваня', 'Иштван', 'Оля',];

Если не указать начальное значение, то оно будет равно
первому элементу массива (previousValue=Ваня)
А работа метода начнется со второго элемента (item=Иштван)
*/

/*
let reduceValueTwo = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
	console.log(item);
	return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);
*/

// Метод arr.reduceRight работает аналогично,
// но проходит по массиву справа налево.

//============================================

// Массив используем как массив

/*
Следует помнить, что массив является объектом и,
следовательно, ведёт себя как объект.
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(typeof arr);

// Добавление нечислового свойства
arr.name = "Коля";
console.log(arr);
*/

/*
Но то, что действительно делает массивы особенными – это их внутреннее
представление. Движок JavaScript старается хранить элементы
массива в непрерывной области памяти, один за другим.
Существуют и другие способы оптимизации, благодаря которым
массивы работают очень быстро.

Но все они утратят эффективность, если мы перестанем работать
с массивом как с «упорядоченной коллекцией данных» и начнём
использовать его как обычный объект.

Варианты неправильного применения массива:
1. Добавление нечислового свойства, например: arr.test = 5.
2. Создание «дыр», например: добавление arr[0],
	затем arr[1000](между ними ничего нет).
3. Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.
*/

//============================================

//ДОМАШКА

/*
1. Изучить теорию
2. Решить задачи:
*/

// Задача №1.
/*
// Какое число (длинну) мы получим?
let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
*/

// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/

// Задача №3.
/*
// Удалить элемент 'Иштван' и возвратить его в переменную
let arr = ['Ваня', 'Иштван', 'Оля',];
*/

// Задача №4.
/*
//Сделать из строки массив
let str = 'Ваня,Иштван,Оля';
*/

// Задача №5.
/*
// Чему равен previousValue в начале работы метода?
let arr = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});
*/

//========================================================================

//======== Video 3 https://www.youtube.com/watch?v=DuWyc76lYC4&list=PLM6XATa8CAG7DDIBjNVd78Fv5Ueo930IV&index=17 ===========

// WINDOW

/*
const windowWidth = window.innerWidth;
console.log(`Ширина окна браузера: ${windowWidth}px`);
*/

//============================================

//BOM

//Navigator

/*
С помощью объекта navigator,
мы можем получить информацию о самом
браузере и операционной системе.
*/

/*
//Браузер
console.log(navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox');
}
//Платформа
console.log(navigator.platform);
*/

//============================================

//Location

/*
С помощью объекта location мы можем
получить текущий URL или
перенаправить браузер по новому адресу.
*/

/*
//Получаем URL
console.log(location.href);
//Меняем URL
location.href = "https://fls.guru";
*/

//============================================

//History

/*
Объект history позволяет
управлять историей браузера,
передвигаться по посещенным ранее страницам.
*/

/*
history.back();
history.forward();
*/

//============================================

//Alert
//alert("Привет!");

//Сonfirm
//const confirmResult = confirm("Хочешь научиться верстать?");
//console.log(confirmResult);

//Prompt
//const promptResult = prompt("Кто ты по жизни?");
//console.log(promptResult);

//============================================

// DOM
// Навигация по документу

/*
Самые верхние элементы дерева
доступны как свойства объекта document
*/

/*
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);
*/

//============================================

// Получаем объект body
//const bodyElement = document.body;

// Первый и последний дочерние элементы
//const firstChildNode = bodyElement.firstChild;
//const lastChildNode = bodyElement.lastChild;

//console.log(firstChildNode);
//console.log(lastChildNode);

/*
В документе, возможено, есть ещё «какой-то HTML-код»,
но на момент выполнения скрипта браузер ещё
до него не дошёл.
Поэтому следует размещать скрипт в самом конце
документа
*/

//============================================

//Коллекция childNodes содержит список всех детей,
//включая текстовые узлы.
//const childNodes = bodyElement.childNodes;
//console.log(childNodes);

//Для проверки наличия дочерних узлов
//существует также специальная функция hasChildNodes()
//console.log(bodyElement.hasChildNodes());

/*
Как мы уже видели,
childNodes похож на массив. На самом деле это не массив,
а коллекция – особый перебираемый объект - псевдомассив.

Отличия от массивов:
1.Для перебора коллекции мы можем использовать for..of:
2.Методы массивов не будут работать, потому что
коллекция – это не массив
*/

/*
//Перебор коллекции
for (let node of childNodes) {
	console.log(node); // покажет все узлы из коллекции
}
*/

// "Живые" коллекции

/*
Почти все DOM-коллекции, за небольшим исключением, "живые".
Другими словами, они отражают текущее состояние DOM.
Если мы сохраним ссылку на body.childNodes и добавим/удалим
узлы в DOM, то они появятся в сохранённой коллекции автоматически.
Еще вернемся к этому позже.
*/

//Только для чтения

/*
DOM-коллекции, и даже более – все навигационные свойства,
перечисленные далее, доступны только для чтения.
Мы не можем заменить один дочерний узел на другой,
просто написав childNodes[i] = ....
Для изменения DOM требуются другие методы.
*/

//============================================

/*
// Соседние и родительский узлы
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);
*/

//============================================

/*
Навигационные свойства, описанные выше, относятся
ко всем узлам в документе.
В частности, в childNodes находятся и текстовые узлы и
узлы-элементы и узлы-комментарии, если они есть.
*/

// Получаем коллекцию всех дочерних узлов
//const childNodes = bodyElement.childNodes;
//console.log(childNodes);

/*
Но для большинства задач текстовые узлы и
узлы-комментарии нам не нужны. Мы хотим манипулировать
узлами-элементами, которые представляют собой теги и
формируют структуру страницы.
*/

// Получаем коллекцию всех дочерних элементов
//const bodyСhildren = bodyElement.children;
//console.log(bodyСhildren);

/*
// Первый и последний дочерние элементы
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild);
console.log(lastChild);

// Соседние и родительский элементы
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);
*/

//============================================

// Поиск произвольного элемента

/*
// Поиск по селектору класса
const elemsOne = document.querySelectorAll('.lesson__list');
console.log(elemsOne);

// Поиск по селектору тега
const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);

// Поиск по смешанному селектору тега и класса
const elemsThree =
	document.querySelectorAll('li.lesson__item-list');
console.log(elemsThree);

// Поиск по тегу первого уровня вложенности
const elemsFour =
	document.querySelectorAll('.lesson__list>li');
console.log(elemsFour);

// Поиск по нескольким классам
const elemsFive =
	document.querySelectorAll('.lesson__list, .lesson__text');
console.log(elemsFive);

// Поиск по вложенным классам
const elemsSix =
	document.querySelectorAll('.lesson__list .lesson__text');
console.log(elemsSix);

// Поиск по ID
const elemsSeven =
	document.querySelectorAll('#listItem');
console.log(elemsSeven);

// Поиск по атрибуту
const elemsEight =
	document.querySelectorAll('[data-item]');
console.log(elemsEight);

// Поиск по атрибуту со значением
const elemsNine =
	document.querySelectorAll('[data-item="85"]');
console.log(elemsNine);
*/

//============================================

// querySelectorAll - статичная коллекция

// Получение конкретного элемента коллекции
//const elems = document.querySelectorAll('li');
//console.log(elems[2]);

/*
for (const item of elems) {
	console.log(item);
}
*/

/*
elems.forEach(item => {
	console.log(item);
});
*/

//============================================

// Искать можно не только в document

/*
const subList = document.querySelectorAll('.lesson__sub-list');
const subItems = subList[0].querySelectorAll('li');
console.log(subItems);
*/

//============================================

// Неожиданный результат поиска

/*
const subList =
	document.querySelectorAll('.lesson__sub-list');
const listItems =
	subList[0].querySelectorAll('.lesson__list .lesson__item-sub-list');
console.log(listItems);
*/

/*
В данном примере,
когда мы выбрали ".lesson__list .lesson__item-sub-list"
в контексте <ul> с классом "lesson__sub-list", элемент с классом
".lesson__item-sub-list" были всё равно найден, хотя
.lesson__list не является потомком элемента в котором происходил
поиск (".lesson__sub-list").

По умолчанию, querySelectorAll() проверяет только последний
элемент без учёта контекста.
*/

//============================================

//elem.querySelector(CSS);

/*
Возвращает первый элемент внутри elem, соответствующий
данному CSS-селектору.
*/

/*
//const lessonList = document.querySelectorAll('.lesson__list')[0];
const lessonList = document.querySelector('.lesson__list');
console.log(lessonList);
*/

//============================================

//document.getElementById(ID)

/*
Если у элемента есть атрибут id,
то мы можем получить его вызовом document.getElementById(id),
где бы он ни находился.
*/

/*
const elem = document.getElementById('listItem');
console.log(elem);
*/

/*
1. id - уникален
2. Поиск полько внутри document.
*/

//-------

/*
elem.getElementsByTagName(tag)
ищет элементы с данным тегом и возвращает их
коллекцию.Передав "*" вместо тега, можно получить всех потомков.
*/

/*
const elems = document.getElementsByTagName('li');
console.log(elems);
*/

//-------

/*
elem.getElementsByClassName(className)
возвращает элементы, которые имеют данный CSS - класс.
*/

/*
const elems = document.getElementsByClassName('lesson__item-list');
console.log(elems);
*/

//-------

//document.getElementById(ID) и elem.getElementsBy*

/*
На данный момент, они используются редко,
так как querySelectorAll может их заменить.
Но отличия все же есть!
*/

//getElementsBy*

// ВНИМАНИЕ - getElementsBy.. а не getElementBy..

/*
document.getElementsByName(name) возвращает элементы с
заданным атрибутом name.Очень редко используется.
Поиск полько внутри document.
*/

/*
const elems = document.getElementsByName('list');
console.log(elems);
*/

//============================================

// Живая статическа коллекции

/*
// Получаем статическую коллекцию
const listStatic = document.querySelectorAll('.lesson__item-list');

// Получаем "живую" коллекцию
const listLive = document.getElementsByClassName('lesson__item-list');

console.log(listStatic);
console.log(listLive);

// Создаем новый HTML-объект.
const lessonList = document.querySelector('.lesson__list');
lessonList.insertAdjacentHTML(
	"beforeend",
	'<li class="lesson__item-list">Новый пункт</li>'
);
*/

//============================================

//closest

/*
Метод elem.closest(css) ищет ближайшего предка,
который соответствует CSS - селектору.Сам элемент
также включается в поиск.

Предки элемента это родитель, родитель родителя,
его родитель и так далее.Вместе они образуют цепочку
иерархии от элемента до вершины.

Другими словами, метод closest поднимается вверх от
элемента и проверяет каждого из родителей.Если он
соответствует селектору, поиск прекращается. Метод возвращает
либо предка, либо null, если такой элемент не найден.

Напомню свойство parentElement возвращает только
непосредственного родителя элемента
*/

/*
const elem = document.querySelector('.lesson__item-sub-list');
const parentList = elem.closest('.lesson__list');
console.log(parentList);
*/

/*
Очень полезный метод, часто используется для проверки
на существование того или иного родителя, либо для изменения
родителя конкретного элемента
*/

//============================================

// Проверка matches

/*
ничего не ищет, а проверяет, удовлетворяет ли
элемент CSS-селектору, и возвращает true или false.
*/

/*
const elems = document.querySelectorAll('.lesson__item-list');
for (let elem of elems) {
	if (elem.matches('[class$="lesson__item-list_red"]')) {
		console.log('Крассный');
	} else if (elem.matches('[class$="lesson__item-list_blue"]')) {
		console.log('Синий');
	}
}
*/

//============================================

/*
Стоит добавить, что получив объект тем или иным способом
мы можем применять свойства навигации о которых говорили ранее
*/

/*
const text = document.querySelector('.lesson__text');
const list = text.nextElementSibling;
console.log(list);
*/

//============================================

// Изменение документа

/*
// Cодержимое элемента innerHTML

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

// Перезаписываем содержимое объекта
textElement.innerHTML = `Живи, а работай в свободное время!`;

// Дописываем содержимое объекта
textElement.innerHTML =
	`<p>${textElementContent}</p> <p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`;

console.log(textElement.innerHTML);
*/

//============================================

/*
// Cодержимое элемента целиком outerHTML

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть"
// вместе с HTML, а также сам элемент
const textElementContent = textElement.outerHTML;
console.log(textElementContent);


textElement.outerHTML = `<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`;

console.log(textElement.outerHTML);
*/

//============================================

// Просто текст элемента textContent

/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');
const textElementContent = textElement.textContent;
console.log(textElementContent);
*/

/*
Полезная возможность textContent - записывать
текст «безопасным способом».
*/

/*
textElement.textContent = `<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`;

console.log(textElement.textContent);
*/

/*
Мы не хотим, чтобы на сайте появлялся произвольный HTML-код.
Присваивание через textContent – один из способов от
этого защититься.
*/

//============================================

/*
// data.
// Cодержимое текстового узла/комментария

// Получаем объект
const textElement = document.querySelector('.lesson__text');
const getComment = textElement.nextSibling;

console.log(getComment);
console.log(getComment.data);

// Изменение текстового узла/комментария
getComment.data = 'Привет';
console.log(getComment.data);
*/

//============================================

/*
// Создание элементов и узлов.

// Создание нового элемента (тега)
const newElement = document.createElement('div');

// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;
console.log(newElement);

// Создание нового текстового узла
const newText = document.createTextNode('Привет!');
console.log(newText);
*/
/*
Созданные объекты находятся в константах,
но не являются частью документа
*/

//============================================

// Методы вставки

/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Создание нового элемента (тега)
const newElement = document.createElement('div');
// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;
*/

// Вставляем новый элемент...

//...перед объектом
//textElement.before(newElement);

//...после объекта
//textElement.after(newElement);

//...внутрь и в начало объекта
//textElement.prepend(newElement);

//...внутрь и в конец объекта
//textElement.append(newElement);

// Вставка нескольких фрагментов сразу
//textElement.append(newElement, "Привет!");

/*
// Можно вставлять строку
textElement.append(`Живи, а работай в
	<span class="yellow">свободное</span> время!`);
*/
/*
Другими словами, строки вставляются безопасным способом,
как делает это textContent. Поэтому эти методы могут
использоваться только для вставки DOM-узлов или
текстовых фрагментов. А что, если мы хотим вставить
HTML именно "как HTML", со всеми тегами и прочим,
как это делает innerHTML?
*/

//============================================

// insertAdjacentHTML/Text/Element

/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Вставляем текст, HTML, элемент
textElement.insertAdjacentHTML(
	'afterend',
	`<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`
);
*/

/*
"beforebegin" – вставить html непосредственно перед textElement,
"afterbegin" – вставить html в начало textElement,
"beforeend" – вставить html в конец textElement,
"afterend" – вставить html непосредственно после textElement.
*/

//============================================

/*
Дополнительно существуют
insertAdjacentText и insertAdjacentElement
*/

/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Вставляем текст
textElement.insertAdjacentText(
	'beforeend',
	`Живи, а работай в
	<span class="yellow">свободное</span> время!`
)
// Создание нового элемента (тега)
const newElement = document.createElement('div');
// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;

// Вставляем элемент
textElement.insertAdjacentElement(
	'beforeend',
	newElement
);
*/

/*
На практике часто используется только insertAdjacentHTML.
Потому что для элементов и текста у нас есть методы
append/prepend/before/after – их быстрее написать,
и они могут вставлять как узлы, так и текст.
*/

//============================================

// Перенос элемента

/*
Мы можем вставлять не только новые узлы,
но и переносить существующие.
Все методы вставки автоматически
удаляют узлы со старых мест.
*/

/*
// Получаем объект
const lessonBlock = document.querySelector('.lesson');
// Получаем объект
const title = document.querySelector('h3');

// Переносим title в конец блока lessonBlock
lessonBlock.append(title);
*/

//============================================

// Клонирование узлов cloneNode

/*
Если нужен не перенос а именно копия элемента
*/

/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Клонирование без дочерних элементов
//const cloneTextElement = textElement.cloneNode();

// Глубокое клонирование вместе с содержимым
const cloneTextElement = textElement.cloneNode(true);

const lessonBlock = document.querySelector('.lesson');
lessonBlock.append(cloneTextElement);
*/

//============================================

/*
// Удаление узлов

// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Удаляем объект
textElement.remove();
*/

//============================================

// Стили и классы

// Управление классами
// Свойства className и classList

/*
Изменение класса является одним
из наиболее часто используемых действий в JavaScript.
*/

/*
// Свойство className

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Получаем имена классов
const elementClassNames = element.className;
console.log(elementClassNames);

// Перезаписываем имя класса
element.className = "red";
*/

//============================================

// Свойство classList

/*
Специальный объект с методами для добавления/удаления
одного класса.
*/

// Получаем элемент
//const element = document.querySelector('.lesson__item-list_red');

/*
// Добавить класс
element.classList.add('active');
// Удалить класс
element.classList.remove('active');
// Добавить класс, если его нет, а если есть удалить.
element.classList.toggle('active');
// Проверка наличия класса, возвращает true/false.
element.classList.contains('active');
*/

/*
// Добавляем класс
element.classList.add('active');
// Проверяем наличие класса
if (element.classList.contains('active')) {
	console.log(`У element есть класс active!`);
}
*/

//classList является перебираемым, поэтому можно
//перечислить все классы при помощи for..of

/*
for (let className of element.classList) {
	console.log(className);
}
*/

//============================================

// Управление стилями

// element.style

/*
// Задаем стиль с помощью CSS свойства
element.style.color = "red";

// Для свойства из нескольких слов используется camelCase:
// margin-bottom
element.style.marginBottom = "30px";
// z-index
element.style.zIndex = "10";
// и т.д.

// Каждое свойство пишется отдельно

// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.marginBottom);

// Сброс стиля
element.style.marginBottom = "";

//---------------
*/

/*
//Полная перезапись стилей
//style.cssText

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

element.style.cssText = `
	margin-bottom: 30px;
	color:red;
`;
*/

//============================================

//Вычисленные стили. getComputedStyle(element, [pseudo])

/*
// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.fontSize);

// Стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);

// Стиль псевдоэлемента
const elementBeforeStyle = getComputedStyle(element, "::before");
console.log(elementBeforeStyle.backgroundColor);
*/

/*
// Чтобы получить конкретное значение
// Следует писать точное (полное) свойство

// Получаем точное значение
console.log(elementStyle.paddingLeft);
// Получаем не предсказуемую запись
console.log(elementStyle.padding); // В FF <empty string>
*/

/*
// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Стиль элемента
const elementStyle = getComputedStyle(element);

//Только для чтения
elementStyle.paddingLeft = "50px";
*/

/*
// Лайвхаки

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.paddingLeft);

//Получаем число
const paddingLeft = parseInt(elementStyle.paddingLeft);
console.log(paddingLeft);

//Помним про единицы измерения
element.style.marginLeft = "20px";
*/

/*
Как мы уже поняли, из JS мы можем управлять как классами
так и стилями объекта.

Управлять классами – более приоритетный вариант по
сравнению со стилями.

Манипулировать свойством style следует только в том случае,
если классы нам помочь не могут. Например, при изменении
координатов объекта на лету.

Одним словом, если мы можем возложить решение
той или иной задачи на плечи CSS путем манипуляции с классами,
то так и следует сделать!
*/

//============================================

// Атрибуты и свойства

/*
У разных DOM-элементов могут быть разные свойства.
Например, у тега <a>, есть свойства, связанные со ссылками,
а у тега <input> – свойства, связанные с полем ввода и т.д.

В HTML у тегов могут быть атрибуты.
Когда браузер парсит HTML, чтобы создать
DOM-объекты для тегов, он распознаёт стандартные
атрибуты и создаёт DOM-свойства для них.

Каждый DOM-узел принадлежит соответствующему встроенному классу.
*/

/*
const link = document.querySelector('.lesson__link');
const input = document.querySelector('.lesson__input');

console.log(link.href);
console.log(input.href);

console.log(input.value);
console.log(link.value);

//Получить список доступных свойств
console.dir(link);
*/

//============================================

// Произвольные атрибуты

//Получаем элемент
//const lessonText = document.querySelector('.lesson__text');

/*
//Проверяем наличие атрибута.
lessonText.hasAttribute('name');
//Получаем значение атрибута.
lessonText.getAttribute('name');
//Устанавливаем значение атрибута.
lessonText.setAttribute('name', 'value');
//Удаляем атрибут.
lessonText.removeAttribute('name');
*/

/*
// Пример
// Устанавливаем значение атрибута
lessonText.setAttribute('some-attribute', 'some-value');
//Проверяем наличие атрибута
if (lessonText.hasAttribute('some-attribute')) {
	console.log('some-attribute существует!');
}
*/

//============================================

// Синхронизация между атрибутами и свойствами

/*
Мы можем обратиться к тому или иному свойству через
методы доступа к атрибутам.
Когда стандартный атрибут изменяется, соответствующее
свойство автоматически обновляется.
Это работает и в обратную сторону (за некоторыми исключениями).
*/

//Получаем элемент
//const input = document.querySelector('.lesson__input');

/*
input.setAttribute('id', '123');
console.log(input.id);

input.id = "321";
console.log(input.getAttribute('id'));
*/

// НО

/*
input.setAttribute('value', 'Привет!');
console.log(input.value);

input.value = "Как дела?";
console.log(input.getAttribute('value'));
*/

//============================================

// Нестандартные атрибуты, dataset

/*
Мы уже использовали произвольные атрибуты,
но это рискованно.

Все атрибуты, начинающиеся с префикса «data-»,
зарезервированы для использования программистами.
Они доступны в свойстве dataset.
*/

/*
//Получаем элемент
const lessonText = document.querySelector('.lesson__text');

//Получаем data-атрибут
console.log(lessonText.dataset.size);

//Перезаписываем data-атрибут
lessonText.dataset.size = "5810";
console.log(lessonText.dataset.size);

// data-size-value
console.log(lessonText.dataset.sizeValue);
*/

//============================================

// Полезные свойства

/*
const link = document.querySelector('.lesson__link');

//Получаем тег элемента
console.log(link.tagName);

//Скрыть/показать элемент
link.hidden = true;
console.log(link.hidden);
*/

//============================================

//ДОМАШКА

/*
1. Изучить теорию
2. Решить задачи:
*/

/*
// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
<div data-say-hi="yes">Привет!</div>

// Задача №2.
// Получить в переменную элемент с текстом Йончи
<ul>
	<li>Корчи</li>
	<li>Йончи</li>
</ul>

// Задача №3.
// Получить в переменную коллекцию элементов с классом like
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>

// Задача №4.
// Куда добавится <li>Текст</li> ?

// JS
const list = document.querySelectorAll('ul');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);

// HTML
<ul>
	<li>Пункт №1</li>
	<li>Пункт №2</li>
</ul>
*/

//========================================================================

//======== Video 4 https://www.youtube.com/watch?v=TEeKr2ON66A&list=PLM6XATa8CAG7DDIBjNVd78Fv5Ueo930IV&index=17 ===========

// Размеры окна браузера
// clientWidth и clientHeight

/*
// Доступная ширина и высота окна
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

// Ширина и высота окна вместе с полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);
*/

//============================================

// Ширина и высота документа
// включая прокрученную часть

/*
let scrollWidth = Math.max(
document.body.scrollWidth, document.documentElement.scrollWidth,
document.body.offsetWidth, document.documentElement.offsetWidth,
document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
document.body.scrollHeight, document.documentElement.scrollHeight,
document.body.offsetHeight, document.documentElement.offsetHeight,
document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);
*/

//============================================

// Получить кол-во прокрученных пикселей
// Только для чтения

/*
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);
*/

//============================================

// Управление прокруткой страницы

/*
// Метод scrollBy(x,y) прокручивает страницу относительно
// её текущего положения.

function setScrollBy() {
window.scrollBy(0, 50);
const windowScrollTop = window.pageYOffset;
console.log(windowScrollTop);
}
*/

//============================================

// Метод scrollTo(pageX, pageY) прокручивает страницу
// на абсолютные координаты(pageX, pageY).
// тоже самое что и window.scroll()

/*
function setScrollTo() {
	window.scrollTo(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}

function setScrollToOptions() {
	window.scrollTo({
		top: 500,
		left: 0,
		// smooth, instant,
		// либо auto; по умолчанию auto
		behavior: "smooth"
	});
}
// Опции не работают в Safari
*/

//============================================

/*
Вызов elem.scrollIntoView(top) прокручивает страницу,
чтобы elem оказался вверху.У него есть один аргумент:

- если top = true(по умолчанию), то страница будет прокручена,
чтобы elem появился в верхней части окна.
Верхний край элемента совмещён с верхней частью окна.
- если top = false, то страница будет прокручена, чтобы elem
появился внизу.Нижний край элемента будет совмещён с нижним краем окна.
*/

/*
function setScrollIntoView(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView({
		//"start", "center", "end" или "nearest". По умолчанию "center".
		block: "center",
		//"start", "center", "end" или "nearest". По умолчанию "nearest".
		inline: "nearest",
		// "auto" или "smooth". По умолчанию "auto".
		behavior: "smooth"
	});
}
// Опции не работают в Safari
*/

//============================================

/*
// Запретить прокрутку
function setEnableDisableScroll() {
	//document.body.style.overflow = "hidden";
	document.body.classList.toggle('scroll-lock');
}
*/

/*
Для прокрутки страницы из JavaScript её DOM должен
быть полностью построен.
Например, если мы попытаемся прокрутить страницу
из скрипта в <head>, это не сработает.
*/

//============================================

// Метрики элементов на странице

// Получаем объект
//const block = document.querySelector('.lesson__block');

// Позиция объекта
// Свойства offsetParent, offsetLeft и offsetTop

// Получаем родительский элемент
// относительно которого позицианирован наш объект
//const elementOffsetParent = block.offsetParent;

/*
Это будет ближайший предок, который
удовлетворяет следующим условиям:

1. Является CSS-позиционированным
	(CSS-свойство position равно absolute, relative, fixed или sticky)
2. или теги <td>, <th>, <table>,
3. или <body>.
*/

//console.log(elementOffsetParent);

/*
Cитуации, в которых offsetParent равно null:
1. Для скрытых элементов
	(с CSS - свойством display: none или когда его нет в документе).
2. Для элементов <body> и <html>.
3. Для элементов с position: fixed.
*/

/*
// Получаем позицию объекта относительно предка (offsetParent)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);
*/

//============================================

// Общие размеры объекта
// offsetWidth и offsetHeight

/*
// Получаем размеры объекта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);
*/

// Метрики для не показываемых элементов равны нулю.

//============================================

// Отступы внутренней части элемента от внешней.
// clientTop и clientLeft

/*
const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);
*/

//============================================

// Размеры объекта без
// рамок и полосы прокрутки
// clientWidth и clientHeight

/*
const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

// общая ширина (offsetWidth) - рамка слева - рамка справа - скролл
// 500 - 20 - 20 - 17 = 443
*/

//============================================

// Размеры объекта включающие в себя
// прокрученную (которую не видно) часть.
// В остальном работают как clientWidth/clientHeight,
// scrollWidth и scrollHeight

/*
const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);
*/

//============================================

// Размеры прокрученной области
// scrollLeft и scrollTop

/*
block.scrollTop = 150;

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);
*/

//============================================

// Методы управления прокруткой
// scrollBy, scrollTo и scrollIntoView
// работают и для объекта

/*
function setElementScrollBy() {
	block.scrollBy({
		top: 20,
		left: 0,
		behavior: "smooth"
	})
}
*/

//============================================

// Координаты

/*
Большинство соответствующих методов JavaScript работают в
одной из двух указанных ниже систем координат:

1. Относительно окна браузера.
	(как position: fixed, отсчёт идёт от верхнего левого угла окна.)
	Принято обозначать clientX/clientY.
2. Относительно документа.
	(как position: absolute относительно <body>, отсчёт идёт от
	верхнего левого угла документа.)
	Принято обозначать pageX/pageY.

Когда страница полностью прокручена в самое начало,
то верхний левый угол окна совпадает с левым верхним
углом документа, при этом обе этих системы координат тоже совпадают.
Но если происходит прокрутка, то координаты элементов в
контексте окна меняются, так как они двигаются,
но в то же время их координаты относительно
документа остаются такими же.
*/

//============================================

// Координаты относительно окна браузера
// getBoundingClientRect

/*
// Получаем объект
const item = document.querySelector('.lesson__item');

// Получаем координаты относительно окна браузера
const getItemCoords = item.getBoundingClientRect();

console.log(getItemCoords);

// Получаем конкретную координату относительно окна браузера
const getItemLeftCoord = item.getBoundingClientRect().left;

console.log(getItemLeftCoord);
*/

//============================================

// Координаты относительно документа
// getBoundingClientRect

/*
// Получаем объект
const item = document.querySelector('.lesson__item');

// Получаем конкретную координату относительно окна браузера
const getItemTopCoord = item.getBoundingClientRect().top;

// Получаем конкретную координату относительно документа
const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;

console.log(getItemTopCoord);
console.log(getItemTopDocumentCoord);
*/

//============================================

// Получение объекта по координатам
// document.elementFromPoint(x, y);

/*
const elem = document.elementFromPoint(100, 100);
console.log(elem);
*/

//============================================

//ДОМАШКА

/*
1. Изучить теорию
2. Решить задачи:
*/

/*
// Задача №1.
Узнать ширину полосы прокрутки

// Задача №2.
Заставьте браузер прокрутиться на 100px сверху
спустя секунду после открытия страницы

// Задача №3.
Получите координаты любых трех элементов на странице
*/

//========================================================================

