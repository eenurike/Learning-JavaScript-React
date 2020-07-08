"use strict";



let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieBd = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],  //Жанр
	privat: false
};


let a = prompt("Один из последних просмотренных фильмов?"),
		b = +prompt("На сколько оцените его?"),
		c = prompt("Один из последних просмотренных фильмов?"),
		d = +prompt("На сколько оцените его?");

	personalMovieBd.movies.a = b;
	personalMovieBd.movies.c = d;
	
	console.log(personalMovieBd);