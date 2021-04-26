'use strict';

// let numberOfFilms;
// let start = () => {
//     // numberOfFilms = prompt("'Сколько фильмов вы уже посмотрели?'");

//     // while(numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
//     //     numberOfFilms = prompt("'Сколько фильмов вы уже посмотрели?'");
//     // }
// };


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: () => {
        personalMovieDB.count = +prompt("'Сколько фильмов вы уже посмотрели?'");

    while(personalMovieDB.count == null || personalMovieDB.count == "" || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("'Сколько фильмов вы уже посмотрели?'");
    }
    }
};


let showMyDB = (hidden) => {

    if (!hidden) {
        console.log(personalMovieDB);
        console.log('аккаунт открыт');
    } else {
        console.log('Аккаунт приватен');
    }
};

let writeYourGenres = () => {
    for (let i = 0; i < 3; i++) {
        let question = prompt(`Ваш любимый жанр ${i+1}:`);
        personalMovieDB.genres[i] = question;
    }
    console.log(personalMovieDB);
};

let rememberMyFilms = () => {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов");
        let b = prompt("Насколько оцените его?"); 
    
        if (a == "" || a == null || a.length > 20) {
            console.log('error');
            i--;
        } else {
            console.log('ut works');
            personalMovieDB.movies[a] = b;
        }
    
        
    }
};
    
// personalMovieDB.start(personalMovieDB.count);
personalMovieDB.start();
showMyDB(personalMovieDB.privat);
rememberMyFilms();
writeYourGenres();
