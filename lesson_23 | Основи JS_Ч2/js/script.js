// Строгий режим
"use strict"

//======== Video 1 https://www.youtube.com/watch?v=oSO_StIWaXM ===========

//Термины: «унарный», «бинарный», «операнд»

/*
Операнд – это то к чему применяется оператор,
их еще называют аргументами.

/*
//Примеры:
let userAge = 30 - 6; //Числа 30 и 6 - это операнды
//либо
let userHeight = h - y; //Переменные h и y - это операнды
/*

Бинарными называются операторы
которые применяются к двум операндам.
В нашем примере вычитание -, это бинарный оператор.

let userAge = 30 - 6;
*/

/*
Унарным считается оператор, который
применен только к одном операнду, например:

let userCash = -800;
*/

//============================================

/*
//Математика
let x;

//Сложение +
x = 5 + 8;
console.log(`Результат сложения: ${x}`);

//Вычитание -
x = 9 - 5;
console.log(`Результат вычитания: ${x}`);

//Умножение *
x = 2 * 3;
console.log(`Результат умножения: ${x}`);

//Деление /
x = 10 / 2;
console.log(`Результат деления: ${x}`);

//Взятие остатка от деления %
x = 11 % 3;
console.log(`Результат взятия остатка от деления: ${x}`);
//Проверка: 11=3*3(неполное частное от деления)+2(остаток)

//Возведение в степень **.
x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);
//Число 5 умноженное на себя 3 раза. 5*5*5 = 125
*/

//============================================

/*
//Специальные возможности операторов

//Применение оператора сложения к строкам
let resultOne = "Фрилансер" + " " + "по" + " " + "жизни";
console.log(resultOne);

//Если в выражении есть строка, то есть если хотя бы
//один операнд будет строкой, то конечный результат
//тоже будет строкой
let resultTwo = "Фрилансер " + 58;
console.log(resultTwo);
console.log(typeof resultTwo);

//Порядок значения не имеет
let resultThree = 58 + " Фрилансер";
console.log(resultThree);

//Казусы
let resultFour = 2 + "2";
console.log(resultFour);

//Операции до сложения со строкой
//выполняются как обычно
let resultFive = 58 - 20 + " Фрилансер";
console.log(resultFive);
*/

//============================================

/*
//Работа других операторов
let resultOne = "25" - 5;
console.log(resultOne);
console.log(typeof resultOne);

//или

let resultTwo = 10 * "80";
console.log(resultTwo);
console.log(typeof resultOne);

//Недопустимая операция
let resultThree = 3 * "Фрилансер";
console.log(resultThree); //Вернет NaN
console.log(typeof resultOne);
*/

//============================================

//Унарный оператор сложения +

/*
//Со строками
let resultOne = +"25";
console.log(resultOne);
console.log(typeof resultOne);

//С числами
let resultTwo = +10;
console.log(resultTwo);
console.log(typeof resultTwo);
*/

/*
//Пример
let users = "25";
let admins = "10";
console.log(users + admins);

console.log(+users + +admins);

//Более длинная запись
console.log(Number(users) + Number(admins));
*/

//============================================

/*
//Приоритет операторов

//Разный приоритет
let resultOne = 2 - 1 * 5;
console.log(resultOne);

//Скобки
let resultTwo = (2 - 1) * 5;
console.log(resultTwo);

//Одинаковый приоритет
let resultThree = 2 - 1 + 5;
console.log(resultThree);
*/

//============================================

//Оператор присваивания

/*
let a = 1 + 2;
let b = 2;

let result = 8 - (a = b + 3);
console.log("Результат в скобках: " + a);
console.log("Общий результат: " + result);
*/

//============================================

//Присваивание по цепочке

/*
let resultOne = resultTwo = resultThree = 1 + 2;
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);

//Более понятная запись
let resultOne = 1 + 2;

resultTwo = resultOne;
resultThree = resultOne;

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
*/

//============================================

//Сокращённая запись вычислений с присваиванием

