'use strict';

let box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

console.dir(box);
/*
В консоль вывелся обьект box, смотрим его свойства и методы.
И видим метод style, это обьект в обьекте, и все свойства
в обьекте style это inline свойства, это свойства которые 
записываются не посредственно в атрибут тега style. 
С работой именно со css свойствами поговорим позже, а
пока поработаем с inline свойствами  
*/

box.style.backgroundColor = 'green';
box.style.width = '500px';
/*
Значение записвываем в формате camelCase,а значение 
как писали бы в обычном css, потому что css знает только строки.
Приоритестность css правил говорит что inline стили 
важнее чем что прописанно в css, inline стили их
перетрут!
*/
btns[1].style.borderRadius = '100%';
circles[2].style.backgroundColor = 'rgb(243, 189, 41)';
/*
Помним что к псевдомассиву нужно обращаться, через 
конкретный индекс элемента 
*/
box.style.cssText = 'background-color: pink; width: 350px;';
/*
Поодному css свойству прописывать не очень удобно, cssText
позволяет прописать сразу несколько стилей, как писали бы
в обычном css 
*/
let num = 300;
let brown = "brown";
box.style.cssText = `background-color: ${brown}; width: ${num}px;`;
/*
И не забываем про интерполяцию, таким способом можем динамически менять стили
*/

/*
Если наужно сразу всем элементам поменять стили, тут на
поможет цикл, или методы переборов массива (for of, forEach)
*/

// Цикл, но им все реже и реже пользуются
for (let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = 'grey';
    btns[1].style.backgroundColor = 'pink';
}

// метод for of
for (let i of circles) {
    i.style.backgroundColor = 'lightgreen';
    circles[1].style.backgroundColor = 'darkred';
}

// метод forEach
hearts.forEach(item => {        // Если нужен всего один аргумент, можно без доп. скобок
    item.style.background = 'black';
    hearts[1].style.backgroundColor = 'darkgrey';
});



// Основные методы для работы с элементами
/*
Часто части сайта генерируются с помощью JS, на таких принципах
построен весь React. Нужно уметь на ходу в JS создавать элементы 
*/
const div = document.createElement('div');
/*
Вот создали элемент, но стоит учесть что он существует только
внутри JS.
Таким же образом можем создавать текстовые узлы, это элементы
без оболочки тега 
*/
const text = document.createTextNode('Тут был я');
/*
И частенько можно услышать, не элементы, а ноды.
И такой текст появится на странице, но такой метод 
используется очень редко
*/

/*
Обычно мы будем добавлять, удалять, модифицировать стили в классах,
а не в инлайн style. Существует простое свойство className, но его 
лучше не использовать, так как оно устарело. Лучше использовать
classList
*/
div.classList.add('black');
/*
Добавили клас с именем black, и напомню этот блок лежит
пока что только в JS. И сейчас будем этот элемент вставлять 
в HTML (в конец,в начало, заменить или удалить), но только
по отношению к другому элементу
*/


// Современный способ вставки элементов
document.body.append(div);
/*
И видим в конец тега body, втавился наш блок div со стилями black,
но body это зарезервированное слово в JS. Получаем какойто элемент через
querySelectorAll и обращаемся к нему, или если нужно обратить только 
один раз, можем сразу прописать все вместе
*/
document.querySelector('.wrapper').append(div);
/*
Открыв панель разработчика, видим что в конец wrapper добавился
наш блок
Но лучше вынесем наш wrapper
*/
let wrapper = document.querySelector('.wrapper');
wrapper.prepend(div);
/*
Видим наш блок встал в начало тега wrapper. И стоит заметить 
этот наш блок все время перезаписывается, а не создается новый
такой же блок, для новых блоков нужно создать эти блоки)
*/

hearts[1].before(div);      // Перед вторым сердечком
hearts[1].after(div);       // После второго сердечка

// Удаляем элементы со страницы
circles[2].remove();        // Удалили последний кружек

// Заменяем один элемент на другой
hearts[0].replaceWith(circles[0]);      
/*
Заменили сердечко на круг, 
заменили один элемент другим, ну и кружек этот, 
исчез из прежнего места и встал вместо первого сердечка
*/


// Старые способы добавления 

// wrapper.appendChild(div);    // втавляет в конец div

// wrapper.insertBefore(div, hearts[1]);
/*
Втавить перед
Вставить наш div перед вторым сердечком, в родительском
блоке wrapper
*/

// wrapper.removeChild(hearts[1]);      // Удалили второе сердечко из wrapper

// wrapper.replaceChild(circles[0], hearts[2]);
/*
кружечек ставим вместо сердечка
*/


// Добавление контента (текст или HTML теги)
// Если надо вписать какой нибуль текс. Способ 1
div.innerHTML = "Hello Wolrd";
/*
Видим что в наш созданный блок вставился текст. Но не зря
этот метод называется HTML, туда можно поместить HTML структуру
*/
div.innerHTML = "<h1>Hello World</h1>";
/*
И благодоря этому методу, перед нами раскрывается 
огромное кол-во возможностей. Можем динамически с помощью
таких вот строк, формировать структуру сайта и сразу же
её туда помещать 
*/

// Способ 2

// div.textContent = "Nurike";

/*
Точно так же, но только не работает с HTML тегами
*/

// div.textContent = "<h1>Nurike</h1>";

/*
Просто получили строку с надписью <h1>Nurike</h1>
*/

/*
Разница между innerHTML и textContent. 
Например мы при получения данных от пользователей,
пользователь может случайно или специально сломать 
нам всю верстку, ну пользователь введет в input 
<div style='display:none'></div> и блок сломается.
Или с помощью innerHTML можно засунуть вирус, в 
тег <script></script>.
Когда мы четко знаем что мы хотим получить от пользователя,
либо записать на страницу только текст, используем textContent.
Когда предполагается работа с HTML структурой, 
то используем innerHTML
*/

div.insertAdjacentHTML("afterend", '<h2>Nurike</h2>');
/*
Так вставляем кусочек HTML кода перед или после определеных тегов
beforebegin - элемент становится перед нашим div
    <h2>Nurike</h2>
    <div class="black">
        <h1>Hello World</h1>
    </div>

afterbegin - элемент становится в начало нашего div,
было вот так
    <div class="black">
        <h1>Hello World</h1>
    </div>
стало вот так
    <div class="black">
        <h2>Nurike</h2>
        <h1>Hello World</h1>
    </div>

beforeend - элемент становится в вконец нашего div,
    <div class="black">
        <h1>Hello World</h1>
        <h2>Nurike</h2>
    </div>

afterend - элемент становится после нашим div  
    <div class="black">
        <h1>Hello World</h1>
    </div>
    <h2>Nurike</h2>
*/

/*
И один не очевидный способ получения элементов, вот мы получили
родитель наших сердечек wrapper
let wrapper = document.querySelector('.wrapper');
и что находится внутри .wrapper, можем обращатся через wrapper
let hearts = wrapper.querySelector('.heart');
То есть мы обратились именно к этому родителю, и иенно к
этим сердечкам, это значит, если у нас на странице были бы
еще элементы с таким же классом heart, то их бы JS не учитывал!
*/
