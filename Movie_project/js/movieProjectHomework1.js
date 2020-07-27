/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

// document.addEventListener("DOMContentLoaded", () => { //событие когда дом структура будет построенна(будет раюотать весь наш скрипт) чтоб не ждать например картинкок которые весят очень много, не будет же пользователь ждать пока загрузятся все картинку и т.д.
//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };

//     let promo = document.querySelectorAll("img[alt='some picture']"),
//         promoBg = document.querySelector(".promo__bg"),
//         promoGenre = promoBg.querySelector(".promo__genre"),
//         movieList = document.querySelector(".promo__interactive-list"),
//         formAdd = document.querySelector("form.add"),
//         inputAdd = formAdd.querySelector(".adding__input"),
//         checkbox = formAdd.querySelector("type=['checkbox']");

//     for (let i of promo) {
//         i.remove();
//     }

//     promoGenre.textContent = "Драма";

//     promoBg.style.background = "url('img/bg.jpg') center center/cover no-repeat";

//     movieDB.movies.sort();

//     function createMovieList(films, parent) {
//         parent.innerHTML = "";

//         films.forEach((film, i) => {
//             parent.innerHTML += `
//             <li class="promo__interactive-item">${i+1} ${film}
//                 <div class="delete"></div>
//             </li>
//             `;
//         });
//     }

//     createMovieList(movieDB.movies, movieList);

// });

document.addEventListener("DOMContentLoaded", () => {
    /* событие когда дом структура будет построенна(будет раюотать весь наш скрипт) чтоб не ждать например картинкок которые весят очень много, не будет же пользователь ждать пока загрузятся все картинку и т.д.*/

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ],
    };

    let adv = document.querySelectorAll("img[alt='some picture']"),
        promoBg = document.querySelector(".promo__bg"),
        promoGenre = promoBg.querySelector(".promo__genre"),
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector("form.add"),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector("[type='checkbox']");


    addForm.addEventListener("submit", (event) => { //обработчик события submit,чтобы отследить отправку формы
        event.preventDefault();

        const newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {                    //Вспомни динамическу типизацию, пустота это false, а значит в value если 
            movieDB.movies.push(newFilm); // пукстая строка, то ничего не отправится
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }


        event.target.reset(); //очищает строку после добавления фильма


    });

    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    };

    const makeChanges = () => {
        promoGenre.textContent = "Драма";
        promoBg.style.background =
            "url('img/bg.jpg') center center/cover no-repeat";
    };


    const sortArr = (arr) => {
        arr.sort();
    };

    const createMovieList = (films, parent) => {
        parent.innerHTML = "";
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}  
                <div class="delete"></div>
            </li>
            `;
        });
    };

    deleteAdv(adv);
    makeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
});