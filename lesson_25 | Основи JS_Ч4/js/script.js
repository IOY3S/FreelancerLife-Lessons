// Строгий режим
"use strict"

//======== Video 1 https://www.youtube.com/watch?v=DuWyc76lYC4&list=PLM6XATa8CAG7DDIBjNVd78Fv5Ueo930IV&index=18 ===========

/*
// WINDOW
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

//Искать можно не только в document

/*
const subList = document.querySelectorAll('.lesson__sub-list');
const subItems = subList[0].querySelectorAll('li');
console.log(subItems);
*/

//============================================

/*
Неожиданный результат поиска
*/

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

//============================================

/*
elem.getElementsByTagName(tag)
ищет элементы с данным тегом и возвращает их
коллекцию.Передав "*" вместо тега, можно получить всех потомков.
*/

/*
const elems = document.getElementsByTagName('li');
console.log(elems);
*/

//============================================

/*
elem.getElementsByClassName(className)
возвращает элементы, которые имеют данный CSS - класс.
*/

/*
const elems = document.getElementsByClassName('lesson__item-list');
console.log(elems);
*/

//============================================

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

//======== Video 2 https://www.youtube.com/watch?v=TEeKr2ON66A&list=PLM6XATa8CAG7DDIBjNVd78Fv5Ueo930IV&index=18 ===========

// Размеры окна браузера
// clientWidth и clientHeight

/*
// Доступная ширина и высота окна
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

//-----------

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

/*
// Метод scrollTo(pageX, pageY) прокручивает страницу
// на абсолютные координаты(pageX, pageY).
// тоже самое что и window.scroll()

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

/*
// Отступы внутренней части элемента от внешней.
// clientTop и clientLeft

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);
*/

//============================================

/*
// Размеры объекта без
// рамок и полосы прокрутки
// clientWidth и clientHeight

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

// общая ширина (offsetWidth) - рамка слева - рамка справа - скролл
// 500 - 20 - 20 - 17 = 443
*/

//============================================

/*
// Размеры объекта включающие в себя
// прокрученную (которую не видно) часть.
// В остальном работают как clientWidth/clientHeight,
// scrollWidth и scrollHeight

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);
*/

//============================================

/*
// Размеры прокрученной области
// scrollLeft и scrollTop

block.scrollTop = 150;

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);
*/

//============================================

/*
// Методы управления прокруткой
// scrollBy, scrollTo и scrollIntoView
// работают и для объекта

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

/*
// Координаты относительно окна браузера
// getBoundingClientRect

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

/*
// Координаты относительно документа
// getBoundingClientRect

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

/*
// Получение объекта по координатам
// document.elementFromPoint(x, y);

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

//======== Video 3 https://www.youtube.com/watch?v=bWCzbR5DvCo&list=PLM6XATa8CAG7DDIBjNVd78Fv5Ueo930IV&index=19&t=7s ===========

// Введение в JS события

/*
Отлавливать возникновение события мы будем с помощью
специальных обработчиков.

Любому событию можно назначить обработчик, то есть функцию,
которая сработает, как только произойдет нужное нам событие.
Именно благодаря этим обработчикам JavaScript может
реагировать на действия пользователя.

Есть несколько способов назначить событию обработчик.
Сейчас о них и поговорим
*/

//============================================

// Использование атрибута HTML

//============================================

// Использование DOM-объекта
//const button = document.querySelector('.button');

/*
button.onclick = function () {
	console.log('Клик!');
}
*/

/*
function showConsole() {
	console.log('Клик!');
}
button.onclick = showConsole;

// Важно! Без круглых скобок!
*/

//============================================

/*
Фундаментальный недостаток описанных выше способов
назначения обработчика – невозможность повесить несколько
обработчиков на одно событие.
Каждое новое назначение обработчика перезапишет предыдущее:
*/

/*
const button = document.querySelector('.button');

button.onclick = function () {
	console.log('Клик!');
}
button.onclick = function () {
	console.log('Клак!');
}
*/

//============================================

// Обработчик событий addEventListener/removeEventListener

/*
Существует основной способ назначения
обработчиков при помощи специальных
методов addEventListener и removeEventListener,
которые лишены этого недостатка

element.addEventListener(event, handler[, options]);
*/

/*
const button = document.querySelector('.button');

button.addEventListener("click", function (e) {
	console.log('Клик!');
});
button.addEventListener("click", function (e) {
	console.log('Клак!');
});
*/

