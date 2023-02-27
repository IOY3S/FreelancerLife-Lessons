// Строгий режим
"use strict"

//======== Video 1 https://www.youtube.com/watch?v=wdViO9OcQzs ===========
//======== Video 2 https://www.youtube.com/watch?v=uOeFpp872MY ===========

/*
ДОМАШКА
Создай новый проект, подключи к нему файл script.js и
в строгом режиме выведи в консоль фразу «Я учу JS»

Так же напиши в комментарии какой вариант вызовет ошибку:
*/
/*
//Вариант №1
console.log('Учим JS')

//Вариант №2
console.log('JS')
console.log('Учим')

//Вариант №3
console.log('Учим') console.log('JS')

//Вариант №4
console.log('Учим);
console.log('JS');
*/
//Ну и конечно же, учи теорию.

//-------------------------------------------

/*
// ТОЧКА С ЗАПЯТОЙ
console.log('Учим JS');
['Учим', 'JS'].forEach(alert);
*/

/*
ЗНАЧЕНИЯ
В JavaScript есть несколько типов значений (values):
фиксированные значения (литералы), значения констант
и значения переменных.
*/
/*
//Примеры литералов
25							// литерал целого числа
23.8						// литерал дробного числа
'JavaScript'			// литерал строки
"JavaScript"			// литерал строки
[]							// литерал массива
[15,7,89]				// литерал массива
{}							// литерал объекта
{
	name: 'Фрилансер',
	surname: 'по жизни'
}							// литерал объекта
(ab|bc)					// литерал регулярного выражения

// В языках программирования константы и переменные
// используются для хранения значений данных.
const MAX_VALUE = 17;				// константа
var section = 'JS';					// переменная
let arr = ['HTML','CSS','JS'];	// переменная
*/

/*
ОПЕРАТОРЫ
В JavaScript имеется очень много различных операторов.
Они обозначают операцию, которую нужно произвести.
*/
/*
//Примеры операторов
//* / + - = и т.д.
console.log('Учим' + ' JS');
*/

/*
ВЫРАЖЕНИЯ
Выражение (expression) - это комбинация значений,
переменных и операторов, которые либо присваивают
переменной значение, либо возвращают какое-то
значение без его присваивания.
*/

/*
//Примеры выражения
let num = 4; //выражение присвоения
console.log(num);
'Учим' + 'JS'; //выражение без присвоения
*/

/*
КЛЮЧЕВЫЕ СЛОВА
Инструкции JavaScript часто начинаются с ключевого слова
(keyword). Оно (ключевое слово) предназначено для того, чтобы
определить какое действие JavaScript необходимо выполнить.
*/
/*
//Примеры ключевого слова
let num = 'Учим JS'; //указывает браузеру создать переменную
console.log(num);
*/

/*
БЛОК ИНСТРУКЦИЙ
JavaScript инструкции можно сгруппировать с помощью так
называемого блока, по сути фигурных скобок {...}.
Как правило, используется в функциях, циклах и так далее..
*/
/*
//Примеры блока инструкций
function name() {
	console.log('Учим');
	console.log('JS');
}
name();
*/


/*
КОММЕНТАРИИ
Не все инструкции JavaScript являются выполняемыми.
Код после двойных косых черт // или
между /* и * / рассматривается как комментарий.
*/

// Это комментарий
/*
	Это многострочный
	комментарий
*/


/*
ЧУВСТВИТЕЛЬНОСТЬ К РЕГИСТРУ
JavaScript является регистрозависимым языком.
Это значит, что ключевые слова, переменные,
имена функций и другие идентификаторы языка
должны содержать одинаковые наборы прописных и строчных букв.
*/
//Пример
//console.log('Учим JS'); //Без ошибок
//conSole.log('Учим JS'); //Ошибка


/*
ПРОБЕЛЫ
Рекомендуется добавлять пробелы в инструкции,
чтобы сделать код более читаемым.
JavaScript игнорирует несколько пробелов.
*/
/*
//Следующие строки эквивалентны:
let str = 'Текст';
let str='Текст';
*/
/*
	Как правило пробелы принято
	размещать вокруг операторов: =, +, -, * и /.
*/

