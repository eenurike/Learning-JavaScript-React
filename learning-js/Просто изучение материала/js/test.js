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
    formAdd = wrapper.querySelector('form'),
    inputValue = formAdd.querySelector('input');

adv.remove();
title.textContent = "Fruits";


formAdd.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFruit = inputValue.value;
    

   if (newFruit) {

       if(newFruit.length > 21 ) {
           newFruit = `${newFruit.substring(0,22)}...`;
       } 

    myObj.fruits.push(newFruit);
    makeList(myObj.fruits, fruitList);
    event.target.reset();
   }
});

let makeList = (myList, parent) => {
    sortList(myList);
    delList(parent);
    myList.forEach((item, i) => {
        parent.innerHTML += `
            <li>${i+1}: ${item}
                <button>Del</button>
            </li>   
        `;
    });

    document.querySelectorAll('li button').forEach((item,i) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            myObj.fruits.splice(i,1);
            makeList(myList,parent);
        });
    });

};

let delList = (del) => {
    del.innerHTML = "";
};

let sortList = (sort) => {
    sort.sort();
};

let delElem = () => {

};


makeList(myObj.fruits, fruitList);



let options = {
    name: "modalWindow",
    width: 1024,
    height: 900,
    style: {
        bg: "red",
        border: "1px solid red"
    }
};

for(let i in options) {
    if(typeof(options[i]) == "object") {
        for(let key in options[i]) {
            console.log(`свойство ${key} и его значение ${options[i][key]}`);
        }
    } else {
        console.log(`свойство ${i} и его значение ${options[i]}`);
    }
}

let {bg, border} = options.style;
bg = "blue";
console.log(bg);
console.log(options.style.bg);


// adv.remove();
// title.textContent = "Fruits";

// let deleteList = () => {
//     fruitList.innerHTML = "";
// };



// let createNewList = (fruitList, parent) => {
//     fruitList.forEach((item, i) => {
//         parent.innerHTML += `
//             <li>${i+1}: ${item}</li>
//         `;
//     });
// };



// formAdd.addEventListener('submit', (event) => {
//     event.preventDefault();
//     deleteList();

//     let newFilm = inputValue.value;
//     myObj.fruits.push(newFilm);

//     myObj.fruits.sort();
//     createNewList(myObj.fruits, fruitList);
//     event.target.reset();
// });


// deleteList();
// createNewList(myObj.fruits, fruitList);