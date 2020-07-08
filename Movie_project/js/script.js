/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promo = document.querySelectorAll("img[alt='some picture']"),
    promoBg = document.querySelector(".promo__bg"),
    promoGenre = promoBg.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list");
    

for (let i of promo) {  //1
    i.remove();
}


promoGenre.textContent = "Драма"; //2


promoBg.style.background = "url('img/bg.jpg') center center/cover no-repeat"; //3


movieList.innerHTML = "";  //4

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {  //5
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}  
        <div class="delete"></div>
    </li>
    `;
});