/*
ДЛИННА СТРОКИ
Для лучшей читаемости кода рекомендуется избегать строк
с длиной более 80 символов. Если JavaScript инструкция имеет
большую длину, то её желательно разорвать.
В большинстве случае разрыв инструкции лучше осуществить
после какого-нибудь оператора.
*/
/*
//Пример
document.getElementById('text').innerHTML =
	'Текст для некого поля';
*/

/*
КАВЫЧКИ
В JavaScript могут использоваться одинарные,
двойные либо обратные кавычки, подробнее о них поговорим
в выпуске про строки. На данный момент нужно помнить,
что открытая кавычка без закрытой вызовет ошибку и наоборот.
*/

/*
//Пример
console.log('Учим JS'); // Одинарные
console.log("Учим JS"); // Двойные
console.log(`Учим JS`); // Обратные
*/


/*
Строгий режим "use strict";

console.log('Учим JS');

//"use strict" ниже игнорируется -
//он должен быть в первой строке

"use strict";

// строгий режим НЕ активирован
*/

//======== Video 3 https://www.youtube.com/watch?v=5V8IeATHr4w ===========

//ДОМАШКА
/*
1) Придумай имя переменной для хранения цвета
	глаз пользователя сайта
2) Объяви две переменных - user и userName.
	Присвой значение "Вася" переменной userName.
	Скопируй значение переменной userName в переменную user.
	Выведи в консоль переменную user. Результат должен быть Вася
3) Напиши в комментариях какой вариант
	либо варианты записаны НЕ верно?
*/
/*
//Вариант №1
let user = 'Вася' let age = 36

//Вариант №2
let myage = 36;

//Вариант №3
const BLOCK_SIZE = 14 + 50;

//Вариант №4
const BLOCK_HEIGHT = 100;

//Вариант №5
if (true) {
	var size = 15;
}
console.log(size);
*/

//============================================

//ОБЪЯВЛЕНИЕ ПЕРЕМЕННОЙ

//Ключевое слово let для
//объявления переменной

//Имя переменной может содержать
//только буквы, лучше латинского
//алфавита, цифры и символы
//$ и _.При этом первый символ
//не должен быть цифрой.

/*
//Верное объявление
let age;
let info123;
let $size;
let _color;

//Неверное объявление
let 123info;
let my-age;
*/

//---------------------------

//Названия переменных
/*
//Вместо
let s;
let sdkljghfasdfkgl;
let leftsidebarsize;

//Лучше писать
let size;
let age;
let leftSidebarSize;

//Регистр имеет значение!
let sidebarsize;
let sidebarSize;
*/

//-------------------------------------------

/*
//Использование других символов

let яПеременная;
let 我;
*/

//-------------------------------------------

/*
//Нельзя использовать зарезервированные имена

let let;
let break;
let for;

*/

//-------------------------------------------


//ПРИСВОЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
/*
//Объявление без значения
let myLifeStyle;

//Присвоение значения
myLifeStyle = 'freelance';


//Объявление переменной и присвоение значения
let myLifeStyle = 'freelance';

console.log(myLifeStyle);
*/

//-------------------------------------------

//ОБЪЯВЛЕНИЕ НЕСКОЛЬКИХ ПЕРЕМЕННЫХ
/*
//В строку через запятую
let myName = 'Фрилансер по жизни', myAge = 36, myMessage = 'Живи, а работай в свободное время!';

//Через запятую с новой строки
let myName = 'Фрилансер по жизни',
	myAge = 36,
	myMessage = 'Живи, а работай в свободное время!';

//Отдельно
let myName = 'Фрилансер по жизни';
let myAge = 36;
let myMessage = 'Живи, а работай в свободное время!';
*/

//-------------------------------------------

//ИЗМЕНЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
/*
let myAge = 36;
myAge = 18;
console.log(myAge);
*/

//-------------------------------------------

//ПЕРЕДАЧА ЗНАЧЕНИЙ ПЕРЕМЕННЫХ
/*
let myAge = 36;
let myNewAge = 18;

//Копируем значение переменной myNewAge
//в переменную myAge

myAge = myNewAge;
console.log(myAge);
*/

//-------------------------------------------

//USE STRICT И ПЕРЕМЕННЫЕ

/*
// "use strict" строгий режим отключен

myAge = 36;
console.log(myAge);
*/

