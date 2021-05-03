'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let myObj = {
        fruits: [
            "Apple",
            "Orange",
            "Kivi",
            "Banana",
            "potato"
        ]
    };

    let fruitList = document.querySelector('ul'),
        formAdd = document.querySelector('form'),
        inputAdd = document.querySelector('input'),
        buttonAdd = document.querySelector('button');

    fruitList.innerHTML = "";

    let updateFruitList = () => {
        myObj.fruits.forEach((item,i) => {
            fruitList.innerHTML += `
                <li>${i+1}: ${item}</li>
            `;
        });
    
    };
    updateFruitList();
    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();
        fruitList.innerHTML = "";
        let newFruits = inputAdd.value;
        myObj.fruits.push(newFruits);
        updateFruitList();
        
    });

    
});