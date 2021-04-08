'use strict';

// Получение элементов со страницы
/*
DOM - Document Object Model
Это дерево узлов HTML тегов, при этом узлы связаны
между собой: родительский, дочерний. И эти узлы
можем представит в виде обычного обьекта, именно
по этому называется обьектная модель документа,
и как у любого обьекта, у него могут быть свои методы.
document - это глобальный обьект страницы, и document
существует только в браузере
Методы получения элементов со страницы можно разделить
на две категории
*/

// 1) Те которые существовали давно, они уже устоявшиеся
let box = document.getElementById('box');
/*
Уникальный id может быть только один 
*/
console.log(box);
/*
И видим что в консоле в браузере показывается этот элемент,
если навести на этот элемент который в консоле, браузер будет 
его указывать на странице
*/

let btns = document.getElementsByTagName('button');
console.log(btns);
/*
Проблема с поиском по тегам в том что, id с определенным именем
всего один на странице, а одинаковых тегов может быть много. 
И видим результат, мы получили HTMLCollection и в массиво подобном элементе
наши кнопки - это и есть псевдомассив, на котором не работают методы массива.
И видим что он прототипно наследуется от HTMLCollection, зайдя туда
там нет никаких методов
*/
btns = document.getElementsByTagName('button')[1];
console.log(btns);
/*
Указывая конкретную кнопку из псевдомассива, мы получаем 
конкретный элемент
*/
btns = document.getElementsByTagName('button');
console.log(btns[1]);
/*
Но лучше таким способом
*/

/*
Даже если кнопка будет всего одна, и мы попытаемся
обратиться к ней console.log(btns), то все равно
получим псевдомассив с одной кнопкой, и таким образом
не сможем поменять цвет у массива с одной кнопкой, нужно 
обращаться к самому элементу console.log(btns[0])
*/

let circles = document.getElementsByClassName('circle');
console.log(circles);
/*
Ищем по классу, и получили тоже псевдомассив, к которому
нужно обращаться к конкретному элементу. Лайфхак
получаем псевдоэлемент, когда getElement(s)
*/

// 2) Более современный метод, и они более функциональный 

let hearts = document.querySelectorAll('.heart');
/*
Тут мы используем css селекторы, то есть пишем так как бы 
писали в css файле (# , . , вложеность класса, псевдоклассы, атрибуты и т.д.),
и защет этого этот способ будет удобнее чем первый способ,
еще как и с getElement(s) querySelector(All), выдает нам псевдомассив.
И один самый большой плюс этого метода в том, что у первого способа
нет никаких методов, а querySelectorAll это исключение, у него
есть метод forEach()
*/
console.log(hearts);
/*
И видим появился псевдомассив NodeList, заходим в его прото
NodeList, и у него уже видим метод forEach()
*/


hearts.forEach((item) => {
    console.log(item);
    // hearts[2].style.background = "grey";
});
/*
И так мы вывели все три сердечка в консоль, а ниже
обратились к определенному элементу и поменяли у него стиль,
но это в следующем уроке
*/

let oneHeart = document.querySelector('.heart');
console.log(oneHeart);
/*
Получили один, первый элемент. Хотим поучить один
первый любой элемент используем querySelector
*/


