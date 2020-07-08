"use strict";




let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],  //Жанр
	privat: false,


	numbersFilms: function()  {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
	
		while (personalMovieDB.count == null || personalMovieDB.count == "" || isNaN(personalMovieDB.count)){
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	},


	rememberMyFilms: function() {
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
	},


	detectPersonalLevel: function() {
		if (personalMovieDB.count <= 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count > 30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},


	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
			console.log("false");
		} else {
			personalMovieDB.privat = true;
			console.log("true");
		}
	},


	showMyDB: function() {
		if (personalMovieDB.privat == false) {
			console.log(personalMovieDB);
		} else {
			console.log("Something wrong");
		}
	},


	writeYourGenres: function() {
		
	for (let i = 1; i <= 3; i++) {
		let genre = prompt(`Ваш любимый жанр под номером ${i}`);

		if (genre === null || genre == "") {
			console.log("Не коректнный ответ");
			i--;
		} else {

			personalMovieDB.genres[i-1] = genre;
		}
	}

	//Альтернотивный способ

	// for(let i = 1; i < 2; i++) {
	// 	let genre = prompt("Перечислите любимые жанры через запятую");

	// 	if (genre === "" || genre === null) {
	// 		console.log("Некоректно введены данные");
	// 		i--;
	// 	} else {
	// 		personalMovieDB.genres = genre.split(",");
	// 		personalMovieDB.genres.sort();
	// 	}
	// }



	personalMovieDB.genres.forEach(function(item, i, array){
		console.log(`Любимый жанр ${i + 1} - это ${item}`);
	});
	}
};

personalMovieDB.numbersFilms();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

console.log(personalMovieDB);