/*
let users = 5;
users = users + 3;
users = users * 2;

//Можно записать так:
let users = 5;
console.log(users);
users += 3;
console.log(users);
users *= 2;
console.log(users);

let users = 5;
console.log(users);
users += 1 + 2;
console.log(users);
*/

//============================================

/*
//Инкремент ++
let addUser = 2;
addUser++;
console.log(addUser);

//Работает так же как и
addUser = addUser + 1;
//или
addUser += 1;

//Декремент --
let removeUser = 2;
removeUser--;
console.log(removeUser);
*/

//============================================

/*
Инкремент / декремент можно применить только к переменной.
Попытка использовать его на значении, типа 5++, приведёт к ошибке.

console.log(5++);
*/

//============================================

/*
Операторы++ и-- могут быть расположены
не только после, но и до переменной.
*/

/*
//Постфиксная форма
usersCounter++;
usersCounter--;

//Префиксная форма
++usersCounter;
--usersCounter;
*/

//Примеры:

/*
//Постфиксная форма
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);

//Префиксная форма
let usersCounter = 0;
let newUsers = ++usersCounter;
console.log(newUsers);
*/

/*
Итого, если результат оператора не используется, а нужно только
увеличить / уменьшить переменную, тогда без разницы,
какую форму использовать:

let usersCounter = 0;
++usersCounter;
console.log(usersCounter);
*/

/*
Если хочется тут же использовать
результат, то нужна префиксная форма:

let usersCounter = 0;
console.log(++usersCounter);
*/

/*
Если нужно увеличить и при этом
получить значение переменной
до увеличения – нужна постфиксная форма:

let usersCounter = 0;
console.log(usersCounter++);
console.log(usersCounter);
*/

//============================================

//Инкремент/декремент

/*
инкремент / декремент можно
использовать в любых выражениях.
При этом их приоритет будет выше,
чем у большинства других арифметических операций:
*/

/*
let usersCounter = 0;
let newUsers = 2 * ++usersCounter;
console.log(newUsers);

//Отдельная запись более читабельна:
let usersCounter = 0;
++usersCounter;
let newUsers = 2 * usersCounter;
console.log(newUsers);
*/

//============================================

//Оператор запятая

/*
Предоставляет нам возможность вычислять несколько выражений,
разделяя их запятой ,. Каждое выражение выполняется,
но возвращается результат только последнего.

let usersCounter = (8 + 2, 19 + 1);
console.log(usersCounter);
*/

//============================================

//Побитовые операторы

/*
AND(и) ( & )
OR(или) ( | )
XOR(побитовое исключающее или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )
*/

//============================================

/*
Больше: a > b
Меньше: a < b
Больше или равно: a >= b
Меньше или равно: a <= b
Равно: a == b
Не равно: a != b
Строгое равно: a === b
Строгое не равно: a !== b
*/

/*
Обрати внимание, для сравнения и строгого сравнения
используются двойной или тройной знак равенства ==.
Один знак равенства a = b означал бы присваивание.
*/

//============================================

/*
Операторы сравнения возвращают логический
тип данных со значением true или false:
*/

/*
console.log(2 > 1);
console.log(4 < 2);
console.log(58 == 36);
console.log(8 != 9);

//Присваиваем результат переменной
let result = 11 > 10;
console.log(result);
*/

//============================================

//Сравнение строк

/*
//Алфавитный порядок
console.log('Б' > 'А');

//Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

//Кол-во символов
console.log('Слайдер' > 'Слайд');

//Регистр
console.log('Фрилансер' > 'фрилансер');

Алгоритм сравнения двух строк довольно прост:
1.	Сначала сравниваются первые символы строк.
2.	Если первый символ первой строки больше(меньше),
	чем первый символ второй, то первая строка
	больше(меньше) второй.Сравнение завершено.
3.	Если первые символы равны, то таким же образом
	сравниваются уже вторые символы строк.
4.	Сравнение продолжается, пока не закончится одна из строк.
5.	Если обе строки заканчиваются одновременно,
	то они равны.Иначе, большей считается более длинная строка.
*/

//============================================

/*
//Преобразование в число
console.log('58' > 10);
console.log('007' == 7);

//Логическое значение true
//становится 1, а false – 0.
console.log(true == 1);
console.log(false == 0);
*/

