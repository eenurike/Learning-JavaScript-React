// На данный момент существует 8 типов данных. И эти типы данных можем разделить на две категории
// 1) Простые типы (Примитивы)
//    Числа 1,2,3
//    Строки 'string'
//    Логичкский тип данных true/fasle
//    null (когда чего-то просто не существует)
//    undefined (когда существует но значения нет), например стоит холодильник, но он пустой
//    Symbol 
//    BigInt тип данных который отображает большие числа, в JS есть небольшое ограничение при работе с большими числами, мы не можем задать число которое будет больше чем 2 в 53 степени, на практике бывают ситуации когда нам необходимо работать с большими числами
// 2) Комплексные (Обьекты)
//    Массивы []
//    Функции function
//    Обьекты Даты
//    Регулярные выражения
//    Ошибки

// ЧИСЛА number
let number = 4;
number = 4.6;
console.log(4/0); // Infinity (бесконечность) относится к примитивам числам
console.log(-4/0); // -Infinity (минус бесконечность)
console.log('string' * 9); // NaN (Not a Number не число) так как это абсолютно не математическая операция

// СТРОКА string
const persone = 'Nurike'; // Можно использовать одинарные ковычки ''
const persone2 = "Habib"; // Так и с двойными ковычками ""
const persone3 = `Tony Hawk`; // Косые ковычки (бэктики)
const text = `I'll be a great frontend developer`;
const stringNumber = `5`; // Это не число, это строка 

// БУЛИНОВОЕ ЗНАЧЕНИЕ Логический тип данных (boolean)
let bool = true; 
bool = false;

// Спецефический тип данных null и undefined
console.log(something); // Ошибка Uncaught ReferenceError: something is not defined. Ошибка ссылочного типа, то что мы не можем сослаться на не существующий обьект. Это и есть тип данных null

let und;
console.log(und); // В переменной und ничего не лежит она пустая, ну и результат undefined. И это значение мы можем уже получать в консоли и на сайтах, так как переменная существует, она просто пустая 

// ОБЬЕКТЫ 

// Обьект это колекция данных, структура которая используется для хранения абсолютно любых данных, такой тип данных не зря называется комплексным, ведь в нем могут содержаться все те типы которые сверху
const obj = {
// Вот создали обьект, но пока он пустой. И он может в себе содержать данные которые будут уже называться свойствами обьекта и так же какие то действия они называются методы
};

const person = {
//ключ: значения  Ключ-свойство обьекта: значение этого свойства
  name: 'John', // Тип данных string
  age: 25,  // Тип данных number
  isMarried: false, // Тип данных boolean
  sayHello: function() {}
  // И function это действия этого персонажа, то есть метод этого обьекта
};

console.log(person.name); // John, то есть через точку мы обратились к значению свойства name
//console.log(person[age]); // Ошибка, так как мы используем какуюто перемеенную age которой не существует
console.log(person["age"]); // 25, такой способ тоже работает, но JsHint говорит что лучше писать через точку

// Насчет обьектов дальше по курсу. Обьекты это ключевая еденица в JS в них мы будем хранить очень много информации

// МАССИВЫ. Массив не является отдельным типом данных это разновидность обьекта, массив это частный случай обьекта. Такой обьект(массив) хранит в себе данные которые идут СТРОГО ПО ПОРЯДКУ

// Например на сервере хранятся картинки
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
let arr2 = ['text', 6, false, [], {}]; // В массиве так же может хранится любой тип данных
console.log(arr[0]); // plump.png, обратились к первому элементу массива
// Тут важная информация, в программировании нумерация наченается с 0, а не с 1
console.log(arr[1]);  // orange.jpg, обратились ко второму элементу массива

// Массив чем то похож на обьект, потомучто в обьекте ключ(свойства обьекта) можно назвать хоть как, а в массиве ключ фиксирован(задан по умолчанию) arr[0] arr[1], с помощью этой фиксированной нумерации мы обращаемся к значению массива. Поэтому и массив это всего лишь разновидность обьекта

// РАЗНИЦА МЕЖДУ МАССИВАМИ И ОБЬЕКТАМИ

