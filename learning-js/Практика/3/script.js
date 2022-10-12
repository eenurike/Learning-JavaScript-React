'use strict';

// Раз мы изучили функции, а это строительные блоки каждой программы, и мы наше приложение приведем в функциональный вид
  let numberOfFilms;
function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
  // Наш инициализирующий вопрос, то есть с которого мы начинаем нашу программу, будем проверять пользователя на ввод пустой строки, или он нажал отмену, или ввел ли пользователь число, а если хотим проверять имеено на этапе ввода(когда пользователь что-то печатает в инпут), тогда будем уже использовать регулярные выражения, тема дальнейших уроков 

  while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
    // isNaN возвращает правду если значение не число, а если число то возвращает не правду
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
    // Это один из тех редких случаев когда можно применить спокойно цикл while и он будет хорошо отрабатывать
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt('Один из последних просмотренных фильмов?').trim(),
  // Метод trim уберает пробелы вконце и вначале строки, а если все пробелы то возвращает пустую строку, могли бы записать следующей строкой a.trim(), но зачем когда можно сразу сделать. Не учли то что пользователь может ввести пробелы. Область применения этого метода сводится не только к работе с данными, который ввел пользователь, хотя чаще всего это и есть его основная задача, так же вам могут приходить некоректные данные от сервера или пробелы случайно будут попадать в строку при выполнения некоторых функций
      b = +prompt('На сколько оцените его?');
    

  if (a != '' && a != null && a.length <= 10) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }      

}

if (personalMovieDB.count <= 10) {
  console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30){
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

function showMyDb() {
  if (personalMovieDB['privat'] === false) {
    console.log(personalMovieDB);
  }
}
showMyDb();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}?`);
    personalMovieDB.genres[i - 1] = favoriteGenre;
    // Но когда переменную не имеет смысла создавать можно и записать так
    // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
  }
}
writeYourGenres();
