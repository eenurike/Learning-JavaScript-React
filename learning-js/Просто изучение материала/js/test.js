'use strict';

let myObj = {
    fruits: [
        "apple",
        "orange",
        "watermelon",
        "banana",
        "kivi"
    ]
};

let adv = document.querySelector('.adv'),
    wrapper = document.querySelector('.wrapper'),
    title = wrapper.querySelector('h1'),
    fruitList = wrapper.querySelector('ul'),
    formAdd =  wrapper.querySelector('form'),
    inputValue = formAdd.querySelector('input');

adv.remove();
title.textContent = "Fruits";

let deleteList = () => {
    fruitList.innerHTML = "";
};



let createNewList = (fruitList, parent) => {
    fruitList.forEach((item, i) => {
        parent.innerHTML += `
            <li>${i+1}: ${item}</li>
        `;
    });
};



formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    deleteList();

    let newFilm = inputValue.value;
    myObj.fruits.push(newFilm);

    myObj.fruits.sort();
    createNewList(myObj.fruits, fruitList);
    event.target.reset();
});


deleteList();
createNewList(myObj.fruits, fruitList);




