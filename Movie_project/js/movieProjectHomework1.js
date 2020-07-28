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

/* 1. */
    addForm.addEventListener("submit", (event) => { //обработчик события submit,чтобы отследить отправку формы, и мы обращаемся именно к форме а не к кнопке!!
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {       
            
            /* 2. */
            if (newFilm.length > 20) {
                newFilm = `${newFilm.substring(0, 20)}...`;
                console.log(newFilm);
                console.log(newFilm.length);
            }

            /* 3. */
            if (favorite) {
                console.log(`Добавлен любисый фильм ${newFilm}`);
            }


                                        //Вспомни динамическу типизацию, пустота это false, а значит в value если 
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
        parent.innerHTML = "";   //чтоб при повторном написании этой функции добавлялось по одному, а не весть массив

        /* 4. */
        sortArr(films); //у нас отсортированный список по алфавиту, и чтоб при удалении сортировка тоже учитывалась

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}  
                <div class="delete"></div>
            </li>
            `;
        });

/*3. пишем удаление в createMovieList потомучто у нас же в этой переменной лежит наша HTML структура списка */
        document.querySelectorAll(".delete").forEach((item, i) => {  //Удаляем элементы из списка, и удаляем из массива
            item.addEventListener("click", () => {
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent); //Это способ называется рекурсией, когда функция вызывает саму себя. Это для того чтоб при удалении наш массив заново построился, с новом нумерацией
            });
        });
    };

    

    deleteAdv(adv);
    makeChanges();
   
    createMovieList(movieDB.movies, movieList);
});