//============================================

//Сравнение разных типов

/*
//Интересные ситуация
let itemA = 0;
let itemB = "0";

console.log(Boolean(itemA));
console.log(Boolean(itemB));

console.log(itemA == itemB);

//Ноль равен false
console.log(0 == false);
*/

//============================================

//Строгое сравнение

/*
оператор строгого равенства или не равенства
проверяет равенство без приведения типов.
*/

/*
console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58);
*/

//============================================

/*
//Строгое равенство
console.log(null === undefined);

//Не строгое равенство
console.log(null == undefined);
*/

//Операторы сравнения

//Сравнение с null и undefined

/*
//Сравнение null и 0
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
*/

/*
//Сравнение undefined и 0
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

Что бы избежать проблем при сравнении нужно очень
осторожно к любому сравнению с undefined / null,
кроме случаев строгого равенства ===.
Не использовать сравнения >= > < <= с переменными,
которые могут принимать значения null / undefined,
разве что ты точно знаешь что делаешь.В любом случае,
если переменная может принимать эти значения,
то стоит добавить для них отдельные проверки.
*/

//============================================

//Логические операторы

//Существуют три логических оператора:

/*
ИЛИ: ||
И: &&
НЕ: !
*/

/*
//Оператор || (ИЛИ)
Оператор ИЛИ, записывается как две вертикальные черты.
Процесс его работы следующий:
1.	Вычисляет операнды слева направо.
2.	Каждый операнд конвертирует в логическое значение.
	Если результат true, останавливается и возвращает
	исходное значение этого операнда.
3.	Если все операнды являются ложными(false), возвращает
	значение последнего из них.
*/

/*
//Булевые значения
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);
*/

//============================================

/*
//Разные типы

//Первый true это 1
console.log(1 || 0);
//Первый true это true
console.log(true || 'фрилансер');
//Первый true это 58
console.log(null || 58);
//Первый true это фрилансер
console.log(null || 'фрилансер' || 0);
//true нет совсем, вернет последнее значение - 0
console.log(undefined || '' || null || 0);
*/

//============================================

/*
//Присвоение значения в переменную
let userName = '';
let userNickName = '';

let user = userName || userNickName || "Без имени";
console.log(user);
*/

//============================================

/*
//Cокращённое вычисление. Условие.
let admins = 10;
let users = 5;
admins > users || users++;
console.log(users);
*/

//============================================

/*
Сдледующий логический оператор это И. Пишется как два
амперсанда && выполняет следующие действия:
1.	Вычисляет операнды слева направо.
2.	Каждый операнд преобразует в логическое значение.
	Если результат false, останавливается и возвращает исходное
	значение этого операнда.
3.	Если все операнды были истинными, возвращает значение
	последнего.
*/

/*
//Булевые значения
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
*/

//============================================

/*
//Разные типы

//Пример 1. 0 - false
console.log('Фрилансер' && 0 && 2 && 3);
//Пример 2. null - false
console.log(1 && 2 && null && 3);
//Пример 3. Все true
console.log('15' && '42');
*/

/*
//Подобие условия
let users = 0;
(users > 0) && console.log(`Пользователей ${users}`);
*/

//============================================

//Оператор ! (НЕ)

/*
Выполняет следующие действия:
1. Сначала приводит аргумент к логическому типу true / false.
2. Затем возвращает противоположное значение.
*/

/*
//Булевые значения
console.log(!true);

//Разные типы
console.log(!null);
console.log(!1);
console.log(!'');
console.log(!'фрилансер');
*/

/*
Приоритет НЕ ! является наивысшим из всех логических операторов,
поэтому он всегда выполняется первым, перед && или ||.
*/

//console.log(!true && 58 || 18 && !1);

/*
//Используется для преобразования типа в boolean
console.log(!!'фрилансер');
//или
console.log(Boolean('фрилансер'));
*/

//============================================

//Оператор объединения с null (??)

/*
Оператор ?? возвращает первый аргумент,
если он не null / undefined, иначе второй.
*/

/*
let name = 'Фрилансер';
console.log(name ?? "Без имени");
*/

