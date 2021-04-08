'use strict';

let box = document.querySelectorAll(".boxWrapper div");
let circle = document.querySelectorAll(".circleWrapper div");
let wrapper = document.querySelectorAll(".boxWrapper");

console.log(box[1]);
console.log(circle[2]);

// wrapper[0].style.background = "red";

// box.forEach(item=> {
// item.style.background = "lightblue";
// box[2].style.background = "pink";
// }); 

const div = document.createElement('div');
div.classList.add('black');

// document.querySelector(".boxWrapper").append(div);
// wrapper[0].append(div);

// circle[1].before(div);

// circle[1].replaceWith(box[1]);

// circle[1].style.background = "red";
// box[1].style.background = "pink";

// wrapper[0].replaceChild(box[1], circle[1]);

circle[1].replaceWith(box[1]);



