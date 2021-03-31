'use strict';

// Динамическая типизация

// Превращаем что угодно в string

// 1)
console.log(typeof(String(null))); // => string
console.log(String(null)); // => null но это строка
console.log(String(4)); // => 4
/*
Видим что тип данных null, поменяли на string, но это
старый способ, им особо не пользуются
*/

// 2) Конкатинация (когда что-то складываем со строкой)
console.log(typeof(40 + "")); // => string
console.log(undefined + "something"); // => undefinedsomething

const num = 5;
console.log("http://vk.com/catalog/" + num);
console.log(`http://vk.com/category/${num}`); // современный способ
/*
=> http://vk.com/catalog/5
Типа создали адрес сылки на переход в 5-ую категорию 
*/

const fontSize = 24 + "px";
/*
Динамически меняем шрифт, например с сервера прилетели размеры
шрифта и нам его нужно вставить в какой то текст, но
стили пишутся в строках, и просто добавляем px
*/


// Превращаем что угодно в number

// 1) Редко используемый способ
console.log(typeof(Number(true)));  // => number
console.log(Number("55"));      // => 55 и это числовой тип данных

// 2) Унарный плюс
console.log(typeof(+undefined));    // => number
console.log(+"5" + 15);     // => 20

// 3) С помощь числовых методов тоже можно менять тип данных
console.log(typeof(parseInt('15px', 10)));      // => number
/*
второй аргумент это десятичная система.
Но этим способом не очень часто и пользуются
*/

// Если надо от пользователя получить числовой тип данных

let answ = +prompt("How old are you?");
/*
Так как помним, все что мы получаем от пользователя,
все будет типом данных string (prompt,input,textarea, form и т.д.)! 
А если нужно чтоб пользователь просто
физический не мог ввести буквы, тут уже нужны
регулярные вырожения, дальше по курсу
*/


// Превращаем что угодно в boolean

/*
Пустота или ничего(undefined, null) всегда будут ложью(false)
0, ""(пустая строка), null, undefined, NaN.
А все остальное это true: [], {}, 1
*/

// 1)

let switcher = null;
if (switcher) {
    console.log('Working...');
}
/*
=> ничего не происходит так как null это false, и программа 
идет по else пути
Типичный шаблон переключателя, когда в переменную
switcher что то прилетает, то он меняет значение 
на true, и программа пойдет по true пути
*/

switcher = 1;
if (switcher) {
    console.log('Working...');
}
/*
=> Working...
Какойто функцией запускаем это условие, чтоб
еще раз отробатало
*/

// 2) Редко используемый способ

console.log(typeof(Boolean('505')));     // => boolean

// 3) Это вообще очень редкий способ, но знать надо

console.log(typeof(!!undefined));       // => boolean