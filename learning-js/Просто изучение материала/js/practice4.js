/*
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"
*/

'use sctict';


const personalMovieDB = {
    count: 0,       // Изначальное кол-во фильмов 0
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже смотрели?");
        /*
            Нужда в переменной numberOfFilms отпадает,
            так как функцию start мы превратили в метод.
            Когда изучим контекст вызова this,сможем 
            напрямую обращаться к count
        */

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже смотрели?");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Один из последних просмотренных фильмов?"),
                b = prompt('На сколько оцените его?');


            if (a != null && b != null && a != '' && b != '' && a.length < 20) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count <= 10) {
            console.log("Вы посмотрели довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зитель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {

            console.log(personalMovieDB);
        } else {
            console.log("Аккаунт приватен!");
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        /*
            Класический шоблон переключателя, если наш privat 
            в false, то наш шаблон идет по else пути, и
            переключает его на true. Если в позиции true,
            то меняет его на false
        */
    },
    writeYourGenres: function () {
        // for (let i = 1; i <= 3; i++) {

        //     let question = prompt(`Ваш любимый жанр под номером ${i}?`);

        //     if (question == null || question == "") {
        //         i--;
        //         console.log('error');
        //     } else {
        //         personalMovieDB.genres[i-1] = question; 
        //     } 
        // }


        // Альтернативный способ с помощью split
        for (let i = 0; i < 1; i++) {  
            /*
                Так как у нас один вопрос, делаем всего одну итерацию
                если ввел не правильно, то возвращаем вопрос назад
            */
            let question = prompt("Введите любимые жанры через запятую").toLowerCase();
            /*
                Так тоже можно запимсывать, что введет пользователь
                JS сразу преобразует в нижний регистр
            */
            if (question == null || question == "") {
                i--;
                console.log("error");
            } else {
                personalMovieDB.genres = question.split(", ");
                personalMovieDB.genres.sort();
                /*
                    Если пользователь введет какую то букву в 
                    верхнем регистре, то наша сортировка собьется,
                    так как по классификации unicode, верхний регистр 
                    при сортировки выводится первый, поэтому 
                    в начале указали метод toLowerCase()
                */
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - ${item}`);
        });
    }

};


// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();


// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();

personalMovieDB.writeYourGenres();