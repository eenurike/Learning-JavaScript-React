'use strict';

/* Вообще что такое стандарт ES6
Будем говорить откровенно, люди весьма ленивы и всегда
ищат способ облегчить себе работу, к тому же в JS не мало не точностей
которые могут привести к ошибкам. Вот поэтому в 2015 году
был выпущен стандарт JS немного облегчающий работу с ним.
Все современные браузеры поддерживают его даже EDGE,
а если нужна поддержка старых браузеров типа IE, то будем пользоваться
такими плагинами как babel.
По простому классы это красивая обертка функций конструкторов, еще
можно встретить такое понятие как синтаксический сахар, так что
классы внури это все те же функции.
Предназночение такого приема, чаще всего на сайтах, каких то приложениях
будет какаято шаблонизация, вместо того чтоб каждый раз создавать 
какайто слайдер или какуюто статью, ее полностью описывать (свойства, методы и т.д),
мы создаем один шаблон, который говорит вообщем что будет делать этот
компонент, и потом уже от этого шаблона создаем отдельные экземпляры,
отдельных потомков которые будут помещаться на наш сайт. 
Таким образом используя один участок кода, можем создать много
компонентов на сайте, которые будут чем то отличаться */

class Rectangle {
    /* Имя класса всегда пишется с большой буквы, особенно
    когда подключаешь какие то библеотеки и модули */
    constructor(height, width) {
        /* Тут пишется именно какие характиристики будут
        у нашего прямоугольника, а аргументы в круглых скобках,
        то есть два этих параметра будут приходить из вне
        при создания экземпляра класса */
        this.height = height;
        this.width = width;
        /* this.height это свойство каждого экземпляра,
        а height это наш аргумент туда приходит значение высоты каждого
        экземпляра при его описании */
    }


    calcArea() {
        return this.height * this.width;
        /* Методы записываються под конструктором,
        наш метод показывает площадь наших квадратов */
    }
}

const square = new Rectangle(10, 10);
console.log(square);
console.log(square.calcArea());
/* Создали первый квадрат */

const rectangle = new Rectangle(20, 100);
console.log(rectangle);
console.log(rectangle.calcArea());
/* Создали прямоугольник */

/* Вспомним принципы обьектно ориентированного программирования
1) Абстракиця - это когда отделяем концепцию(шаблон) от ее экземпляров
КОНЦЕПЦИЯ
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;

    }
    calcArea() {
        return this.height * this.width;

    }
}
ЭКЗЕМПЛЯРЫ
const square = new Rectangle(10, 10);
const rectangle = new Rectangle(20, 100);

2) Наследование - это способность нашего обьекта или класса 
базироваться на другом обьекте или классе, на самом деле это главный
механизм для повторного использования какогото кода, и при этом
наследственное такое отношение классов у нас четко будет определять
их иерархию
*/

class ColoredRectangleWidthText extends Rectangle {
    /* Наш новый класс будет наследоваться от его родителя
    Rectangle, то есть все свойсва и методы в Rectangle будут
    уже и в этом классе. В реальных проектах классы будут разростаться,
    будут много свойств и методов, и вот тогда уже наследование
    как никогда будет актуальной */
    constructor(height, width, text, bgColor) {
        /* Эти аргументы будем передавать при создания экземпляров,
        и аргументы из родительского класса все равно нужно передеть,
        от этого никуда не деться */

        super(height, width); //В аргументы пишем те свойства которые хотим передать
        /* Вызываем супер конструктор, звучит страшно)
        но это всего на всего конструктор родителя, она вызывает
            this.height = height;
            this.width = width; 
        просто чтоб не копировать все свойства у родителя,
        мы написли super(), и нам эти строки повторять не нужно 
        они автоматом перейдут сюда, засчет наследования extends Rectangle 
        Есть одно важное правило после constructor сразу пишеться super()
        и не как иначе!!! */
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const square2 = new ColoredRectangleWidthText(50, 50, 'Hello World', 'grey');
console.log(square2);
square2.showMyProps(); //Вызываем потому что в фунции уже прописано console.log
console.log(square2.calcArea()); //В console.log потому что нам функция возвращает значение