//============================================

//ДОМАШКА

/*
1. Изучить теорию
2. Какой или какие из вариантов не верны:
*/

/*
//Вариант №1 - Нет
console.log('35' + - "22");
//Вернет 13

//Вариант №2 - Да
console.log('35' * "22");
//Вернет 770

//Вариант №3 - Нет
console.log('558' > 22++);
//Вернет true

//Вариант №4 - Нет
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
//Вернет 1

//Вариант №5 - Да
console.log(!false && 11 || 18 && !'');
//Вернет 18

//Вариант №6 -Да
let name = 0;
console.log(name ?? "Без имени");
//Вернет 0
*/

//========================================================================

//======== Video 2 https://www.youtube.com/watch?v=tFyRhDZgHaU ===========

/*
if (2 > 5) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
let first = 5;
let second = 5;

if (first === second) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
//Более сложное условие
if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
//Преобразование типов
if ("") {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
//Более короткая запись
//Код выполняется только если
//выражение в скобках вернет true
if (2 > 1) console.log(message);
*/

/*
if (58 / 2 > 80) {
	console.log(message);
} else {
	console.log('Условие не выполнено :(');
}
*/

/*
if (number > 10) {
	console.log(message);
} else {
	console.log('Условие не выполнено :(');
}*/

/*
if (number > 50) {
	console.log('5 больше 50');
} else if (number > 30) {
	console.log('5 больше 30');
} else if (number > 10) {
	console.log('5 больше 10');
} else if (number > 1) {
	console.log('5 больше 1');
} else {
	console.log('Условие не выполнено :(');
}
*/

/*
//Условный оператор "?"
let message = "Привет";

let messageEnd;
if (5 > 1) {
	messageEnd = ", Вася!";
} else {
	messageEnd = ", Оля!";
}

let messageEnd = 5 > 10 ? ", Вася!" : ", Оля!";

message += messageEnd;
console.log(message);

let message = 5 > 10 ? "Привет, Вася!" : "Привет, Оля!";
console.log(message);
*/

//============================================

//ДОМАШКА

/*
1. Изучить теорию
2. Какой или какие из вариантов не верны:
*/

/*
//Вариант №1
if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}

//Вариант №2
if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Вариант №3
let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);

//Вариант №4
if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Истина!');
}
*/

//========================================================================

//======== Video 3 https://www.youtube.com/watch?v=QjDzp-yM_To ===========

// Цикл WHILE

/*
// Синтаксис
while (Условие) {
	// Тело цикла
	// Тут будет выполняться код
}
*/

/*
// Пример
let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}
*/

/*
// Пример
let num = 5;
while (num) {
	console.log(num);
	num--;
}
*/

/*
// Пример без {}
let num = 5;
while (num) console.log(num--);
*/

/*
// Конструкция DO...WHILE
let num = 0;
do {
	console.log(num);
	num++;
} while (num < 0);
*/

//============================================

// Цикл FOR

/*
// Синтаксис
for (Начало; Условие; Шаг) {
	// Тело цикла
	// Тут будет выполняться код
}
*/

/*
// Пример
for (let num = 0; num < 5; num++) {
	console.log(num);
}
*/

/*
Работа цикла for:
1) Выполняется начало - let num = 0
2) Выполняется условие - num < 5
3) Если условие true выполняется
	тело цикла - console.log(num)
4) Выполняется шаг - num++
Повтор начиная с пункта №2
*/

//============================================

// «встроенное» объявление переменной

/*
for (let num = 0; num < 5; num++) {
	console.log(num);
}
console.log(num);
*/

//============================================

// Существующая переменная

/*
let num;
for (num = 0; num < 5; num++) {
	console.log(num);
}
console.log(`Вывод вне цикла: ${num}`);
*/

//============================================

// Можно убрать любую часть цикла

/*
let num = 0;
for (; num < 5; num++) {
	console.log(num);
}
*/

/*
let num = 0;
for (; num < 5;) {
	num++;
	console.log(num);
}
*/

//============================================

// Бесконечный цикл

