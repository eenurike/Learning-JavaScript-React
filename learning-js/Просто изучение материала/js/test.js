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
    h1 = document.querySelector('h1'),
    blocks = document.querySelectorAll('.block div');

myFruit.innerHTML = "";
myObj.fruits.sort();
myObj.fruits.forEach((item, i) => {
    myFruit.innerHTML += `
        <li>${i+1}: ${item}</li>
    `;

});

adv.remove();
h1.textContent = "Fruits";




blocks.forEach((item,i) => {
    // let num = 0;
    // let deleteElement = (event) => {
    //     item.classList.toggle('eventBlock');
    //     num++;
        
    // };
    // if (num == 1) {
    //     item.removeEventListener('click', deleteElement);
    //     console.log("work");
    // } 
    // item.addEventListener('click',deleteElement);
    let num = 0;
    
    
    num++;
    let deleteElement = () => {
        item.classList.toggle('eventBlock');

        if(num == 1) {
            item.removeEventListener('click', deleteElement);
        }
        
    };
    
    item.addEventListener('click', deleteElement);
    console.log(num);
    
});





