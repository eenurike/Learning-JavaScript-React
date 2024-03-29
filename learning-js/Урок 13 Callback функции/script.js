'use strict';

// Дело в том классические функции иногда используются не совсем в очевидных местах и не совсем очевидных конструкциях, в том числе сюда относится callback функция, мы ее очень активно будем применять в дальнейшем

function first() {
  // Здесь выполняются какие-то действия, но кроме этого данная функция имеет в себе задержку, например эту функция может общаться с сервером и сервер нам ответит только через 0.5 сек, или здесь какая-то обработка очень тяжелых сложных данных, которые тоже занимают какое-то время. Для того чтобы пока сэмулировать такое поведение
  setTimeout(function() {
    console.log(1);
  }, 500);  // задержка в пол секунды(500 миллисекунд)
}

function second() {
  console.log(2);
}

first();
second();
// В итоге получаем что вторая функция отработала быстрее первой функции, хотя мы прописали чтоб сперва отработала первая а потом вторая, ну это понятно из-за задержки. Но если смотреть только на код, все становится не совсем очевидно, потому-что эта задержка изначально у нас может быть и не видна, то есть мы не знаем как долго будет отрабатываться первая функция, а в коде когда мы так вызываем функции, мы предполагаем что они выполнятся строго одна за другой, и как вы видите мы можем получать совершенно не предсказуемый результат. Особенно это важно когда эти функции работают с одними и теми же данными, то есть мы передаем данные в first(), а потом с результатом этой функции будет работать уже second(). Так что запомни правило, если функции идут одна за другой это не значит что они выполняются прямо так же, да они запускаются одна за другой, но результат могут отдать в разное время

// Что такое callback - это функция которая должна быть выполнена после того как другая функция завершила свое выполнение

function learnJS(lang, callback) {
  // Это и есть главный шаблон callback функции, то что в другую функцию в качестве аргумента в будущем мы сможем передать другую функцию 
  console.log(`Я учу ${lang}`);
  callback();
  // Тут выполняем эту callback функцию и ВЫЗЫВАЕМ. Получется так, когда выполнится действие первой функции то есть console.log и только после этого в работу вступит вторая функция
}

// learnJS('JavaScript', function() {
//   console.log('Уже знаю callback функции');
// });
// Но так как мы передали анонимную функцию, она потом исчезнет, то есть мы несможем к ней больше обратится, но вполне можно сюда передавать какую-то осознаную функцию

function done() {
  console.log('Уже знаю callback функции');
}

learnJS('JavaScript', done);
// И заметь что в аргументе мы не вызываем функцию(не пишим круглые скобки), мы просто туда передали функцию, она выполнется в первой функции callback() это мы именно ее вызываем. Мы ее просто передаем, чтоб она уже в дальнейшем была использована
// Callback позволяет быть нам уверенным в том что определенный код не начнет исполнение до того момента, пока другой код не завершит свое исполнение

// Передача одного аргумента из функции в другой с помощью callback

function test(a, callback) {
  let num = 7;
  let result = num + a;
  callback(result);
}


function test2(b) {
  let borderWidth = 20;
  console.log(`${borderWidth + b}px`);
}

test(5, test2);

// Или

// test(5, function(b) {
//   let borderWidth = 20;
//   console.log(`${borderWidth + b}px`);
// });


// Передача результат одной функции в другую 

let something = 10;

function testFunk(a, b) {
  return a + b;
}

function testFunk2(result, c) {
  console.log(result + c);

}

testFunk2(testFunk(5, 5), something);