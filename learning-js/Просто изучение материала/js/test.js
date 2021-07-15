'use strict';



    
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');

    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');
    }
    },

    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?'),
                b = prompt('На сколько оцените его?');
        
                if (a == "" || a == null || a.length > 10) {
                    i--;
                    console.log('error');
                } else {
                    personalMovieDB.movies[a] = b;
                    console.log('ok');
                }
        }
    },

    detectPersonalLevel: () => {
        if ( personalMovieDB.count <= 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30){
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: (hidden) => {

        if (hidden) {
            console.log('аккаунт приватен');
        } else {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: (genre) => {
        for (let i = 0; i < 3; i++) {
            let question = prompt(`Ваш любимый жанр под номером ${i+1}?`);
            
            if (question == "" || question == null) {
                i--;
            } else {
                genre[i] = question;
            }
            
        }

        genre.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }

};





personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres(personalMovieDB.genres);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);

let num = '1,2,3,4,5';
let numArr = num.split(',');

numArr.push('yo');
console.log(numArr);

let arrString = numArr.join(': ');
console.log(arrString);

let teast1 = (fixStr) => {
    fixStr = fixStr.split(': ').join(' ');
    console.log(fixStr);
};

teast1(arrString);