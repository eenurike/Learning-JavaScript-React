'use strict';

// Для людей которые знакомы с программированием на других языках, обьекты в JavaScript это так называемые ассоциативные массивы, которые присутствуют в некоторых других языках, например в PHP

const obj = new Object();
// Обычно таким способом никогда не пользуются 

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};


// console.log(options.colors.border);
// console.log(options['colors']['bg']);

// Если нужно удалить какое-то значение нужно использовать специальный оператор

// delete options.width;

// console.log(options);
// Удалили свойство width, но если нужно удалить сразу несколько обьектов нужно запускать цикл, который будет на какие-то параметры ориентироваться и удалять определенные свойтсва
// И кстати заметь что мы работаем с константой(const), но при этом обьект который находится внутри, модифицируем по собственому желанию, удаляем как-то меняем и никаких ошибок нет, напонинаю что прямых констант в JS нет

// Иногда нам нужно перебрать обьект
// for (let key in options) {
//   // Это цикл будет работать столько раз, сколько свойств находится внутри этого обьекта, и переменная key обращается именно к ключам обьекта
//   // console.log(`Свойство ${key} имеет значение ${options.key}`);
//   console.log(`Свойство ${key} и его значение ${options[key]}`);
// }
// Заметь если обращаться чрез точку ${options.key}, то мы почему-то получаем результат 'Свойство width имеет значение undefined, но если записать ${options[key]}, то все нормально
// И перебор for of с обьектами не работает
// Очень интересный момент, что вложенный обьект консоль вывел нам как "Свойство colors и его значение [object Object]", это все потому что мы все значение выводим в качестве строк, и когда цикл натыкается на вложенные обьект, он его не может переобразовать в строку, и он просто передает строковое предствавление обьекта, консоль не выдает ошибку, консоль просто говорит что это обьект который он не может обьект превратить в строку

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     // То есть мы проверяем, если по типу данных значение будет object, то запускаем еще один перебор
//     for (let i in options[key]) {
//       // Как бы key отвечает за основной обьект а i вложенный обьект, и мы перебираем свойства(i) у вложеного обьекта(key)
//       console.log(`Свойство вложеного обьекта ${i} и его значение ${options[key][i]}`);
//       // options[key] это мы перебираем обьект colors, и то что бы достучаться до значения в обьекте colors мы можем использовать двойные options[key][i]. Это как бы если мы обратились options['colors']['border]
//     }
//   } else {
//     console.log(`Свойство вложеного обьекта ${key} и его значение ${options[key]}`);
//   }
// }

// Кстати у обьекта нет свойства length, и это очень интересная задача, потому что там используется прием счетчика, и это очень чатсый прием на первых порах
// let counter = 0;

// for (let key in options) {
//   counter++;
// }
// // То есть счетчик пробегается по каждому свойству и увеличивает счетчик
// console.log(counter); // 4, но без свойств во вложенном обьекте

// counter = 0;
// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       counter++;
//     }
//   }
//   counter++;
// }

// console.log(counter); // 6 Это уже со свойствами во вложенном обьекте

// Но этот способ не совсем удобнен, и тут мы знакомимся с методом для обьекта

console.log(Object.keys(options)); // [ 'name', 'width', 'height', 'colors' ]
// Этот метод берет наш обьект и на его основании создает массив в котором все элементы это ключи, ну и мы уже знаем как можно подсчитать кол-во значений в массиве
console.log(Object.keys(options).length); // 4
console.log(Object.keys(options).length + Object.keys(options.colors).length);  // 6 с вложенными свойствами

// И в этом курсе мы частенько будем делать упор на такие рациональные решения, которые вы должны помнить не только чтобы правильно и успешно выполнять проекты, но и для того чтобы показать на собеседовании что вы умеете это делать

// Таких методов у Object много, будем проходить их в течении курса. Но и такие методы мы можем создавать вручную, помним что методы это дейсвия которые может делать наш обьект

const options2 = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log('  test  '.toLocaleUpperCase().trim());
    // Вот и наш собственный метод который будет работать внутри options. Это тоже самое что и когда мы прописывали Object.keys(options) именно .key() это и есть метод, только эти методы уже встроены в JS, а эти мы создаем сами. И помни что в таком состоянии нащ метод просто существует, а потом его нужно запустить(вызвать)
  }
};

options2.makeTest();  // запускаем(вызываем) наш метод и получаем 'TEST' без пробелов и в верхнем регистре

// Разберем возможности которые появились в стандарте ES6 это деструктуризация обьектов, тоже самое относится и к массивам. Иногда как заметил нам нужно достучаться до вложенных свойств и каждый раз мы не можем использовать вот такую конструкцию options['colors']['border], и даже JSHint указывает что так лучшше не писать, чтобы таким не заниматься и существует деструктуризация, по простому мы будем вытаскивать вот эти переменные в качестве одельных структур, одельных коробочек которых мы будем выносить за наш обьект и как-то их использовать

const options3 = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log('  test  '.toUpperCase().trim());
  }
};

const {border, bg} = options3.colors;
// Мы деструктуризировали обьект, разбили на более мелкие удобные кусочки. Вытащили эти свойства border и bg которые находятся во вложенном обьекте в качестве отдельных ПЕРЕМЕННЫХ. Да понятное дело что сейчас это не особо как то применимо в такой маленькой вложенности, но в будущем когда будет 5 обьектов вложенных в друг друга, и тогда намного удобнее будет вот так разделять, иначе придеться прописывать options['colors']['border]['bla']['yo']['и т.д.']
console.log(border);  // black
console.log(bg);  // red
// Это как раз что мы хотели, и это значит что деструктуризация удалась

// И вы должны понимать что сеществует в языке JS так или иначе идет от обьектов, например когда используем метод toUpperCase на строке, откуда у обычной строки появляется метод который еще и что-то умеет делать, дело в том что срока на базовом уровне тоже является обьектом, и получает этот метод через цепочку прототипов. Что такое прототипы и как это работает разберем дальше. Пока что помни что JAvaScript является обьектно ориентированым языком и все сущности которые в нем есть сводятся к обьектам. Если же вдаваться в терминологию программирования JS правельнее называть прототипно ориентированым языком