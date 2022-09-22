'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


// for (let i = 0; i < 2; i++) {
//   let a = prompt('Один из последних просмотренных фильмов?'),
//       b = +prompt('На сколько оцените его?');

//   if (a != '' && a != null && a.length <= 10) {
//     console.log('done');
//   } else {
//     i--;
//   }      

//   if (a == '' || b == '' || a == null || b == null || a.length >= 10 || isNaN(b)) {
//     i--;  
//   } else {
//     console.log('done');
//     personalMovieDB.movies[a] = b;
//   }

//   while (a == '' || a == null || a.length >= 10) {
//     a = prompt('Один из последних просмотренных фильмов?'),
//     b = +prompt('На сколько оцените его?');
//     personalMovieDB.movies[a] = b;
//   }

// }

if (personalMovieDB.count <= 10) {
  console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30){
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);