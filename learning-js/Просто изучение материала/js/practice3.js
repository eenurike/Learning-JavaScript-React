/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

'use sctict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?");

/*
Ниже проверки делали с помощью условий и цикла for, здесь
воспользуемся циклом while
*/

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?");
    }

/*
Это один из редких случаев когда хорошо использовать цикл while
isNaN возвращает true когда аргумент не числовой тип данных
*/
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?"),
            b = prompt('На сколько оцените его?');
    
          
        if (a != null && b != null && a != '' && b != '' && a.length < 20) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log("Вы посмотрели довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зитель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {   
        console.log(personalMovieDB);                   
    }  else {
        console.log("Аккаунт приватен!");
    }                                 
}
showMyDB(personalMovieDB.privat);
/*
Тут использовали другой патерн(поведение), задали в функцию аргумент.
Проверям скрыта ли наша база данных.
Если наша база данных НЕ скрыта, то показываем ее, а если 
скрыта, то показываем.
То есть в privat у нас лежит значение false, а у нас оператор отрицания в условии,
то меняем значение на true, и программа идет по true сценарию, то есть
выводит нам console.log
А если у нас бы privat стояло со значение стояло true, то сценарий пошел бы по else пути,
и не показал бы базу данных.
Конечно могли бы написать без оператора отрицания
if (hidden) {
    console.log("Аккаунт приватен!");
} else {
    console.log(personalMovieDB);  
}
То просто бы поменяли сценарии

*/

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let question = prompt(`Ваш любимый жанр под номером ${i}?`);
        personalMovieDB.genres[i-1] = question; 
    }
    console.log(personalMovieDB);
}
writeYourGenres();

/*
Почему i-1, чтоб пользователю коректно отобразить нумерацию с 1,
мы написали let i = 1, но массив начинается ведь с 0.
Поэтому когда доходит до i-1, он уменьшает число на 1.
А если стояло бы просто i то в массив под 0 индекс записался бы empty
и было бы 4 элемента

Или вот такой способ
function writeYourGenres() {
    for (let i = 0; i <= 3; i++) {
        let question = prompt(`Ваш любимый жанр под номером ${i+1}?`);
        personalMovieDB.genres[i] = question; 
        console.log(personalMovieDB.genres);
    }
    console.log(personalMovieDB);
}
*/

// Для сокращения кода 

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`); 
    }
    console.log(personalMovieDB);
}