/*
let num = 0;
for (;;) {
	num++;
	console.log(num);
}
*/

//============================================

// Директива break

/*
let num = 0;
for (; num < 5; num++) {
	console.log(num);
	if (num == 2) break;
}
console.log(`Работа окончена, num = ${num}`);
*/

/*
let num = 0;
for (; num < 5; num++) {
	if (num == 2) continue;
	console.log(num);
}
*/

//============================================

// Директива break/continue и "?"

/*
let num = 0;
for (; num < 5; num++) {
	(num != 2) ? console.log(num) : continue;
}
*/

/*
firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 2) {
			continue firstFor;
		}
		console.log(size);
	}
}
*/

//============================================

// Итоги и домашка

/*
1.	while – Проверяет условие перед каждой итерацией.
2.	do..while – Проверяет условие после каждой итерации.
3.	for (;;) – Проверяет условие перед каждой итерацией,
	есть возможность задать дополнительные настройки.

Чтобы организовать бесконечный цикл, используют
конструкцию while (true).
При этом он, как и любой другой цикл, может быть
прерван директивой break.

Если на данной итерации цикла делать больше
ничего не надо, но полностью прекращать цикл не
следует – используют директиву continue.

Обе этих директивы поддерживают метки, которые ставятся
перед циклом. Метки – единственный способ для break/continue
выйти за пределы текущего цикла, повлиять на выполнение внешнего.
Помним, что метки не позволяют прыгнуть в произвольное место кода,
в JavaScript нет такой возможности.

Конечно же в JavaScript существуют и другие методы перебора.
Например, перебор объектов или массивов. О них мы поговорим
в отдельных уроках, а пока домашка.
*/

//============================================

//ДОМАШКА

/*
1. Изучить теорию
2. Решить задачи:
*/

/*
//Задача №1
//Вывести в консоль числа от 1 до 5
let num = 1;
while (num < 6) {
	console.log(num);
	num++;
}

//Задача №2 Нет
let num = 8;
while (num) {
	//Последний результат 0, верно?
	console.log(num);
	num--;
}

//Задача №3. Переписать на while
for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}

let num = 0;
while (num < 3) {
	console.log(`Число: ${num}`);
	num++;
}

//Задача №4. Прекратить работу цикла №1 когда size равна 1
//Цикл №1
for (let num = 0; num < 2; num++) {
	//Цикл №2
	for (let size = 0; size < 3; size++) {
		console.log(size);
	}
}
//Ответ:
firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 1) {
			break firstFor;
		}
		console.log(size);
	}
}
*/

//========================================================================

//======== Video 4 https://www.youtube.com/watch?v=tiHvPGOX5yc ===========

// Итак, простое число в JS можно записать следующим образом:

/*
// Число
let someNum = 458;
console.log(someNum);

// Десятичные числа
let someNums = 4.58;
console.log(someNums);
*/

/*
let someBigNum = 1000000;
console.log(someBigNum);

let someBigNum = 1e6; // 1 * 1000000;
console.log(someBigNum);

let someLittleNum = 0.000001;
console.log(someLittleNum);

let someLittleNum = 1e-6; // 1 / 1000000;
console.log(someLittleNum);
*/

//============================================

//Шестнадцатеричные, двоичные и восьмеричные числа

/*
Шестнадцатеричные числа широко используются в JavaScript
для представления цветов, кодировки символов и многого другого.
*/

/*
console.log(0xFF); // = 0xff = 255

// Реже используются двоичные и восьмеричные числа

console.log(0b11111111); // 255
console.log(0o377); // 255

// Метод toString(base)
// Метод num.toString(base) возвращает строковое
// представление числа в той или иной системе счисления (base).
// base может принимать значения от 2 до 36 (по умолчанию 10).

let num = 255;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));
*/

//============================================

// Округление чисел

// В JavaScript встроен объект Math, который содержит
// несколько функций для работы с округлением:

/*
// Math.floor - Округление в меньшую сторону
let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

/*
// Math.ceil - Округление в большую сторону
let numOne = Math.ceil(5.8);
let numTwo = Math.ceil(2.2);
let numThree = Math.ceil(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

/*
// Math.round - Округление до ближайшего целого
let numOne = Math.round(5.8);
let numTwo = Math.round(2.2);
let numThree = Math.round(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
*/

