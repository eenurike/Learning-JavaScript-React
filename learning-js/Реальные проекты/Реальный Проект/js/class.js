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


    let modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');


    let closeModal = () => {      
        modal.classList.remove('show');
        modal.classList.add('hide');

        document.body.style.overflow = '';
    };

    let openModal = () => {
        modal.classList.remove('hide');
            modal.classList.add('show');

            document.body.style.overflow = 'hidden';
           clearInterval(modalTimerId);
    };

    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });    

    modalCloseBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // const modalTimerId = setTimeout(openModal, 3000);

    let showModalByScroll = () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)  {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    };

    window.addEventListener('scroll', showModalByScroll);

    /* Использование классов для карточек */

    class MenuCard {
        /* Тут будем создавать шаблон, для созданий карточек
        нам понадобится
        1) src для изображений на карточках
        2) Альтернативный текст если изображение не загрузилось
        3) title заголовок
        4) Описание
        5) Цена */
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            /* Сюда будет передаваться родительский элемент, куда наша
            ново созданная карточка(верстка) будет вставляться,
            и в parent лежит именно DOM элемент */
            this.transfer = 426.94;
            /* Вообще можно сделать чтоб курс динамически подстовлял
            актуальный курс по сегоднейшему дню, указав в аргументах курс
            который будет приходить со стороних сервисов,
            но пока сделаем статический курс */
            this.changeToTenge(); 
            /* При создании карточки возовится метод changeToTenge
            и автоматически конвертирует нашу сумму */
        }
        /* Пока что этот класс немного глупенький,
        потомучто он будет создавать только верстку,
        для разнообразия добавим один метод. У нас
        с баз данных будет прилетать цена в $,
        и нам надо перевести ее в нашу валюту */

        changeToTenge() {
            this.price = this.price * this.transfer; 
        }

        render() {
           /* Но самое главное это метод render, который каждый
            должен самостоятельно реализовывать
            1) Создаем элемент
            2) В него поместить определенную верстку
            3) Эту верстку дополнить теми данными которые приходят как аргументы
            4) И поместить этот элемент уже на страницу */
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> тг/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
            /* И в наш родительский элемент помещаем нашу верстку */
        }
    }

    /* const div = new MenuClass();
    div.render();
    Могли бы так создавать новые экземпляры, но воспользуемся другим способом */

    new MenuCard(
        /* Пишем в столбик для красоты */
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"
    ).render();
    /* Обьект могут же существовать и без переменных, дедается это тогда когда обьект используется
    на месте(здесь и сейчас), если обьект не положим в переменную то он в будущем потеряется,
    он тут создаться и удалится, потомучто на него не будет никаких ссылок, это удобно когда
    обьект используем только один раз, первый синтаксис тоже правельный, просто альтернативный
    синтаксис чтоб уменьшить код */
});



