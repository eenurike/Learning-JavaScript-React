'use strict';

// Методы это вспомогательные функции, а свойства это вспомогательные значения. Такие же понятия мы уже встречали когда мы говорили про обьеты и чуть позже посмотрим как они вместе сочитаются, на самом деле их очень много, наизусть их учить не нужно, с этим будем разбираться постепенно 


// Строки
const str = 'test';

console.log(str.length);  // 4, это кол-во символов внутри строки и это часто используемое свойство для того чтоб получить длину как строки, так и других типов данных
const arr = [1, 2, 3];

console.log(arr.length);  // 3, 3 элемента внутри массива
// Обрати внимание что когда используем СВОЙСТВА, мы его никак не вызываем, оно просто пишется через точку, а методы которые будут вспомогательными функциями, они уже будут вызываться с помощью круглых скобок

// В самом браузере можно посмотреть все методы кого-то элемента, например тип данных Number. В браузере в консоле пишем console.dir(Number);

console.log(str[2]); // s, Получили третью букву из нашей строки, в реальных задачах такой подход используется довольно редко, новечьки допускают частую ошибку делаю вот так
console.log(str[2] = 'd');
// Тоесть получили какой-то символ и пытаются его поменять
console.log(str); 
// Но мы не получили желаемого результата tedt, а получили прежнее значение test. Строку мы напрямую поменять не можем, для этого есть методы

console.log(str.toUpperCase()); // TEST, меняет строку на верхний регистр, мы выполнели какое-то действие над строкой
console.log(str); // test, но предыдущее значение не поменялось
// Дело в том что str.toUpperCase() оно возвращает новое значение, оно напрямую не меняет ту строку которая была там, а уже это новое значение может где использовать, записать в консоль или засунуть в другую переменную и т.д. А наш исходник не меняется

const strLower = 'teSt';
console.log(strLower.toLowerCase()); // test
// Превращает строку в нижний регистр. Такое в практике довольно часто бывает, когда например пользователь вводит какие-то данные на сайте, он может по ошибке написать какую-то букву с большой буквы, и когда мы уже будем обрабатывать эти данные, мы будем превращать все в нижний регистр

// Метод который позволяет найти кусочек вашей строки и сказать с какого индекса она начинается, в официальной документации этот метод называется "Поиск под строки"
const fruit = 'some fruit';

console.log(fruit.indexOf('fruit'));  // 5, Тоесть слово fruit у нас наченается с 4-го индекса. Этот метод должен уже принимает в себя какой-то аргумент. Самое очевидное использование этого метода для того чтобы увидеть что этот кусочек дествительно существует, но иногда этот метод используется для того чтобы определить, а действительно ли в этой строке есть искомое значение
console.log(fruit.indexOf('q'));  // -1, Так как такой буквы нет в нашей строке

// Но остается такой вопрос, если строка не изменяема, то как мы ее можем поменять. Мы сейчас будем разбирать методы которые взаимодействуют вот так со строкой, всего в JS их 3

// 1)
const logg = 'Hello World';

console.log(logg.slice(6, 11));  // World, Вырезали слово world из нашей строки, у этого метода первый аргумент это с какой части строки будем возвращать что-то, второй аргумент это где заканчивать вырезание строки. Так по логике должно было быть 10 а не 11, дело в том что не включая 10 букву
console.log(logg.slice(6));  // World, Если один аргумент, то вырезается с указаного начала и до конца

// 2)
console.log(logg.substring(6, 11)); 
// Он похож на slice, но только первый метод может быть больше второго (но не стоит так делать), и он не поддерживает отрицательные значения. Решай сам какой из способов использовать, просто помни такие не большие особенности

// 3)
console.log(logg.substr(6, 5));
// Этот метод вторым аргументом говорит сколько символов вырезать 

// Метод trim() смотри в "Практика -> 3"


// Числа
// Для работы с числами в JS есть мини билиотека в самом браузере. В консоле пишим Math. и дальше выпадает список из всех методов (синусы, косинусы, максимальное значение, минимвльное значение и т.д.) остановимся на округлении 

const num = 12.2;
console.log(Math.round(num)); // 12, округляет до ближайшего целого числа
// В практической дефтельности довольно редко придется работать с чем-то кроме округления. Такие функции как синусы, косинусы в вебе они довольно редко используются

const test = '12.2px';  
// Допустим очень такой случай когда мы получаем такое значение со страницы, это размеры определенного элемента
console.log(parseInt(test));  // 12 причем это уже числовой тип данных, На самом деле этот метод который вызывается на числах Number.parseInt(), но для удобства разработчики вынесли его в отдельную глобальную функцию которую мы просто можем вот так вызывать. parseInt занимается тем что переводит число в другую систему исчесления: есть десятичная система исчиления (1,2,3,4 и т.д.), двоичная (0.1, 0.2, 3.5), но на самом деле есть много различных таких систем

console.log(parseFloat(test)); // 12.2 он возвращает значение с плавающей точкой(то есть с дробными значениями), этот метод изначально служит для того чтобы взять какое-то число либо строку и вернуть нам в десятичном варианте
