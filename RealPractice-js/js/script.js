/* 
1. Функция которая будет скрывать не нужные табы
2. Показать нужный таб
3. Назначить обработчик события который будет и манипулировать этими функциями
*/

window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabheader__item"), //Наши разделы (Кнопки)
          tabsContent = document.querySelectorAll(".tabcontent"), //Весь блок этих табов
          tabsParent = document.querySelector(".tabheader__items"); //Родитель наших кнопок (Будем использовать делегирование событий, а вдруг с сервера новые вкладки будут прилетать);

    function hideTabContent() {                  //1
        tabsContent.forEach(item => {
            
            // item.style.display = "none";
            item.classList.add("hide");       //Добавляем класс с display:none, а у тех у кого есть show,fade удаляем 
            item.classList.remove("show" , "fade");  
        });

        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");  //И убираем класс активности 
        });
    }      

    function showTabContent(i = 0) {               //2  (i = 0 это стандарт es6,  типа параметр по умолчанию, всегда показывай первый таб)
        tabsContent[i].classList.add("show" , "fade");        //К текущему табу добавляем класс show,fade и удаляем класс hide
        tabsContent[i].classList.remove("hide");
        // tabsContent[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active");       //Добавляем класс активности
        
    }

    hideTabContent();
    showTabContent();  //Если в вызове функции не обьявляется аргумент, то подставляется параметр по умолчанию

    tabsParent.addEventListener("click", (event) => {
        let target = event.target;

        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => { 

                    /* 
                        item = какойто таб
                        i = номер в амссиве нашего таба 
                    */

                if (target == item) {  

                    /*
                    Если тот таб на который мы кликнули будет совпадать с элементом которрый мы сейчас перебираем. Если это один и тот же элемент, то мы скрываем все табы и показываем тот на который кликнули 
                    */

                    hideTabContent();
                    showTabContent(i); //тут i потомучто, на пример, мы кликнули по третьему табу, и запустилось условие он перебирает массив а треться кнопка у нас в массиве это 4-ый элемент
                }
            });
        }
    });
});          