/*
let numOne = Math.round(5.845);
console.log(numOne); // 6
*/

// Как нам получить 5.8 или 5.85 ?

/*
// Способ умножения и деления
let numOne = Math.round(5.845 * 10) / 10; // 58.45 -> 58 -> 5.8
console.log(numOne);

let numTwo = Math.round(5.845 * 100) / 100; // 584.5 -> 585 -> 5.85
console.log(numTwo);

let numThree = Math.round(5.8449 * 100) / 100; // 584.49 -> 584 -> 5.84
console.log(numThree);
*/

//============================================

/*
// Метод toFixed(n) - округляет число до n знаков после запятой
// и возвращает строковое представление результата.
let numOne = 5.845;
console.log(numOne.toFixed(1));

// Преобразовать в число
console.log(+numOne.toFixed(1));
console.log(Number(numOne.toFixed(1)));
*/

//============================================

// Проблема неточных вычислений

/*
let numOne = Math.round(1.005 * 100) / 100; // Ожидаем 1.01
console.log(numOne);

let numTwo = 12.35;
console.log(numTwo.toFixed(1)); // Ожидаем 12.4

let problem = 0.1 + 0.2 === 0.3;
console.log(problem);
console.log(0.1 + 0.2);
*/

// О том почему так происходит читай по ссылке: https://habr.com/ru/post/112953/


/*
// Решение с помощью Number.EPSILON
let sourceNum = 1.005 + Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);

console.log(sourceNum * 100);
console.log(Math.round(sourceNum * 100));

// Функцию которая корректирует округление
// десятичных дробей можно найти по ссылке описании:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/round
*/

//============================================

//Проверка: isFinite и isNaN

/*
Напомню, что существуют специальные числовые значения
такие как Infinity - бесконечность и NaN - ошибка вычисления
Эти значения так же являются типом данных number
но не являются обычными числами.
Для проверки таких значения существуют специальные функции
*/

// Проверка isNaN

/*
console.log(Number(25 + "Привет!"));
console.log(isNaN(25 + "Привет!"));

if (25 + "Привет!" !== NaN) {
	console.log('Я не NaN');
}

console.log(NaN === NaN);
*/


// Проверка isFinite

/*
преобразует аргумент в число и возвращает true,
если оно является обычным числом
*/

/*
console.log(isFinite("25")); // "25" -> 25 -> true
console.log(isFinite("Привет!")); // NaN -> false
console.log(isFinite(10 / 0)); // Infinity -> false
*/

//============================================

//parseInt и parseFloat

/*
Как мы уже знаем, преобразовать строку в число можно
с помощью унарного оператора сложения либо специальной функции Number.
*/

/*
let valueOne = +"150";
console.log(valueOne);
console.log(typeof valueOne);
*/

/*
Но, мы очень часто сталкиваемся со значениями
у которых есть единица измерения, например
*/

/*
let valueTwo = +"150px";
console.log(valueTwo);
console.log(typeof valueTwo);
*/

//============================================

/*
Для получения чисел из такой строки существуют parseInt и parseFloat.
Если в процессе чтения возникает ошибка, они возвращают полученное до
ошибки число.

Функция parseInt возвращает целое число, а parseFloat
возвращает число с плавающей точкой:
*/

/*
let valueOne = parseInt("150.58px");
console.log(valueOne);
console.log(typeof valueOne);

let valueTwo = parseFloat("150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);
*/

/*
let valueTwo = parseFloat("a150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);
*/

/*
Функция parseInt() имеет необязательный второй параметр.
Он определяет систему счисления, таким образом parseInt
может также читать строки с шестнадцатеричными числами,
двоичными числами и т.д.:
*/

/*
console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16));
*/

//============================================

// Другие возможности

// Уже знакомый нам объект Math, одержит
// различные математические функции и константы.

// Вот некоторые из них:

//Math.random()
//Возвращает псевдослучайное число в
//диапазоне от 0(включительно) до 1(но не включая 1)
/*
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
*/

