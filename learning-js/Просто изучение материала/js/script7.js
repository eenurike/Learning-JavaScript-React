'use strict';

// ФУНКЦИИ

/*
Функции это наши действия в javascript, они помогают сократить наш код
как циклы, не использовать один и тот же код несколько раз
*/

function showMeFirstMessage() {
    console.log("I'm a function");
}

console.log(showMeFirstMessage);        // Обязательно нужно вызвать функцию

/*
Есть правила что имя функции должно быть глаголом с припиской
того над чем выполняется действие.
Есть и анонимные функции, это функции без имени, они вызываются
здесь и сейчас один раз. И потом ее не сможем вызвать, так как
у нее нет имени 
*/

function showMeAnArguments(text) {
    console.log(text);
}

showMeAnArguments("I'm an argument");

/*
Когда функция вызавается, мы может туда передать какие-то данный,
которые она будет использовать внутри себя
*/


// function errorVariable() {
//     let num = 20;                      // Локальная переменная, видна только втури функций
// }

// console.log(num);                      // num is not defined


let num2;                               // Глобальная переменная

function giveVariable() {
    num2 = 20;
    console.log(num2);
}

giveVariable();


function returnVariable() {
    num2 = 55;
    return num2;
}

console.log(returnVariable());

/*
Из функции returnVariable возвращаем значение 55 в переменной num2, то есть 
в функции returnVariable уже записанно значение, и мы его можем передать,
например в console.log
*/

let num3 = 11;

function anotherVariable() {
    let num3 = 22;
    console.log(num3);
}

console.log(num3);                  // => 11
anotherVariable();                  // => 22

/*
Видим одинаковую глобальную и локальную переменную, но значение разные,
и они между собой никак не конфликтуют
*/


let num4 = 505;

function loopBack(text) {
    console.log(num4);
    return `this is ${text}`;
}

console.log(loopBack("ЗАМЫКАНИЕ"));

/*
Видим что функция не нашла в своем теле переменную num4, и функция выходит наружу,
и ищет из вне переменную num4, находит и передает в console.log - это и есть замыкание.
По простому замыкание функции - это функция со всеми внешними переменными которые
ей доступны 
*/


function calc(a, b) {
    return (a + b);             
}

console.log(calc(10, 7));

/*
=> 17
На return код заканчивается, код после return не работает!!!
Функция нам возвращает сумму чисел, которые мы передадим в аргументы 
при вызове функции, хоть сколько раз и хоть где. 
Простыми словами функция хранит в себе те данные которые мы передадим в return, 
грубо говоря return превращает функцию в переменную и хранит в себе то что в return
*/


function ret() {
    let num5 = 44;
    return num5;
}

let anotherNum = ret();
console.log(anotherNum);

/*
=> 44
Видим что функция возвратила нам локальную переменную num5 со значением 44,
и потом мы передали это значение во внешнюю переменную anotherNum
*/

//  КЛАССИФИКАЦИЯ ФУНКЦИЙ  