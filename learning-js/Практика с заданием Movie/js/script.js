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

let advertisement = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre');

// 1)
advertisement.forEach(item => {
    item.remove();
});
/*
С обычной функцией, это анонимная функция которая создается
здесь и сейчас

advertisement.forEach(function (item){
    item.remove();
});
*/

// 2)
genre.textContent = "Драма";

// 3)
poster.style.backgroundImage = "url('img/bg.jpg')";
/*
Путь к картинки прописываем относительно HTML,
потомучто JS работает от HTML файла. И обращай
внимание чтоб ковычки не повторялись
*/