/*
"use strict" //строгий режим включен

let myAge = 36;
console.log(myAge);
*/

//-------------------------------------------

//ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ

/*
//Пример блока инструкций
function testBlock() {
	console.log('Учим');
	console.log('JS');
}
testBlock();

*/

/*
//Видимость переменной только внутри блока инструкций
function testBlock() {
	let myAge = 36;
	console.log(myAge);
}
testBlock();

console.log(myAge); //Переменная не видна за пределами блока
*/

/*
//Переменные внутри и за пределами блока
let myAge = 36;

function testBlock() {
	let myAge = 18;
	console.log(myAge); //Вывод переменной
}
testBlock();

console.log(myAge); //Вывод переменной
*/


/*
//В рамках одного блока, переменную стоит использовать
//только после её объявления.

//Ошибка, мы не можем использовать
//переменную перед объявлением
console.log(myAge);
let myAge = 18;
*/

/*
//Повторное объявление переменной
//в рамках одногоблока запрещено
//let myAge = 36;
//let myAge = 15; //Ошибка - переменная уже объявлена

//В то же время внутри блока (например цикла) проблем нет
for (let i = 0; i < 3; i++) {
	//Тут своя переменная i
	console.log(i);

}
for (let i = 0; i < 3; i++) {
	//И тут своя переменная i
	console.log(i);
}
*/

//-------------------------------------------

//КОНСТАНТЫ

/*
const myAge = 36;
myAge = 18; //Нельзя изменить константу

*/

/*
//Имена констант с заранее известными значениями
const BLOCK_SIZE = 25;
const COLOR_RED = "#F00";

//Имя константы со значением присвоенным
//в процессе выполнения программы
const summSizes = 25 + 30;
*/

/*
//Смена значений в константе
//Объект с данными
const userProfile = {
	name: 'Фрилансер',
	age: 36,
	message: 'Живи, а работай в свободное время!'
}
console.log(userProfile);

//Далее я меняю значение одного из полей объекта
userProfile.age = 18;
//Ошибки нет, данные изменились
console.log(userProfile);

*/

//-------------------------------------------

//КЛЮЧЕВОЕ СЛОВО VAR

//Области видимости

/*
//Использование переменной до её объявления

"use strict"

age = 35;
console.log(age);

var age;

*/


/*
function testBlockLet() {
	let myAgeLet = 36;
}
testBlockLet();

//Переменная НЕ видна за пределами блока
//console.log(myAgeLet);

function testBlockVar() {
	var myAgeVar = 36;
}
testBlockVar();

//Переменная НЕ видна за пределами блока
console.log(myAgeVar);
*/

/*
if (true) {
	let sizeLet = 50;
}
//Переменная НЕ видна за пределами блока
//console.log(sizeLet);

if (true) {
	var sizeVar = 50;
}
//Переменная ВИДНА за пределами блока
console.log(sizeVar);
*/

//-------------------------------------------

//Стоит ли каждый раз создавать новую переменную или,
//все таки, переназначать объявленную ранее?


/*
let userName = 'Фрилансер по жизни';

// ... некий код c использованием userName ...

userName = 36;

// ... некий код c использованием userName ...

userName = 'Живи, а работай в свободное время!';

// ... некий код c использованием userName ...

// ????????????

*/

/*
let userName = 'Фрилансер по жизни';
let userAge = 36;
let userMassage = 'Живи, а работай в свободное время!';

// ... некий код c использованием
// userName, userAge, userMassage ...

*/

//======== Video 4 https://www.youtube.com/watch?v=g7jDucodUzQ ===========

//ДОМАШКА
/*
1. Изучить теорию
2. Какой или какие из вариантов не верны:
*/

// //Вариант №1
// let userAge = 36;
// let userInfo = "Фрилансер ${userAge}";

// //Вариант №2
// let userHeight = 145 / 0;
// //Вернется значение NaN
// console.log(userHeight);

// //Вариант №3
// let userName;
// //Вернется тип данных Null
// console.log(typeof userName);

// //Вариант №4
// let userSize = "45" / "8";
// //Вернется тип данных Number
// console.log(typeof userSize);

//============================================

