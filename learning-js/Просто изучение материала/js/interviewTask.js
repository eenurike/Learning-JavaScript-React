'use strict';

/*
1) Какое будет выведено значение: let x = 5; alert( x++ ); ?
2) Чему равно такое выражение: [ ] + false - null + true ?
3) Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
4) Чему равна сумма [ ] + 1 + 2?
5) Что выведет этот код: alert( "1"[0] )?
6) Чему равно 2 && 1 && null && 0 && undefined ?
7) Есть ли разница между выражениями? !!( a && b ) и (a && b)?
8) Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
9) a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
10) Что выведет этот код: alert( +"Infinity" ); ?
11) Верно ли сравнение: "Ёжик" > "яблоко"?
12) Чему равно 0 || "" || 2 || undefined || true || falsе ?
*/



// 1) => 5 инкремент постфиксной формы

// 2) Разберем этот пример по шагово
console.log([] + false);    // => false
console.log(typeof([] + false));    // => string
/*
Пустой массив в таких операциях будет приведен к пустой строке,
то есть console.log("" + false), а мы помним из динамической типизации
строка плюс чтото это string
console.log([] + false) => "false" строка с надписью false
*/
console.log("false" - null);    // => NaN
/*
Выполнение не матиматических операций приводит к NaN,
потомомучто это не плюс(конкатинация), а это минус
конкретно математическая операция
*/
console.log(NaN + false);   // => NaN
/*
Тоже самое не математическая операция
*/
console.log([ ] + false - null + true);     // => NaN

// 3)
let y = 1;
let x = y = 2;
console.log(x);
/*
=> 2
Сперва (y) присвоили 1, потом (y) присвоили 2,
так как код читается справа на лево, ну и (x)
присвоили то что находится в (y), а имено 2
*/

// 4)
console.log([] + 1 + 2);
/*
=> "12"
Так как пустой массив в такой форме превращается
в пустую строку, пустая строка + 1 = "1", "1" + 2 = "12"
*/

// 5)
alert("1"[0]);      // => 1
/*
Помним что по индексу мы можем обращатся и к строкам
*/
console.log("nurike"[2]);   // => r

// 6)
console.log(2 && 1 && null && 0 && undefined);
/*
=> null
Вспоминаем оператор И, обычно он используутся в каких-то
условных конструкциях, для того чтобы проверить и то выражение
равно и то выражение равно. Но у него есть еще одна особеность,
то какое значение он может вернуть. Запомни: оператор И всегда
запинается на лжи(false), он смотри 2 это true, 1 это тоже true,
но null это false. Останавливается на этом отрезке и выводит
результат null, дальше код просто не пойдет ему это не нужно
*/

// 7)
/*
Заменим выражение a b на 1 2
*/
console.log(!!(1 && 2) === (1 && 2));  
/*
=> false
Вспомним динамическую типизацию !! перед чем то, превращает
выражение в boolean, а тип данных boolean не равен тому выражению
что прийдет из (1 && 2) 
*/

// 8)
alert( null || 2 && 3 || 4 );
/*
Когда не уверены какой оператор сработает первым, нужно смотреть 
в таблицу преоритетов операторов. 
Операторa && приоритет выше чем у ||
*/
console.log(2 && 3);
console.log(89 && 55);
console.log(12 && 231 && 79);
console.log(5 && 0);
console.log(null && undefined);
console.log(NaN && 0);
/*
=> 3
=> 55
=> 79
=> 0
=> null
=> NaN
Так как оба значения правдивы, оператор && возвращает последнее
правдивое выражение(правое значение), но если есть ложное значение 
возвращает ложное, так как оператор && запинается на лжи(false).
Но если оба ложных выражения, то возвращает первое ложное
*/
console.log(null || 3);
/*
=> 3
А вот оператор ИЛИ(||) запинается на правде, возвращает 
true выражение
*/
console.log(3 || 4);
console.log(20 || 4 || 6);
/*
=> 3
=> 20
Если все выражения правдивы, то возвращает первое
истиное(true) выражение, то есть левое)
*/
console.log(( null || 2 && 3 || 4 ));   // => 3

// 9)
const a = [1,2,3];
const b = [1,2,3];
console.log(a === b);
/*
=> false
Так как разные переменные, содержат в себе разные данные,
да 1 == 1, но переменные ведь разные, значит и хранят в
себе разные данные
*/

// 10)
console.log(+"Infinity");       // => infibity
console.log(typeof(Infinity));  // => number
console.log(+"YO");             // => NaN

// 11)
console.log("Ёжик" > "яблоко");     // => fasle
console.log("ёжик" > "яблоко");     // => true
/*
Строки на самом деле можем сравнивать, и тогда идет
по символьное сравнение, но это уже особенности unicode.
Нужно смотреть в таблицу unicode, и смотреть какой символ
на каком месте стоит
*/

// 12) => 2 Так как || запинается на правде



