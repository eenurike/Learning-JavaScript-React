"use strict";



let numberOfFilms;


function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)){
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}

start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],  //Жанр
	privat: false
};



function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let lastMovie = prompt("Один из последних просмотренных фильмов?"),
				reating = +prompt("На сколько оцените его?");
	
		if (lastMovie != null && lastMovie != "" && lastMovie.length < 50 && reating != null && reating != "") {
	
			personalMovieDB.movies[lastMovie] = reating;
			console.log("done");
			
		} else {
			console.log("error");
			i--;
			
		}
	
	
	}
}

rememberMyFilms();




function detectPersonalLevel() {
	if (personalMovieDB.count <= 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}



function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	} else {
		console.log("Something wrong");
	}
}

showMyDB();

function writeYourGenres() {
	
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();

console.log(personalMovieDB);