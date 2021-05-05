'use strict';

window.addEventListener('DOMContentLoaded', () => {

    let tabs = document.querySelectorAll('.tabheader__item'),   
        tabsContent = document.querySelectorAll('.tabcontent'), 
        tabsParent = document.querySelector('.tabheader__items');   


    function hideTabContent() {
       tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
       });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {   
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
           tabs.forEach((item,i) => {

                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
           });
        }
    });

    // Создаем таймер 
    /*
    1) Функция которая будет устанавливать таймер, получать элементы 
    таймера и что то с ними делать 
    2) Функция которая будет определять разницу между временем, конечно
    у нас будет какой то дед лайн, сколько осталось до конца акции. 
    Это будем устанавливать в формате даты. И на этом этапе необходимо 
    будет вычислить время, которое сейчас установленно у пользователя и 
    найти эту разницу, которую будем отображать на экране
    3) Функция которая будет заниматься обновлением таймера, то есть 
    тикать время в живую 

    На сайтах есть не сколько типов таймров, есть честные таймеры, которые
    четко отсчитывают время до определенного, а есть те которые работают на
    продажу (то есть они зарускаются когда вы заходите на страницу, запоминают
    вас как пользователя, и ориентируясь только на пользователя отчитывают время)
    */
   
});