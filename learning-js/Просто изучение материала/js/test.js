// 'use strict';


// 'use sctict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?");


//     while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?");
//     }


// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };




// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Один из последних просмотренных фильмов?"),
//             b = prompt('На сколько оцените его?');
    
          
//         if (a != null && b != null && a != '' && b != '' && a.length < 20) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();


// function detectPersonalLevel() {
//     if (personalMovieDB.count <= 10) {
//         console.log("Вы посмотрели довольно мало фильмов");
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//         console.log("Вы классический зитель");
//     } else if (personalMovieDB.count > 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }
// detectPersonalLevel();


// function showMyDB(hidden) {
//     if (!hidden) {   
//         console.log(personalMovieDB);                   
//     }  else {
//         console.log("Аккаунт приватен!");
//     }                                 
// }
// showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         let question = prompt(`Ваш любимый жанр под номером ${i}?`);
//         personalMovieDB.genres[i-1] = question; 
//     }
//     console.log(personalMovieDB);
// }
// writeYourGenres();

let options = {
    name: "modalWindow",
    width: 1024,
    heigth: 400,
    color: {
        border: 'red',
        background: "grey"
    }
};

options.newName = options.name.slice(5);

for (let i in options) {
    
    if (typeof(options[i]) == 'object') {
        for (let key in options[i]) {
            console.log(`Свойство внутренего обьекта ${key} и его значение ${options[i][key]}`);
        }
    } else {
        console.log(`Свойство обьекта ${i} и его значение ${options[i]}`);
        
    }
    
    

}
delete options.newName;
console.log(options);

let {border,background} = options.color;

border = "blue";
console.log(border);
console.log(options.color["border"]);


let bla = "apple, limon, orange";
let bla2 = bla.split(', ');
console.log(bla2);
let bla3 = bla2.join();
console.log(bla3);







