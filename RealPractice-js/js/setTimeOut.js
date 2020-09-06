
window.addEventListener("DOMContentLoaded", () => {

  /*  TABS  */

  const tabs = document.querySelectorAll(".tabheader__item"), 
        tabsContent = document.querySelectorAll(".tabcontent"), 
        tabsParent = document.querySelector(".tabheader__items"); 

  function hideTabContent() {                 
      tabsContent.forEach(item => {
         
          item.classList.add("hide");       
          item.classList.remove("show" , "fade");  
      });

      tabs.forEach(item => {
          item.classList.remove("tabheader__item_active"); 
      });
  }      

  function showTabContent(i = 0) {               
      tabsContent[i].classList.add("show" , "fade");       
      tabsContent[i].classList.remove("hide");
  
      tabs[i].classList.add("tabheader__item_active");      
      
  }

  hideTabContent();
  showTabContent(); 

  tabsParent.addEventListener("click", (event) => {
      let target = event.target;

      if (target && target.classList.contains("tabheader__item")) {
          tabs.forEach((item, i) => { 

              if (target == item) {  
       
                  hideTabContent();
                  showTabContent(i); 
              }
          });
      }
  });

  /*  TIMER  */

  /*
  1. Функция которая будет устанавливать таймер
  2. Функция которая будет определять разницу во времени, искать разницу между тем кокое время у пользователяи и нашим поставленным дэдлайном(сколько осталось до конца акции)
  3. Функция которая будет обновлять таймер каждую секунду
  */

  const deadLine = "2020-10-21"; // акция заканчивается 21 октября, на сегоднешний день 6 сентября

 /* 2. */  function getTimeRemaining(endtime) {  // Аргумент endtime  потомучто нам в будуще туда будет прилетать  из type=date данные или наш daedline

  const t = Date.parse(endtime) - Date.parse(new Date()),  // Преобразовываем из строки в число и получим дату в мс(общее кол-во времени в мс). endtime это наша дата окончания акции. Конечно можно строку преобразовать в число другим способом, но Date.parse более целенаправленный метод который используетбся с датами. И отнимаем от текущей даты и переменную t попадет эта разница во времени в мс
        days = Math.floor(t / (1000 * 60 * 60 * 24)),  // В СЕКУНДК 1000 МИЛЛИСЕКУНД!!! Во первых округлили наши милисекунды до целого числа, затем милисекунды перевели в нормальное исчисление даты, так мы узнали сколько разницу во времени в ДНЯХ
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),  //  Разница в часах. Но проблема в том что мы выявили общее кол-во часов, например: допустим в часах у нас осталось 130, (130/24=5,41) то есть 5 дней и сколько там часов у нас осталось, и вот сколько там часов мы и передаем как остаток(%) в наш счетчик. Ведь нам нужно число не больше 24, если мы показываем дни 
        minutes = Math.floor(t / (1000 * 60) % 60), // Разница в минутах, остаток от часов 
        seconds = Math.floor(t / 1000 % 60);  //Разница в секундах, остаток от минут

    return {                // Так как у нас переменные видно только в области видимости функции, мы из возвращаем, в виде массива
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  

  /* 1. */  function setClock(selector, endtime) {  //Создаем аргумент selector потомучто этих таймеров может быть много на странице

    const timer = document.querySelector(selector), // Это будет сам блок где находится таймер
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);  // Через каждую секунду таймер будет обновлятся 
          
          updateClock(); // Чтоб не было мигание верстки, просто у нас в верстке по умолчанию установлена дата, и только через секунду он выставит нужную дату, поэтому просто вызаваем обновление таймера

      function getZero(num) {    // Функция чтоб перед однозначным числом ставился 0 (01, 02, 03 и т.д.)
        if (num >= 0 && num < 10) {  // num >= 0 это проверка просто для подстраховки, чтоб отрицательных значений не приходило 
          return `0${num}`;
        } else {
          return num;
        }
      }

    /* 3. */  function updateClock() {  

      const t = getTimeRemaining(endtime); // Расчет времени который остался прям до секунды. Эта функция находится в setClock(), а setClock() получил в виде аргумента endtime наш deadline, и так что переменная t сможет получить возвращаемый массив из getTimeRemaining()
   
      days.innerHTML = getZero(t.days);    // Выводим непосредственно на страницу наш обьект 
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
   
      if (t.total <= 0) {            //  Останавливать таймер когда отсчет пошел в отрицательные значения 
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadLine);
});          