/*
//Math.max(a, b, c...) / Math.min(a, b, c...)
//Возвращает наибольшее/наименьшее число из перечисленных аргументов.
console.log(Math.max(5, 85, -49));
console.log(Math.min(5, 85, -49));
*/

/*
//Math.abs()
//возвращает абсолютное значение (модуль) числа.
let num = -58;
console.log(Math.abs(num));
*/

/*
//Math.pow(n, power)
//Возвращает число n, возведённое в степень power
console.log(Math.pow(5, 8));
*/

// Больше функций Math смотри по ссылке в описании: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

//============================================

//ДОМАШКА

/*
1. Изучить теорию
2. Решить задачи:
*/

/*
// Задача №1. Получить верное значение округления
let numOne = Math.round(1.005 * 100) / 100;
console.log(numOne); // Выведет 1 что не верно
Ответ:
let sourceNum = 1.005 + Number.EPSILON;
let numOne = Math.round(sourceNum * 100) / 100;
console.log(numOne);

// Задача №2. Получить число 135.58 из строки
let value = "135.58px";
Ответ:
let value = parseFloat("135.58px");
console.log(value);

// Задача №3. Посттроить верное условное ветвление
let value = 58 + "Фрилансер";
if (написать ответ) {
	console.log('Результат выражения NaN');
}
Ответ:
let value = 58 + "Фрилансер";
if (value) {
	console.log('Результат выражения NaN');
}

// Задача №4.
// Найти максимальное число из 10,58,39,-150,0
Ответ:
console.log(Math.max(10, 58, 39, -150, 0));

// Задача №5.
// Округлить число 58.858 до числа 58
Ответ:
let num = Math.floor(58.858);
console.log(num);
*/

//========================================================================

//======== Video 5 https://www.youtube.com/watch?v=jc5Upe8xIN0 ===========

/*
Запись строк. Кавычки.
Строку можно создать с помощью одинарных,
двойных либо обратных кавычек:
*/

/*
let someStringOne = 'Привет! Я строка!'; // Одинарные
let someStringTwo = "Привет! Я строка!"; // Двойные
let someStringThree = `Привет! Я строка!`; // Обратные

console.log(someStringOne);
console.log(someStringTwo);
console.log(someStringThree);
*/

/*
Одинарные и двойные кавычки работают, по сути, одинаково,
а если использовать обратные кавычки, то в такую строку
мы сможем вставлять произвольные выражения, обернув их в ${…}:
*/

/*
let textHi = "Привет!";
let textAll = `${textHi} Я строка!`;

console.log(textAll);

function someSum(a, b) {
	return a + b;
}
console.log(`Сумма: ${someSum(4, 7)}`);

// Многострочная запись
let text = `Привет!
Вы на канале
Фрилансер по жизни!
`;
console.log(text);
*/


/*
Все что заключено в любые кавычки будет
иметь тип данных строка
*/

/*
let someString = "158";
let someNum = 158;
console.log(someString);
console.log(typeof someString);
console.log(someNum);
console.log(typeof someNum);

console.log(someString + someNum);
*/

//============================================

//Спецсимволы

/*
Внутри строк можно использовать ряд спецсимволов.
Все спецсимволы начинаются с обратного слеша,
\ — так называемого «символа экранирования».
Вот несколько ихз них:
*/

/*
// Перевод строки \n
let textOne = `Привет!
Вы на канале
Фрилансер по жизни!
`;
console.log(textOne);

let textTwo = "Привет!\nВы на канале\nФрилансер по жизни!";
console.log(textTwo);
*/

//============================================

/*
// Табуляция (отступ) \t
let text = "Привет!\n\tВы на канале\n\t\tФрилансер по жизни!";
console.log(text);
*/

//============================================

/*
// Обратный слеш \\
let text = "Привет! Вы на канале Фрилансер по жизни \\ IT и фриланс";
console.log(text);
*/

//============================================

/*
// Кавычки \' \"
let text = "Привет! Вы на канале \"Фрилансер по жизни!\"";
console.log(text);
*/

//============================================

