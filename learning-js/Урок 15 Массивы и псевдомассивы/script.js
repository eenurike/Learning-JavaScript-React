'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7];
// Часто при работе с массивами мы хотим его просто редактировать, либо хотим добавить, либо удалить элемент с массива и для этого у нас есть методы как для работы с концом массива так и с его началом

arr.pop();
// Он удаляет последний элемент с массива
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

arr.push(777);
// Добаляет элемент в конец массива
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 777 ]

// Если же говорить о начале нашего массива, то существуют такие методы как shift и unshift, которые удаляют и добавляют элементы соответственно, но у них есть большой недостаток из-за которого их очень редко используют. Когда мы работаем с концом массива, у них есть элементы, у них есть свои порядковые номера и мы просто вконце меняем что-то, если удаляем то у нас просто исчезает последний элемент, если добавляем то нам всего лишь необходимо добавить элемент вконец и ему назначается порядковый номер. Но как только мы начинаем работать с началом массива, все уже совсем подругому. Если нам необходимо вставить элемент в начало массива const arr = [0, 1, 2, 3, 4, 5, 6, 7];, нам здесь необходимо выполнить не только вставку элемента, так же у всех остальных элементов будут идти после, нам необходимо поменять индекс у этих элементов, элемент который раньше был 1 у него индекс был 0, а теперь мы добавили в начало элемент, теперь этот же элемент 1 имеет уже индекс 1, и так со всеми элементами в массиве. Сейчас маленький массив, но в будущем, вы будете работать с массивом у которого может быть 1000-2000 элементов, и такая операция может занять очень много времени по меркам программирования. Тоже самое происходит если мы удаляем элемент, удалили элемент, и у остальных элементов нам придется менять индексы. Именно поэтому такие методы как shift и unshift в реальной практике очень редко используются

// Нам необходимо перебрать эти элеметы внутри массива, можем использовать как обычный цикл, так и специальный цикл перебора массива

const arr1 = [10, 20, 30, 40, 50, 60, 70];
// Обычный цикл

for( let i = 0; i < arr1.length; i++) {
  // Этот цикл будет отрабатывать до тех пор, пока не закончаться элементы в массиве
  console.log(arr1[i]);
  // Это если мы бы обращались arr1[0] arr1[1] arr[2]
}

// Конструкция перебора для массива for of

for (let value of arr1) {
  console.log(value);
  console.log(arr1);
}
// Здесь нужно напомнить, когда разбирали обьекты, говорили что мы не могли их перебрать при помощи for of, дело в том что такая конструкция работает с массиво подобными сущностями: массив, строка, псевдомассив и такие сущности как map и set, так же мы можем перебрать какие-то определенные элементы со страницы

const arr3 = [1, 2, 3, 4, 5, 6, 7];

console.log(arr3.length); // 7
// Но ведь помним что массив начинается с 0, так что должно получится 6 элементов, что не логично. Дело в том что свойство length состоит из последнего индекса котрый есть у нас в массиве +1. Но и давайте проговорим некоторые нарушение из правил которые могут возникнуть в коде, мы всегда помним что массивы служат для того чтобы все элементы хранить строго по порядку, но иногда эти правила случайно могут нарушаться

arr3[99] = 0; 
// Тоесть мы на 99 позицию поместили 0
console.log(arr3.length);
// И мы получаем что у нас в массиве 100 элементов, хотя это совершенно не так, мы добавили всего один элемент. И вот в этой ситуации как раз и раскрывается правило того что свойство length состоит из последнего индекса +1
console.log(arr3);  // [ 1, 2, 3, 4, 5, 6, 7, <92 empty items>, 0 ] мы получаем 92 пустых ячейки, это одно из главных нарушений смысла нашего массива, то что у нас элементы лежат не попорядку

// Метод массивов который используется больше всех в коде, метод forEach, этот метод позволяет нам гибко перебрать все элементы которые находятся в массиве, по факту он служит точно так же как и эти два способа выше, но с некотрыми отличиями, мы его можем более подробно настроить

const arr4 = ['one', 'two', 'three', 'four'];

arr4.forEach(function(item, i, arr) {
  // Помним урок про callck функции, так как метод forEach принимает в себя еще одну функцию(callback), и эта функция будет выполняться каждый раз для каждого элемента массива. Она в себя может принимать 3 аргумета
  // 1) Тот элемент который мы перебираем 'one', 'two', 'three', 'four'
  // 2) Номер по порядку 0, 1, 2, 3
  // 3) Ссылка на тот массив который мы перебираем, в некоторых случаях это тоже необходимо
  console.log(`${i}: ${item} - внутри массива ${arr}`);
  // 0: one - внутри массива one,two,three,four
  // Но есть один нюанс, такой метод мы уже не сможем остановить или пропустить какой-то элемент, так как break и continue тут не сработают
});

