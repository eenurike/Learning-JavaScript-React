'use sctrict';

// Навинация по DOM

console.log(document.body);
/*
Видим все что находится в body
*/
console.log(document.head);
/*
Видим что находится в head, и мы можем поместить
какие то мета теги, или линк ведущий на другой css
*/
console.log(document.documentElement);
/*
Это наш HTML
*/

console.log(document.body.childNodes);
/*
Узлы  которые являются детьми у body, узлы это и элементы и ноды
И видим вот такую структуру, псевдомассив NodeList
    [text, div.wrapper, text, comment, text, script]
И если раскроем это псевдомассив, увидим вообще 8 элементов  
    0: text             // Текстовая нода, это просто перенос строки DOM в дереве
    1: div.wrapper
    2: text
    3: comment          // Комментарий
    4: text
    5: script
    6: text
    7: comment
    8: text
    9: script
    10: text
При расскрытии массива, получилось больше элементов, потомучто
это liveServer подставил свои комментарии.
Разница между DOM элементами и DOM узлами. 
Каждая сущность которая находится в DOM, по факту она будет узлом,
но не каждый узел будет элементом: все что в тегах это элементы,
а что не видим, типа перенос строки это будет узлом     
*/

// Методы по навигации

console.log(document.body.firstChild); // Видим узел переноса строки(ноду)
console.log(document.body.lastChild); // Последний узел это <script>

/*
Будем работать вот с такой структурой
    <div class="first">
        <button></button>
        <button id="current"></button>
        <button></button>
    </div>
*/
console.log(document.querySelector('#current').parentNode);
/*
Получили родителя first.
Задача: нужно получить родителя нашего first
    <div class="wrapper">
        <div class="first">
            <button></button>
            <button id="current"></button>
            <button></button>
        </div>
    ...    
*/
console.log(document.querySelector('#current').parentNode.parentNode);
/*
Получили родителя wrapper
*/

// Дата атрибуты в HTML тегах
/*
Ингда нам нужно от чего-то отталкиваться как от id,
но у id есть несколько недостатков, об этом позже. 
А по data атрибутам очень удобно ориентироваться в скриптах
    <ul>
        <li>1</li>
        <li>2</li>
        <li data-current="3">3</li>     // Второе слово после дифиса
            может быть любое и значение может быть любое, например
            data-number, это означает data-number="true"   
        <li>4</li>
        <li>5</li>
    </ul>
*/
console.log(document.querySelector('[data-current="3"]'));
/*
Атрибуты записываются в [название = "значение"]
*/
console.log(document.querySelector('[data-current="3"]').nextSibling);
/*
Получаем следующий узел(следующего соседа), а следующий узел это текстовая нода(перенос троки)
*/
console.log(document.querySelector('[data-current="3"]').previousSibling);
/*
Получаем предыдущий узел(предыдущего соседа), а предыдущий узел это текстовая нода(перенос троки)
*/

// Получаем не УЗЛЫ, а ЭЛЕМЕНТЫ
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);
/*
=> <li>4</li>
=> <li>2</li>
И получаем именно слудующий и предыдущий элемент
*/

console.log(document.querySelector('#current').parentElement);
/*
Получили родителя first, в отличии от parentNode,
тут мы конкретно знаем что получим элемент, а не узел текстовой ноды
*/
console.log(document.querySelector('#current').parentElement.parentElement);
/*
=>  <div class="wrapper">
*/

console.log(document.querySelector('body').firstElementChild);
console.log(document.querySelector('body').lastElementChild);
/*
=>  <div class="wrapper"> 
<script src="js/script2.js"></script>
Первый ЭЛЕМЕНТ body
Последний элемент body
*/

// Но с childNodes таких аналогов нет, придеться использовать костыль
console.log(document.body.childNodes);
/*
При открытии обьекта text видит свойство как nodeName: "#text",
вот к нему и будем обращаться
*/
for (let node of document.body.childNodes) {    // Запускаем перебор в псевдомассиве childNodes
    if (node.nodeName == "#text") {
        continue;
    }
    console.log(node);
}
/*
for of перебрал всех детей которые находились в body,
и оставил только именно элементы. 
Использовали перебор for of а не forEach, потому что
только в for of можно использовать continue и break.
Иногда нам нужно перебирать элементы в псевдомассиве с
помощью for of, чтоб пропускать какие то элементы,
или просто останавливать цикл на каком то условии
*/