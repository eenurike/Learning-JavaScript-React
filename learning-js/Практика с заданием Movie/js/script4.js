'use strict';

// События на мобильных устройствах
/*
Мобильные браузеры сами по себе нормально отрабатывают 
со всеми сайтами, если мы на десктопе установили событие клика
оно все равно будет работать на мобилке
*/

/*
touchstart - это событие срабатывает при возникновении касания
к этому элементу 
touchmove - при движении пальцем по экрану
touchend - когда палец отрывается от элемента 
touchenter - когда мы видем какойто элемент,
и этот элемент наскакивает на зону(другой элемент) которому мы прописали
это событие  
touchleave - наоборот, когда элемент покинул зону с событием
touchcancel - когда наш палец выходит из общего обьекта,
например сервим в браузере, и палец вышел за пределы браузера,
и палец перестает отслеживаться  
*/

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();
        /*
        Когда назначаем мобильные события, всегда
        лучше отменять стандартное поведение
        */
       console.log("touch event");
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();
       console.log("move event");
    });

    box.addEventListener('touchend', (event) => {
        event.preventDefault();
       console.log("end event");
    });
    /*
    Это полный цикл взаимодействия пальцами с 
    элементами на экране. 
    У event есть свои свойства для мобилок
    touches - выдает список всех пальцев которые 
    сейчас взаимодействуют с экраном 
    */

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();
       console.log(event.touches);
       /*
        Видим вывелся псевдомассив touchList,
        раскрыв его видим свойство length:1
        значить один палец, ну так как мы кликнули мышью
        у которой всего одна кнопка
       */
        console.log(event.targetTouches);
        /*
         Сколько пальцев взаимодействуют с элементом 
        */
       console.log(event.changedTouches);
       /*
        Сколько пальцев совершили назначеное действие,
        например при событии touchend, и у нас задействовано 
        все пять пальцев, и если уберем какой то один палец,
        это свойство скажет какой палец был убран
       */
    });

  
});