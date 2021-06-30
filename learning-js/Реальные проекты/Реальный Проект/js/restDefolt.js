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


    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            /* Вот последним аргуументом добавили REST оператор */
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            /* И не забываем что это массив, и работать с ним надо как с массивом */
            this.parent = document.querySelector(parentSelector);
            this.transfer = 426.94;
            this.changeToTenge(); 
        }

        changeToTenge() {
            this.price = this.price * this.transfer; 
        }

        render() {
            const element = document.createElement('div');
            /* Пока что эта вся структура оборочивается
            в один конкретный div, и таком случае нам понадобится класс menu__item
            присвоить этому div, возможно при создании карточки мы захотим добавить
            классы, там для увеличения, уменьшения или поменять цвет, для кастомизации.
            И тут и понадобится REST оператор, так как незнаем сколько классов прилетит.
            И так как в REST нам классы прилетят в массиве this.classes, то и нам
            нужно обработать его как массив, пройтись по каждому классу внутри,
            вытащить названия этого класса и присоединить к этому div */

            // this.classes.forEach(className => element.classList.add(className));

            /* Так как этот метод перебора можно записать в одну строку,
            уменьшаем код, и при создания новых карточек, будем добавлять
            кому нужно индивидуальные классы */

            /* Эта часть по параметры по умолчанию.
            Смотри, если даже в массив clsses ничего не попадет, он
            создаст пустой массив, а как помним пустой массив возвращает true,
            по этому лучше проверку делать конкретно на кол-во элементов
            в массиве */
            if (this.classes.length === 0) {
                this.defaultClass = "menu__item";
                /* Для удобства создаем свойство, если нужно использовать его в дальнейшем */
                element.classList.add(this.defaultClass);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> тг/день</div>
                    </div>
            `;
            /* И убираем <div class="menu__item"> из структуры, так как
            мы уже будем добавлять класс menu__item при создании карточек */
            this.parent.append(element);
        }
    }


    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        6,
        ".menu .container",
        "menu__item",
        "big"
        /* И добавляем класс menu__item, и для пробы добавили класс big,
        но нужно предусматреть еще один вариант, а если забудем вписать
        классы при создании карточек, то полетит вся верстка,
        и тут воспоользуемся параметрами по умолчанию.
        Но сразу к REST оператору не можем подвязать класс 
        ...classes = class"menu__item", REST операторы не поддерживают
        параметры по умолчанию, или проверка с помощью логического оператора 
        при создании свойства this.classes = classes || "menu__item)" 
        как бы логично, если нет класса то это false и он сам подставит класс,
        но нет. Дело в том что в this.classes попадает строка menu__item,
        и она будет в дальнейшем перебираться, а к строки нет метода forEach,
        да и вообще нам надо перебрать массив а не строку.
        И нам поможет обычное условие в render*/
        
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        10,
        ".menu .container",
        /* Проверяем на параметры по умолчанию */
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        8,
        ".menu .container",
        "menu__item"
    ).render();
});