//============================================

/*
const button = document.querySelector('.button');

function showConsole() {
	console.log('Клик!');
	button.removeEventListener("click", showConsole);
}

button.addEventListener("click", showConsole);
//button.removeEventListener("click", showConsole);
*/

//============================================

/*
// Опции
const options = {
	"capture": false, // фаза, на которой должен сработать обработчик
	"once": true, // если true, тогда обработчик будет
	//автоматически удалён после выполнения.
	"passive": false // если true, то указывает, что обработчик
	//никогда не вызовет preventDefault()
}

const button = document.querySelector('.button');

function showConsole() {
	console.log('Клик!');
}

button.addEventListener("click", showConsole, options);
*/

/*
Метод addEventListener может показаться сложнее чем, скажем, onclick.
Но, из-за того что он обладает преимуществом
"прослушивания" нескольких событий,
а также учитывая тот факт что существуют события которые можно отловить
только при помощи этого метода.
В результате разработчики чаще используют именно его.
*/

//============================================

// Объект события

/*
Чтобы хорошо обработать событие, могут понадобиться детали того,
что произошло.Не просто «клик» или «нажатие клавиши»,
а также – какие координаты указателя мыши, какая клавиша
нажата и так далее.
Когда происходит событие, браузер создаёт объект события,
записывает в него детали и передаёт его в качестве
аргумента функции - обработчику.
*/

/*
const button = document.querySelector('.button');

function showConsole(event) {
	// Тип события
	//console.log(event.type);
	// Объект на котором сработал обработчик
	//console.log(event.target);
	// Объект к которому назначен обработчик
	//console.log(event.currentTarget);
	// Положение курсора по оси X
	//console.log(event.clientX);
	// Положение курсора по оси Y
	//console.log(event.clientY);

	// Все детали события
	//console.log(event);
}

button.addEventListener("click", showConsole);
//button.addEventListener("mouseenter", showConsole);
*/

//============================================

// Всплытие и погружение

/*
const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');
*/

/*
Всплытие
Когда на элементе происходит событие, обработчики
сначала срабатывают на нём, потом на его родителе,
затем выше и так далее, вверх по цепочке предков.
*/

/*
Погружение
Для того чтобы что-то всплыло, оно должно сначало погрузиться :)
*/

/*
block.addEventListener("click", function (event) {
	console.log('Клик на Блок!');
	//console.log(event.target);
});
blockInner.addEventListener("click", function (event) {
	console.log('Клик на Блок второго уровня!');
}, { "capture": false });
blockInnerInner.addEventListener("click", function (event) {
	console.log('Клик на Блок третьего уровня!');
	// Остановка всплытия
	//event.stopPropagation();
});
*/

/*
В современной разработке стадия погружения используется очень редко,
обычно события обрабатываются во время всплытия.
*/

//============================================

// Делегирование событий

/*
Всплытие и перехват событий позволяет реализовать
один из самых важных приёмов разработки – делегирование.
*/

/*
const button = document.querySelectorAll('.button');

function showConsole() {
	console.log('Ура!');
}
button.forEach(buttonItem => {
	buttonItem.addEventListener("click", showConsole);
});
*/

//============================================

/*
const lesson = document.querySelector('.lesson');

function showConsole() {
	console.log('Ура!');
}
lesson.addEventListener("click", function (event) {
	if (event.target.closest('.button')) {
		showConsole();
	}
});
*/

// Пример с меню

/*
const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}
*/

//============================================

// Действия браузера по умолчанию

/*
Многие события автоматически влекут за собой действие браузера.
Например:
- Клик по ссылке инициирует переход на новый URL.
- Нажатие на кнопку «отправить» в форме – отсылку её на сервер.
- Зажатие кнопки мыши над текстом и её движение
	в таком состоянии – инициирует его выделение и т.д.

Если мы обрабатываем событие в JavaScript,
то зачастую такое действие браузера нам не нужно.
К счастью, его можно отменить.
*/

/*
const link = document.querySelector('.link');
*/

/*
link.addEventListener("click", function (event) {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	event.preventDefault();
});
*/

/*
link.onclick = function () {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	return false;
}
*/