// Динамическая типизация
/*
JavaScript является динамически типизированным.
То есть тип данных переменной меняется динамически
в момент присвоения либо смены её значения.
 А не в момент объявления.
*/
/*
let userName; // Объявляем переменную

console.log(typeof userName);

userName = "Фрилансер по жизни"; //Строка (String)

console.log(typeof userName);

userName = 58; // Число (Number)

console.log(typeof userName);
*/

//============================================

// Undefined – неопределенный тип */
/*
let userName; //Объявляем переменную
// Получаем тип данных
console.log(typeof userName);
// Получаем значение переменной
console.log(userName);

// Примеры использования
// Проверяем определена ли переменная

if (userName === undefined) {
	console.log('Переменная НЕ определена');
} else {
	console.log('Переменная определена');
}
// либо с помощью оператора typeof

if (typeof userName === 'undefined') {
	console.log('Переменная НЕ определена');
} else {
	console.log('Переменная определена');
}
*/

//============================================

// Null
/*
Null, также как и Undefined,
содержит только одно значение null
*/
/*
// Пример
let userName = null;
console.log(userName);
*/
/*
// Пример
// Попытка обратиться в объекту которого нет
let block = document.querySelector('.block');

// Получаем null
console.log(block);

// Вернет тип object
console.log(typeof block);
*/

//============================================

// Boolean
/*
Boolean – это Булевый или логический тип.
Может принимать только два значения:
true (истина) и false (ложь).
*/
/*
// Пример
let willYouMarryMe = false;
if (willYouMarryMe) {
	console.log(':)');
} else {
	console.log(':(');
}
*/
/*
//Так же можно использовать
//с операторами сравнения
let trueOrFalse = 58 > 18;
console.log(trueOrFalse);
*/

//============================================

//Number(Число)
/*
Числовой тип данных представляет значения
как в виде целых чисел,
так и в виде чисел с плавающей точкой.
*/
/*
let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);
*/


// Infinity
/*
let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);
*/
/*
// -Infinity
let getInfinity = -58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);
*/
/*
// NaN
let getNan = 'Фрилансер' / 10;
console.log(getNan);
console.log(typeof getNan);

Если где - то в математическом выражении
есть NaN, то результатом вычислений
с его участием будет NaN.
*/

//============================================

//BigInt

/*
В JavaScript тип данных «number» не может
содержать числа больше, чем 9007199254740991,
или меньше, чем -9007199254740991.
*/

/*
//BigInt
const bigInteger = 12345678901234567890123456789n;
console.log(typeof bigInteger);
*/

//============================================

//String
/*
let userName = "Фрилансер по жизни";
console.log(typeof userName);

let userNameV2 = 'Фрилансер по жизни';
console.log(typeof userNameV2);
let userNameV3 = `Фрилансер по жизни`;
console.log(typeof userNameV3);


let userAge = 36;
let userAgeInfo = `Возраст: ${userAge}`;
console.log(userAgeInfo);
*/

//============================================

/*
//Object

let userInfo = {
	name: "Фрилансер по жизни",
	age: 36
}
console.log(userInfo);
console.log(typeof userInfo);
*/

//============================================

/*
//Symbol
let id = Symbol("id");
console.log(typeof id);
*/

//============================================

/*
//Function

let funcVariable = function name(params) {
	// код функции
}
console.log(typeof funcVariable);

*/

//============================================

//Преобразование типов

//Строковое преобразование
/*
let userAge = 58;
console.log(userAge);
console.log(typeof userAge);

userAge = String(userAge);

console.log(userAge);
console.log(typeof userAge);
*/
/*
let userTrue = true;
console.log(userTrue);
console.log(typeof userTrue);

userTrue = String(userTrue);

console.log(userTrue);
console.log(typeof userTrue);
*/


//Численное преобразование
/*
let userAge = "58";
console.log(userAge);
console.log(typeof userAge);

userAge = Number(userAge);

console.log(userAge);
console.log(typeof userAge);
*/
/*
let userAge = "Фрилансер";

userAge = Number(userAge);

console.log(userAge);
console.log(typeof userAge);
*/
/*
let userAge = "72" / "2";
console.log(userAge);
console.log(typeof userAge);
*/

/*
//Логическое преобразование
let userAge = "";
console.log(userAge);
console.log(typeof userAge);

userAge = Boolean(userAge);

console.log(userAge);
console.log(typeof userAge);
*/