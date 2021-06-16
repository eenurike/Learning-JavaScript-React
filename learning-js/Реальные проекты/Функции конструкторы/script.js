// Функции конструкторы

'use strict';

/* По классификации типов данных мы помним, функция по своей сути
является обьектом, и по идеи в нее можно записать какие то методы и свойства.
Так же мы затрагивали тему, что существует длинный синтаксис для
создания типов данных, который начинается с ключевого слово new */

const num = new Number(3);
/* так создали число 3, и JS Hint сразу подсказывает, что это
не совсем коректный синтаксис создания числа, но его тоже можно применять */
console.log(num);
/* Видим что такой способ работает, и мы получаем тип данных Number,
раскрыв Number видим его Value 3 */

const func = new Function(3);
console.log(func);
/* создали функцию, jsHint сразу скажет что такой синтаксис вообще устарел,
и его не стоит использовать, но он тоже работает.
И если такая функция будет содержать, методы и функции, то она в итоге
создаст нам новый обьект. То есть созданием новой функции, мы создаем обьект,
свойства которого уже прописаны в этой функции. Что-то напоминает, вспомним урок
ООП(создание новых авто) */

/* Ну и сейчас уже напишем более реальный пример, который использует
нормальный синтаксис, а не то что уже устарело */

function User(name, id) {
    /* И здесь запишем свойство, которое будет отображаться,
    которое будет отображаться точно так же как и в обьекте */

    /* В следующем уроке более подробнее узнаем о контексте вызова this!
    Но представь, что для каждого конкретного пользователя, будем указывать
    свое имя, и свой конкретный номер, ДЛЯ КАЖДОГО ОТДЕЛЬНОГО ПОЛЬЗОВАТЕЛЯ!!! */
    this.name = name;
    this.id = id;
    /* У каждого пользователя будет свое уникальное имя и id, который мы его 
    зададим во время создания нашего пользователя */
    this.human = true;
    /* Этот параметр будет общим для всех пользователей, все пользователи
    будут людьми.
    И вот теперь используя такой синтаксис, наша функция стала конструктором,
    с ее помощью теперь можем создавать новых пользователей */
    this.sayHello = function() {
        console.log(`Hello my name is ${this.name}`);
    };
    /* Создали метод */
}

const nurike = new User('Нурике', 55505);
/* Самое главное что в этой переменой будет находится, не функция
а обьект! Потомучто функция User стала конструктором, и теперь когда
она вызывается, при помощи ключевого слово new, она создает новый обьект
с теми свойствами которые мы записали (name,id,human) */

const liuba = new User('Люба', 99324);
/* Отпачковали нового пользователя liuba, на основании нашего конструктора */
console.log(nurike);
console.log(liuba);

console.log(nurike.name);   // => Нурике
console.log(liuba.id);   // => 99324
liuba.sayHello();   // => Hello my name is Люба
/* Видим два РАЗНЫХ обьтекта,с одинаковыми свойствами и методами, но с разными 
значениями name и id, и общим свойством human:true*/

/* Вот такие функции у нас предназначены для конструирования обьектов,
и создания множество подобных копий. Тоже самое было с примерами с авто,
от прототипа авто, отпачковываем конкретные конкретных потомков 
(bmw, toyota, lexus и т.д.) все они чем то различаются, но в общем они похоже,
своими свойствами и методами, а значение у каждого разные */

/* Вспомним свойство prototype, при помощи него можем добавлять
методы и свойства в наш конструктор, и они будут прототипно наследоваться
у потомков. Этот прием используется, когда у нас нет доступа к нашему
конструктору либо мы его не можем менять по каким то причинам, но его
нужно модифицировать, добавить каких то плюшек */

User.prototype.sayGoodbey = function() {
    console.log(`Пользователь ${this.name} попращался`);
};

nurike.sayGoodbey();
/* Причем заметь, мы указываем не прототип как это было в setPrototype,
когда одно наследуется от другого, а просто добавляем свойства или методы
в уже существующий обьект.
Кончтрукторы нам нужны для новых однотипных обьектов. На практике
это могут быть новые пользователи сайта, товары в магазинах, ролики 
на youtube (везде где есть шаблонизация), причем компоненты сайта могут
создаваться вот таким образом: допустим есть не сколько слайдеров на
одной и той же странице, но слайдеры разные, в одном будет 5 слайдов,
в другом 10, один будет использовать автопереключение, другой не будет,
и эти параметры будем задавать как аргументы вот такого конструктора,
и конструировать наши слайдеры и у которых все таки будут одинаковые свойства
Важный момент! сейчас разобрали стандарт ES5, это то как на самом деле
происходит под капотом JS, а в стандарте ES6 появилась такая вещь как классы.
Классы это так называемый синтаксический сахар, то есть красивая и удобная обертка
этого всего функционала, поэтому весь реальный функционал прямо сейчас создается
именно при помощи классов, главное мы разобрали как устроенно внутри.
Такой способ разберем через урок, когда будем знакомиться с this */