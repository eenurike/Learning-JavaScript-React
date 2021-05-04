'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // const movieDB = {
    //     movies: [
    //         "Логан",
    //         "Лига справедливости",
    //         "Ла-ла лэнд",
    //         "Одержимость",
    //         "Скотт Пилигрим против...",
    //         "Аппалон 13"
    //     ]
    // };


    // let adv = document.querySelectorAll('.promo__adv > img'),
    //     genre = document.querySelector('.promo__genre'),
    //     bgImage = document.querySelector('.promo__bg'),
    //     movieList = document.querySelector('.promo__interactive-list'),
    //     formAdd = document.querySelector('form.add'),
    //     inputValue = document.querySelector('.adding__input'),
    //     checkbox = document.querySelector('input[type="checkbox"]');

    // adv.forEach(item => {
    //     item.remove();
    // });
    // genre.textContent = "Драма";
    // bgImage.style.backgroundImage = "url('img/bg.jpg')";


    // formAdd.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     let newFilm = inputValue.value;
    //     let favorite = checkbox.checked;

    //     if (newFilm) {
    //         if (newFilm.length > 5) {
    //             newFilm = `${newFilm.slice(0,5)}...`;
    //         }

    //         if (favorite) {
    //             console.log('Добавляем любимый фильм');
    //         }

    //         movieDB.movies.push(newFilm);
    //         createMovieList();
    //     }

    //     event.target.reset();
    // });

    // let createMovieList = () => {
    //     movieList.innerHTML = "";
    //     movieDB.movies.sort();

    //     movieDB.movies.forEach((item, i) => {
    //         movieList.innerHTML += `
    //         <li class="promo__interactive-item">${i+1}: ${item}
    //             <div class="delete"></div>
    //         </li>
    //         `;
    //     });

    //     document.querySelectorAll('.delete').forEach((item,i) => {
    //         item.addEventListener('click', () => {
    //             item.parentElement.remove();
    //             movieDB.movies.splice(i, 1);
    //             createMovieList();
    //         });
    //     });
    // };

    



    // createMovieList();

    let myObj = {
        fruits: [
            "Apple",
            "Orange",
            "Kivi",
            "Banana",
            "Watermelon",
            "Pear"
        ]
    };

    let fruitsParent = document.querySelector('ul'),
        formAdd = document.querySelector('form'),
        inputAdd = formAdd.querySelector('input');

    

    let createFruitsList = () => {
        fruitsParent.innerHTML = "";
        myObj.fruits.sort();

        myObj.fruits.forEach((item,i) => {
            fruitsParent.innerHTML += `
            <li>${i+1}: ${item} 
                <button class="del">Delete</button>
            </li>
            `;
        });

        document.querySelectorAll('.del').forEach((item,i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                myObj.fruits.splice(i,1);
                createFruitsList();
            });
        });
    };

    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFruits = inputAdd.value;

        if(newFruits) {
            if(newFruits.length > 5) {
                newFruits = `${newFruits.slice(0,5)}...`;
            }
            
            myObj.fruits.push(newFruits);
            createFruitsList();
        }

        event.target.reset();
    });


    createFruitsList();
});