/*
Необязательная опция passive: true для addEventListener
сигнализирует браузеру, что обработчик не собирается выполнять
preventDefault(). Почему это может быть полезно ?
Есть некоторые события, как touchmove на мобильных
устройствах(когда пользователь перемещает палец по экрану),
которое по умолчанию начинает прокрутку, но мы можем отменить
это действие, используя preventDefault() в обработчике.
Поэтому, когда браузер обнаружит такое событие,
он должен для начала запустить все обработчики и после,
если preventDefault не вызывается нигде, он может начать прокрутку.
Это может вызвать ненужные задержки в пользовательском интерфейсе.
Опция passive: true сообщает браузеру, что обработчик
не собирается отменять прокрутку.Тогда браузер начинает её немедленно,
обеспечивая максимально плавный интерфейс, параллельно обрабатывая событие.
Для некоторых браузеров(Firefox, Chrome) опция passive по умолчанию
включена в true для таких событий, как touchstart и touchmove.
*/

/*
const link = document.querySelector('.link');

link.addEventListener("click", function (event) {
	console.log('Наши действия');
	// отменить действие браузера (переход по ссылке)
	event.preventDefault();
}, { "passive": true });
*/

//============================================

// Основы событий мыши

// Типы событий мыши

/*
Мы можем разделить события мыши на две категории:
«простые» и «комплексные».
*/

// Простые события
//Самые часто используемые простые события:

/*
mousedown / mouseup - Кнопка мыши нажата / отпущена над элементом.
mouseover / mouseout - Курсор мыши появляется над элементом и уходит с него.
mousemove - Каждое движение мыши над элементом генерирует это событие.
contextmenu - Вызывается при попытке открытия контекстного меню,
					как правило, нажатием правой кнопки мыши.
					Но, заметим, это не совсем событие мыши,
					оно может вызываться и специальной клавишей клавиатуры.
*/

//Комплексные события

/*
click - Вызывается при mousedown, а затем mouseup над одним
и тем же элементом, если использовалась основная кнопка мыши.
dblclick - Вызывается двойным кликом на элементе.
Комплексные события состоят из простых, поэтому
в теории мы могли бы без них обойтись.
Но хорошо, что они существуют, потому что работать с ними очень удобно.
*/

/*
const button = document.querySelector('.button');

button.addEventListener("mousedown", function (event) {
	console.log(`Нажата кнопка ${event.which}`);
});

button.addEventListener("click", function (event) {
	console.log('Нажата основная кнопка мыши');
});

button.addEventListener("contextmenu", function (event) {
	console.log('Вызвано контекстное меню (не основная кнопка мыши)');
});
*/

/*
event.which = 1 - Нажата основная кнопка мыши (обычно левая)
event.which = 2 - Нажата средняя кнопка мыши (колесо)
event.which = 3 - Нажата не основная кнопка мыши (обычно правая)
*/

// Координаты: clientX/Y, pageX/Y

/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mousemove", function (event) {
	blockForMouse.innerHTML =
		`clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});
*/

//============================================

// Наведение мыши: mouseover/out, mouseenter/leave

//События mouseover/mouseout, relatedTarget

/*
Событие mouseover происходит в момент, когда курсор оказывается
над элементом, а событие mouseout – в момент,
когда курсор уходит с элемента.
*/

/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
	blockForMouse.innerHTML = `Курсор над элементом`;
});
blockForMouse.addEventListener("mouseout", function (event) {
	blockForMouse.innerHTML = `Курсор уходит с элемента`;
});
*/

/*
Эти события являются особенными, потому что у них имеется свойство
relatedTarget. Оно «дополняет» target. Когда мышь переходит
с одного элемента на другой, то один из них будет target,
а другой relatedTarget.

Для события mouseover:
event.target – это элемент, на который курсор перешёл.
event.relatedTarget – это элемент,
с которого курсор ушёл(relatedTarget → target).

Для события mouseout наоборот:
event.target – это элемент, с которого курсор ушёл.
event.relatedTarget – это элемент,
на который курсор перешёл(target → relatedTarget).
*/

/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
	console.log(event.target);
	console.log(event.relatedTarget);
});
blockForMouse.addEventListener("mouseout", function (event) {
	console.log(event.target);
	console.log(event.relatedTarget);
});
*/

/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
	console.log(`Курсор над элементом`);
});
blockForMouse.addEventListener("mouseout", function (event) {
	console.log(`Курсор уходит с элемента`);
});
*/

// События mouseenter и mouseleave

/*
Пара важных отличий:
1) Переходы внутри элемента, на его потомки и с них, не считаются.
2) События mouseenter / mouseleave не всплывают.
*/

/*
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseenter", function (event) {
	console.log(`Курсор над элементом`);
});
blockForMouse.addEventListener("mouseleave", function (event) {
	console.log(`Курсор уходит с элемента`);
});
*/

//Делегирование событий наведения мыши

/*
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseover", function (event) {
	let target = event.target.closest('span');
	// переход не на <span> - игнорировать
	if (!target) return;
	target.style.cssText = `background-color: #77608d;`;
});
blockForMouse.addEventListener("mouseout", function (event) {
	let target = event.target.closest('span');
	// переход не на <span> - игнорировать
	if (!target) return;
	target.style.cssText = ``;
});
*/