const array = [1, 2, 3];  // Массивы это перечень информации по порядку(индекс), у каждой сущности есть определенный номер по порядку 0 1 2 3, и порядок здесь имеет важную роль, по этим номерам мы можем обращаться к этим сущностям
console.log(array[1]); // 2

//const object = {a: 1, b: 2, c: 3}; // Обьекты это структура хранения данных в парном формате ключ:значение

const object = {
  'Anna': 500,
  Alice: 800
};
// Тут есть четкое соотношение, у нас есть какйто сотрудник и его ЗП, то есть идет пара ключ значение. В массив так записать не получится, мы потеряем смысл, не очень будет понятно что к чему относится. Обрати внимание что свойства в обьектах это строки и мы их можем записывать в двух форматах, можно прописывать в ковычках тогда сразу будет понятно что это строка, можно и записывать и без ковычек, обьект сам поймет что это строка

// И почему же массивы это частный случай обьектов
const array2 = ['a', 'b', 'c'];
const arrayObj = {
  0: 'a',
  1: 'b',
  2: 'c',
  'a': 'ale'
};
// Если посмотреть вглубь массивов, то это те же обьекты, просто у них ключ это всегда ключ номер по порядку
//console.log(arrayObj.0); Получаум ошибку, так как такой синтаксис не очень понятен для JS, мы используем цифру после точки это не совсем правильно
console.log(arrayObj.a); // ale, другое дело когда мы обращаемся к строке а не к числу. Это просто пример, никто в реальной жизни никто не называет цифрами свойства, но когда-то можно попасть на такой момент, и выход из ситуации есть
console.log(arrayObj['0']); //  a, такой способ позволяет избегать ошибок. Поэтому если вдруг будут не предвиденные обстоятельства с обьектами, то всегда надежнее использовать квадратные скобки, они работают нормально и с цифрами которые могут попасть в обьект, или если попадется кирилица или вообще какойто другой язык, и в таких ситуациях будет надежным использовать квадратные скобки

arrayObj.b = '1234';  // Так мы добавили новое значение и своство в наш обьект
// console.log(arrayObj[b]); // Получаем ошибку, так как мы передали не какуюто строчку из обьекта, а JS думает что мы передали какую-то переменную которой просто нет
console.log(arrayObj['b']);
// Или
console.log(arrayObj.b);
// Так же создать обьект можно и через квадратные скобки
arrayObj['c'] = 98765;
console.log(arrayObj.c);

// Поиграемся с переменной на которую у нас постоянно вылазила ошибка, создадим ее
const d = 'stillLoh';
arrayObj[d] = 'nurike will be the greatest frontend developer';
console.log(arrayObj.stillLoh);
console.log(arrayObj['stillLoh']);
// Крч смотри создали переменную d и в нее положили строку stillLoh, потом в обьект arrayObj положили переменную d в которой лежит строка stillLoh, stillLoh будет свойством обьекта, и в это свойство поместили значение 'nurike will be the greatest frontend developer', ну и потом вывели значение свойства stillLoh

// Если говорить про массивы в них тоже можно создавать элементы, но это крайне не рекомендуется делать
const array3 = [1, 2, 3];
array3[10] = 'yo';
console.log(array3[10]);  // yo, все нормально вывели значение 11-го индекса(ключа)
console.log(array3);  // [ 1, 2, 3, <7 empty items>, 'yo' ] и видим что между нашими значениями 7 пустых ячеек, которые просто не содержат никакой информации, и это конечно нарушает логику работы массива, как мы помним что массивы должны содержать все элементы строго по порядку, и пустые данные там совершенно не приветствуются

// Внутри обьектов можно создавать другие обьекты
const obj2 = {
  a: 3,
  b: 2,
  abd: {
    c: 5,
    arr: [{}, {}],
    def: {

    }
  }
};
// И получается такая матрежка, где каждый уровень может содержать определенные данные, эти структуры данных они комбинируются между друг другом для того чтобы мы могли правильно распологать информацию
let test = 'testObj';
obj2.test = {a: 6};
obj2['testArr'] = [];
// Так же и с массивами 
console.log(obj2.test);
console.log(obj2['testArr']);
// Создали переменную так же как мы и делали, только в виде значения засунули обьект или массив





