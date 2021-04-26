'use strict';

window.addEventListener('DOMContentLoaded', () => {
    /*
    Продумка алгоритма
    1) Функция которая будет скрывать ненужные нам табы
    (один таб показывается, другие скрыты)
    2) Показать нужный таб 
    3) Назначить обработчик событий на список, который и
    бцдет манипулировать этими функциями
    */

    let tabs = document.querySelectorAll('.tabheader__item'),   // Список табов
        tabsContent = document.querySelectorAll('.tabcontent'), // Сами табы
        tabsParent = document.querySelector('.tabheader__items');   // Родитель табов, будем использовать делегирование

    // 1)
    function hideTabContent() {
        // tabsContent.forEach(item => {
        //     item.style.display = "none";
        // });
        /*
        Лучше подключать css стили, и подключили анимацию
        */
       tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
       });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
            /*
            Удалили класс активность у списка, ну что шрифт 
            больше и жирнее становится
            */
        });
    }

    // 2)
    function showTabContent(i = 0) {
        /*
        Нам нужно понимать к кому табу мы обращаемся
        i = 0 это параметр по умолчанию, если функция вызовится без аргумента
        подставится 0, запомни эту фишку
        */

        // tabsContent[i].style = 'block';     
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        
        tabs[i].classList.add('tabheader__item_active');
        /*
        Добавляем класс активности
        */

    }

    hideTabContent();
    // showTabContent(0); если не было бы параметра по умолчанию
    showTabContent();

    // 3)
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            /*
            Логика такая, когда мы кликнули в определенный пункт, мы должны 
            определить его номер в списке всех наших табов, и по этому номеру 
            вызвать функцию showTabContent 
            */
           tabs.forEach((item,i) => {
            /*
            Мы переберем все список табов, и будем сравнивать, если элемент который находится
            в этом псевдомассиве, совпадает с тем элементом в который кликнул пользователь, 
            тогда мы берем его номер и показываем на странице
            */
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
           });
        }
    });
});