//============================================

// Перетаскивание Drag`n`Drop

/*
const gragField = document.querySelector('.drag-field');
const gragItem = document.querySelector('.drag-field__item');

gragItem.addEventListener("mousedown", function (event) {

	let coordsItemX = event.clientX - gragItem.getBoundingClientRect().left;
	let coordsItemY = event.clientY - gragItem.getBoundingClientRect().top;

	let gragItemSizes = {
		width: gragItem.offsetWidth,
		height: gragItem.offsetHeight
	}
	let gragFieldSizes = {
		left: gragField.getBoundingClientRect().left + scrollX,
		top: gragField.getBoundingClientRect().top + scrollY,
		right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
		bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
	}

	gragItem.style.position = 'absolute';
	gragItem.style.zIndex = 1000;
	document.body.append(gragItem);

	moveItem(event.pageX, event.pageY);

	function moveItem(pageX, pageY) {
		let currentX = pageX - coordsItemX;
		let currentY = pageY - coordsItemY;

		if (
			currentX + gragItemSizes.width <= gragFieldSizes.right &&
			currentX >= gragFieldSizes.left
		) {
			gragItem.style.left = `${currentX}px`;
		} else {
			if (currentX + gragItemSizes.width > gragFieldSizes.right) {
				gragItem.style.left = `${gragFieldSizes.right - gragItemSizes.width}px`;
			}
			if (currentX < gragFieldSizes.left) {
				gragItem.style.left = `${gragFieldSizes.left}px`;
			}
		}
		if (
			currentY + gragItemSizes.height <= gragFieldSizes.bottom &&
			currentY >= gragFieldSizes.top
		) {
			gragItem.style.top = `${currentY}px`;
		} else {
			if (currentY + gragItemSizes.height > gragFieldSizes.bottom) {
				gragItem.style.top = `${gragFieldSizes.bottom - gragItemSizes.height}px`;
			}
			if (currentY < gragFieldSizes.top) {
				gragItem.style.top = `${gragFieldSizes.top}px`;
			}
		}
	}

	let currentDroppable = null;

	function onDragItem(event) {
		moveItem(event.pageX, event.pageY);

		gragItem.hidden = true;
		let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
		gragItem.hidden = false;

		if (!elemBelow) return;
		let droppableBelow = elemBelow.closest('.drag-field__point');

		if (currentDroppable !== droppableBelow) {
			if (currentDroppable) {
				currentDroppable.classList.remove('_active');
				gragItem.classList.remove('_active');
			}
			currentDroppable = droppableBelow;
			if (currentDroppable) {
				currentDroppable.classList.add('_active');
				gragItem.classList.add('_active');
			}
		}
	}
	document.addEventListener('mousemove', onDragItem);

	document.addEventListener("mouseup", function (event) {
		document.removeEventListener('mousemove', onDragItem);
	}, { "once": true });
});
gragItem.addEventListener("dragstart", function (event) {
	event.preventDefault();
});
*/

//============================================

// Клавиатура

/*
Основные события при работе с клавиатурой это:
	keydown – происходит при нажатии клавиши
	keyup – при отпускании клавиши
*/

// event.code и event.key

/*
document.addEventListener("keydown", function (event) {
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
});
document.addEventListener("keyup", function (event) {
	console.log(`Отжата клавиша ${event.code} (${event.key})`);
});
*/

/*
Если пользователь работает с разными языками, то при переключении
на другой язык символ изменится с "G" на совершенно другой.
Получившееся станет новым значением event.key,
тогда как event.code останется тем же: "KeyG".
*/

/*
document.addEventListener('keydown', function (event) {
	if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
		console.log('Отмена действия!');
	}
});
*/