/*
// Иконки, символы UTF-16 \uКОД, UTF-32 \u{КОД}
let text = "Живи, а работай в свободное время! \u00A9 \u{1F60D}";
console.log(text);
*/

//============================================

// Работа со строками

/*
//Длина строки. Свойство length
let textOne = "Привет!";
console.log(textOne.length);
*/

//============================================

/*
// Получаем символы строки
let text = "Привет!";
let firstSymbol = text[0];
let lasttSymbol = text[text.length - 1];
console.log(firstSymbol);
console.log(lasttSymbol);

for (const char of text) {
	console.log(char);
}
*/

//============================================

//Изменение строки

/*
let text = "Привет!";
text[6] = ".";
console.log(text);
*/

//============================================

/*
//Изменение регистра
let text = "Привет!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
*/

//============================================

//Поиск подстроки

// Метод str.indexOf(substr, pos)

/*
Он ищет подстроку substr в строке str, начиная с позиции pos,
и возвращает позицию, на которой располагается совпадение,
либо -1 при отсутствии совпадений.
*/

/*
let text = "Привет!";
console.log(text.indexOf('рив'));
console.log(text.indexOf('рив', 3));
*/

// Методы includes, startsWith, endsWith

/*
Более современный метод str.includes(substr, pos) возвращает true,
если в строке есть искомая подстрока, либо false, если нет.
*/

/*
let text = "Привет!";
console.log(text.includes('рив'));
console.log(text.includes('рив', 3));

console.log(text.startsWith('рив'));
console.log(text.endsWith('!'));
*/

// Регистр имеет значение!

/*
let text = "Привет!";
let searchText = "пР";

console.log(text.toLowerCase().includes(searchText.toLowerCase()));
*/

/*
В итоге indexOf стоит использовать тогда когда нам нужна
позиция найденой подстроки.
В остальных случаях удобнее использовать includes
*/

//============================================

// Получение части строки (подстроки)

/*
В JavaScript существует ряд методов получения подстроки.
Но достаточно пользоваться одним.
*/

/*
Метод str.slice(start [, end]) - Возвращает часть строки
от start до end (не включая).
*/

/*
let text = "Привет!";
console.log(text.slice(1, 2));
console.log(text.slice(-2, -1));
console.log(text.slice(1));
*/

//============================================

/*
// Сравнение строк

//Алфавитный порядок
console.log("А" > "Б");
console.log("а" > "Б");

//Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

//Кол-во символов
console.log('Слайдер' > 'Слайд');

//Регистр
console.log('Фрилансер' > 'фрилансер');
*/

/*
Алгоритм сравнения двух строк довольно прост:
1.	Сначала сравниваются первые символы строк.
2.	Если первый символ первой строки больше(меньше),
	чем первый символ второй, то первая строка
больше(меньше) второй.Сравнение завершено.
3.	Если первые символы равны, то таким же образом
сравниваются уже вторые символы строк.
4.	Сравнение продолжается, пока не закончится одна из строк.
5.	Если обе строки заканчиваются одновременно,
	то они равны.Иначе, большей считается более длинная строка.
*/

//============================================

//ДОМАШКА

/*
1. Изучить теорию
2. Решить задачи:
*/

/*
// Задача №1. Верна ли запись?
//Ответ: Нет
let fls = "фрилансер";
let text = 'Привет! Я ${fls}';
// Ожидаем получить Привет! Я фрилансер
console.log(text);

// Задача №2. Получить символ "н" строки:
let text = 'фрилансер';
Ответ:
console.log(text[5]);

// Задача №3. Верно?
Ответ: Нет
let text = 123 + "456";
// Ожидаем 579
console.log(text);

// Задача №4. Получить строку в верхнем регистре
let text = 'фрилансер';
Ответ:
console.log(text.toUpperCase());

// Задача №5. Получить подстроку "лан" из:
let text = 'фрилансер';
Ответ:
let textPart = text.slice(3, 6,)
console.log(textPart);

// Задача №6. true или false ? - false
let text = 'фрилансер';
Ответ:
console.log(text.includes('лан', 4));
*/

//========================================================================