// НО В ОБЫЧНОМ ЦИКЛЕ и МЕТОДЕ FOR OF МОЖНО ИСПОЛЬЗОВАТЬ break и continue

// Методы split, join, sort
// Допустим что от пользователя мы получили большую строку, где через какой-то знак написаны товары, и понятное дело что мы бы хотели взять это и превратить просто в обычный массив, где у нас товары эти будут лежать по порядку

// split  Из строки сделать массив
const str = prompt('');
// От пользователя будем получать какую-то строку, и дальше на основании этой строки, хотим сформировать список товаров
const products = str.split(', ');
// и Здесь в split должны указать через какой разделитель, будут товары в строке, к сожалению мы должны это четко знать, это может быть , или ; или - и т.д.
console.log(products);
// Получится только с правильным указанным разделителем, в нашем случае запятая пробел, а если разделитель будет отличаться, он просто запишет ее как в строку как тип данных string

const str2 = 'apple, orange, cherry'.split(', ');
console.log(str2);  // [ 'apple', 'orange ', 'cherry' ]

const str3 = 'apple,orange , cherry'.split(', ');
console.log(str3);  // [ 'apple,orange ', 'cherry' ]

// Вот имеено так мы и можем сформировать массив на основании строк и иногда это действитеьно очень полезно

// join обратная операция когда на основании массива, можем сформировать большую строку, к примеру можем взять список имен и вывести на экран в качестве строк

const str4 = ['Nurike', 'Temur', 'Stas', 'Madi'];
const result = str4.join(' '); // Разделитель пробел
console.log(result);  // Nurike Temur Stas Madi

// Комбинация методов
const test = prompt('Введите товары через запятую и пробел', '');
const products2 = test.split(', ');
const changed = products2.join(' - ');
console.log(changed); // яйца - картошка - творог - лимон - хлеб - капуста, поменяли просто разделитель

// sort Метод сортировки

const sortTest = ['bbb', 'ccc', 'aaa'].sort();
console.log(sortTest);  // [ 'aaa', 'bbb', 'ccc' ] и у нас все отсортировалось в алфавитном порядке
console.log(sortTest.join('-'));  // aaa-bbb-ccc
// Но у этого метода есть одна особенность, он всегда сортирует элементы которые находятся внутри массива, как строки, если массив из строчных элементов, то он их спокойно отсортирует по алфавиту, но вы будете удивлены если данный метод применить в массиву с числами
let sortNumber = [2, 1, 4, 3, 5];
sortNumber.sort();
console.log(sortNumber);  // [ 1, 2, 3, 4, 5 ] пока все логично

sortNumber = [1, 2, 3, 4, 10, 23, 13];
sortNumber.sort();
console.log(sortNumber);  // [ 1, 10, 13, 2, 23, 3, 4 ] поучаем такой результат, очень странная сортировка

// Изначально метод sort сортирует все как строки, каждое число которое начинается с 1, встала впереди, причем сравнение шло посимвольно. 1, 10, 13 у этих трех чисел первая 1, так что он равны, потом 0 и 3, 0 будет меньше 3 поэтому 10 встала на второе место, потом идет у нас 13, массив с числами отсортировался как строки, но этого мы можем избежать. Метод sort может принимать в себя callback функцию, мы можем сказать как именно отсортировать этот массив, сейчас мы напишем шаблон который очень часто будет встречаться в таких сортировачных вещах

function compareNum(a, b) {
  return a - b;
}

console.log(sortNumber.sort(compareNum)); // [1, 2, 3, 4, 10, 13, 23] вот теперь числа отсортировались правильно. И возникает вопрос, а как вообще работает эта функация. Дело в том что метод sort внутри себя использет один из алгоритмов, который называется алгоритм быстрой сортировки, это не совсем простая вещь и на практике она не особо нужна, просто запомни эту фукнцию и используй, но для того чтобы углубится в знание алгоритмов, стоит ознакомится с данным алгоритмом по ссылке в уроке

// Пседвомассивы
// Мы как фронтендеры, будем сталкиваться с этим понятием очень часто. Когда мы работаем с элементами на странице, то мы как раз и будем получать псевдомассивы, по факту это такой обьект, структура которого совпадает со структурой массива, то есть он будет выглядеть как массив ['bla', 'test], но при одном очень важном условии, у таких псевдомассивов не будет вообще никаких методов! Ни метода forEach, filter, sort, push, pop, join и т.д. Это просто структура которая хранит данные по порядку
