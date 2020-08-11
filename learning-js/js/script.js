'use strict';

// let btn = document.querySelector(".btn"),
//     timeId,
//     i = 1;

// btn.addEventListener("click", () => {
//     timeId = setInterval(logger, 1000);
// });    

// function logger() {
//     if (i == 3) {
//         clearInterval(timeId);
//     }

//     console.log("hello");
//     i++;
    
// }

// let id = setTimeout(function log(){
//     console.log("Hello");
//     id = setTimeout(log, 1000);
// }, 1000);

let btn = document.querySelector(".btn");

function myAnimation() {
    let box = document.querySelector(".box"),
        pos = 0;

    function frame() {
        if (pos == 398) {
            clearInterval(timer);
        } else {
            pos++;
            box.style.top = pos + "px";
            box.style.left = pos + "px";
        }
    }    

    let timer = setInterval(frame, 5);
}

btn.addEventListener("click", myAnimation);