/*
Автоповтор
При долгом нажатии клавиши возникает автоповтор: keydown срабатывает
снова и снова, и когда клавишу отпускают, то отрабатывает keyup.
Так что ситуация, когда много keydown и один keyup, абсолютно нормальна.
Для событий, вызванных автоповтором, у объекта события
свойство event.repeat равно true.
*/

/*
document.addEventListener("keydown", function (event) {
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
	console.log(event.repeat);
});
*/

/*
// Пример
const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event) {
	if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}
*/

/*
document.addEventListener('keyup', function (event) {
	if (event.code === 'Escape') {
		menuBody.classList.remove('_active');
	}
});
*/

//============================================

// Прокрутка (скролл)

/*
window.addEventListener('scroll', function (event) {
	//кол-во прокрученных пикселей по вертикали
	// scrollY или pageYOffset (устарел)
	// кол-во прокрученных пикселей по горизонтали
	// scrollX или pageXOffset (устарел)

	console.log(`${scrollY}px`);
});
*/

// Предотвращение прокрутки

/*
Нельзя предотвратить прокрутку, используя event.preventDefault()
в обработчике scroll,  потому что он срабатывает после того,
как прокрутка уже произошла.

Но можно предотвратить прокрутку, используя event.preventDefault()
на событии, которое вызывает прокрутку, например,
на событии keydown для клавиш pageUp и pageDown.

Способов инициировать прокрутку много, более надёжный
способ – использовать CSS, свойство overflow: hidden;.
*/

/*
Использование

Событие прокрутки scroll позволяет реагировать на прокрутку страницы
или элемента. Есть много хороших вещей, которые при этом можно сделать.

- Показать / скрыть дополнительные элементы управления или информацию,
основываясь на том, в какой части документа находится пользователь.
Например анимация при скроле или ленивая подгрузка
- Подгрузить данные, когда пользователь прокручивает страницу вниз
до конца. Бесконечный скрол.

По ссылкам в описании есть видео с примерами реализации этого
функционала с помощью события scroll. Но, более интересным решением
данных задач будет использование IntersectionObserver, который позволяет
веб-приложениям асинхронно следить за изменением пересечения
элемента с его родителем или областью видимости документа.

Подробно об IntersectionObserver я расскажу в отдельном видео
*/

//============================================

// События загрузки страницы

/*
1) DOMContentLoaded – браузер полностью загрузил HTML,
	было построено DOM - дерево, но внешние ресурсы,
	такие как картинки <img> и стили, могут быть ещё не загружены.
2) load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.)
3) beforeunload / unload – пользователь покидает страницу.
*/

/*
document.readyState - состояние загрузки

Есть три возможных значения:
"loading" – документ загружается.
"interactive" – документ был полностью прочитан.
"complete" – документ был полностью прочитан
и все ресурсы(такие как изображения) были тоже загружены.
*/

/*
// Событие DOMContentLoaded срабатывает на объекте document
document.addEventListener("DOMContentLoaded", readyDom);

// Событие load срабатывает на объекте window
window.addEventListener("load", readyLoad);

function readyDom() {
	const image = document.querySelector('.image');
	console.log(document.readyState);
	console.log('DOM загружен!');
	console.log(image.offsetWidth);
}
function readyLoad() {
	console.log(document.readyState);
	const image = document.querySelector('.image');
	console.log('Страница загружена!');
	console.log(image.offsetWidth);
}
*/

/*
// Событие beforeunload срабатывает на объекте window
window.addEventListener("beforeunload", beforeUnLoad);

function beforeUnLoad(event) {
	// Отмените событие, как указано в стандарте.
	event.preventDefault();
	// Chrome требует установки возвратного значения.
	event.returnValue = '';
}

// Событие unload срабатывает на объекте window
window.addEventListener("unload", function (e) {
	// Отправка статистики в фоновом режиме и т.д.
	// navigator.sendBeacon(url, data)
	// https://w3c.github.io/beacon/.
});
*/

//============================================

//ДОМАШКА

/*
1. Изучить теорию
2. Решить задачу:
*/

/*
Пишем форму поиска, которая открывается по клику на иконку
а закрывается по клику на любое место страницы, кроме самой формы.
Также, закрыть форму можно по клавише эскейп (Esc) на клавиатуре.
Для поля ввода поискового запроса добавляем счетчик символов.
*/

//========================================================================

