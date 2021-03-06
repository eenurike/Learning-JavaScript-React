/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// 1)
for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?"),
        b = prompt('На сколько оцените его?');

// 2)        
    if (a != null && a != "" && a.length < 20) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        i--;                        // Иначе возвращаемся на одну итерацию назад
        console.log('error');
    }


// СПОСОБ с == и с ИЛИ(||),с И(&&) не получается потомучто вседга будет fasle
    // if (a == null || a == "" || a.length > 20) {
    //     i--;
    //     console.log("error");
    // } else {
    //     personalMovieDB.movies[a] = b;
    //     console.log("done");
    // }


}

// 3)
if (personalMovieDB.count <= 10) {
    console.log("Вы посмотрели довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зитель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

/*
Казалось бы можно был бы использовать конструкцию switch, но switch 
сравнивает только строгое сравнение (===) !!!
*/

// 4)
// СПОСОБ С DO WHILE
// let a;
// let b;

// do {
//     a = prompt("Один из последних просмотренных фильмов?");
//     b = prompt('На сколько оцените его?');
    
// }
// while(a == null || a == "" || a.length > 20);

// personalMovieDB.movies[a] = b;



// МОЙ СПОСОБ С WHILE

// let a;
// let b;

// function question1() {
//    a = prompt("Один из последних просмотренных фильмов?");
// }

// function question2() {
//     b = +prompt("rate them");
// }


// while(a == null || a == "" || a.length > 10 ) {
//     question1();
//     question1();
   
// }

// while(b == null || b == "" || b !== Number(b)) {
//     question2();
//     question2();
// }

// personalMovieDB.movies[a] = b;


console.log(personalMovieDB);

