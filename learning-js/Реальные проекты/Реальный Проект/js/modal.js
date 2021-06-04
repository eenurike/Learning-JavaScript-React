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

  
    const deadline = '2022-06-13'; 

    function getTimeRemaining(endtime) {

        const t = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor( (t/(1000*60*60*24)) );
        const hours = Math.floor( (t/(1000*60*60) % 24) );
        const minutes = Math.floor( (t / 1000 / 60) % 60);
        const seconds = Math.floor( (t/1000) % 60 );

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };

   }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }


    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),        
              hours = timer.querySelector('#hours'),        
              minutes = timer.querySelector('#minutes'),        
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);  
              
              updateClock();

        function updateClock() {

            let t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

           if (t.total <= 0) {
               clearInterval(timeInterval);

           }
          
        }
    }

    setClock('.timer', deadline);

    // Создаем модальное окно
    /*
    Будем навешивать модальные окна на несколько тригеров,
    тригеры: например нажимаем на кнопку и всплывает модальное окно.
    Первым делом на эти тригеры(кнопки) нужно назначить какой нибудь общий якорь,
    воспользуемся data атрибутами с одинаковыми именами, так как у одно модальное
    окно на эти кнопки. Назовем атрибут data-modal у button.
    И таким образом сможем получить только те кнопки, которые будут ответствены
    за вызов модального окна. И похожая система будет с обратной ситуацией, когда
    нужно закрыть модальное окно, например крестик на самом модальном окне. 
    На эту иконку крестика в форме назначаем атрибут data-close.
    Конечно можно использовать class и id, но дата атрибуты предназначены именно
    для работы с JS 
    */

    let modalTrigger = document.querySelectorAll('[data-modal]'),
        /*
        Наши кнопки именно с дата атрибутами
        */
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');


    let closeModal = () => {        // Функция закрытия мод. окна
        modal.classList.remove('show');
        modal.classList.add('hide');
        /* И вариант с toggle */
        // modal.classList.toggle('show');

        document.body.style.overflow = '';
        /*
        Делаем пустую строки, и он сам сделает ее в дефолтный,
        то есть в scroll
        */
    };

    let openModal = () => {
        modal.classList.remove('hide');
            modal.classList.add('show');
            /* Или вариант с toggle */
            // modal.classList.toggle('show');

            document.body.style.overflow = 'hidden';
            /*
            Чтоб при открытии модального окна сайт не скролился,
            за прокрутку отвечает css свойство overflow
            */
           clearInterval(modalTimerId);
           /* Отменяем наш таймер, этот таймер ниже,
           этот материал со следующего урока! */
    };

    modalTrigger.forEach(item => {
        /*
        Открываем мод. окно при клике на кнопку 
        */
        item.addEventListener('click', openModal);
    });    

    modalCloseBtn.addEventListener('click', closeModal);
    /*
    Закрываем мод. окно при клике на крестик, не вызываем closeModal,
    так как это callback он ждет выполнения click
    */

    /*
    Улучшим модальное окно, сделаем чтоб при клике на подложку
    и на клавишу ESC мод. окно закрывалось. 
    У нас HTML структура такова
    <div class="modal">
     <div class="modal__dialog">
         <div class="modal__content">
             <form action="#">
             ...
             </form>
         </div>
     </div>
    </div>
    то есть, modal__dialog это само модальное окно, 
    а modal его родитель с background color и т.д.
    */
    
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
        /*
        Отслеживаем наш target, если будет равен родителю model,
        то закрываем 
        */
            closeModal();
        }
    });

    // Закрытие при клике на ESC

    document.addEventListener('keydown', (event) => {
    /*
    Обращаем уже ко всему документу, а не к конкретному элементу 
    */
        if(event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        /*
        Свойство code отвечает за конкретные клавиши, прогугли как эти
        клавиши называются, прям в поисковой строке впиши event.code
        Ну и нужно реализовать, чтоб только при открытом мод. окне, работала 
        кнопка esc, а то так оно будет постоянно тригерится.
        Если открыто окно и нажата esc, то только тогда закроется окно
        */
        }
    });

    // Чтоб модалка вызвалась через какое то время

    const modalTimerId = setTimeout(openModal, 3000);
    /* Но проблема в том что, если пользователь уже кликнул на тригер,
    и мод. окно вызвалось, а потом закрыл мод. окно, и через какое то время 
    снова вылазиет мод. окно, не логично как то. Так что очищаем таймер
    clearInterval, будем запускать clearInterval в функции openModal, так как
    если пользователь нажимает на тригер и вызывается openModal, и там уже
    вызывается clearInterval, и наш таймер не вылезет через какое то время */

    // Чтоб модалка вызывалась когда пользователь долистает страницу до конца

    /* Тут воспользуемся знаниями из урока с "Параметрами документа" 
    познакомимся с новой метрикой pageYOffset, по сути это одно и тоже
    что и scrollTop - сколько px пользователь отлистал сверху, 
    только pageYOffset поддерживается чуть больше в старых браузерах,
    ну и конечно в старом коде чаще встречается именно pageYOffset.
    Алгоритм действий такой:
    1) Возьмем свойство которое отвечает за прокрутку сверху pageYOffset 
    2) Возьмем свойство которое отображает высоту именно клиента,
        то есть его видимой части, то что он видит в данны момент без прокрутки
    3) И будем ее сравнивать со scrollHeight(с полной прокруткой
        и с полным контентом который есть по высоте) Если эти два
        выражения будут совпадать, то пользователь долистал до конца */

    // window.addEventListener('scroll', () => {
    //     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)  {
    //         openModal();
    //         /* Но проблема в том что, каждый раз когда долистываешь до конца 
    //         вызывается мод. окно, это не правильно, нужно всего один раз,
    //         и вспоминаем полезный аргумент у обработчиков события
    //         once:true, но он не сработает, так как когда пользователь
    //         начнет скролить, после первого скрола и отработает once:true.
    //         Тут нам поможет удалиние обработчика события */
    //     }     
    // });

    let showModalByScroll = () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)  {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
            /* Обработчик события отработает один раз, и потом он удалится */
        }
    };

    window.addEventListener('scroll', showModalByScroll);
    /* Помним чтоб удалить обработчик события, ему нужна ссылка на главный
    обработчик события. И уточнить именно window так как пользователь
    скролит окно браузера! */
});


