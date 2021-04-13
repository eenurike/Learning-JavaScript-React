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

let myFruit = document.querySelector(".wrapper ul"),
    adv = document.querySelector(".adv"),
    h1 = document.querySelector('h1');

myFruit.innerHTML = "";
myObj.fruits.sort();
myObj.fruits.forEach((item, i) => {
    myFruit.innerHTML += `
        <li>${i+1}: ${item}</li>
    `;
});

adv.remove();
h1.textContent = "Fruits";