"use strict";



let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieBd = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],  //Жанр
	privat: false
};

for (let i = 0; i < 2; i++) {
	let lastMovie = prompt("Один из последних просмотренных фильмов?"),
			reating = +prompt("На сколько оцените его?");

	if (lastMovie != null && lastMovie != "" && lastMovie.length < 50 && reating != null && reating != "") {

		personalMovieBd.movies[lastMovie] = reating;
		console.log("done");
		
	} else {
		console.log("error");
		i--;
		
	}


}


if (personalMovieBd.count <= 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieBd.count > 10 && personalMovieBd.count <= 30) {
	console.log("Вы классический зритель");
} else if (personalMovieBd.count > 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}

console.log(personalMovieBd);