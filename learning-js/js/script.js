"use strict";

let btns = document.querySelectorAll("button"),
    wrapper = document.querySelector(".btn-block");

    // wrapper.addEventListener("click", (event ) => {
    //     if(event.target && event.target.tagName == "BUTTON") {
    //         event.target.classList.toggle("red");
    //     }
    //     let addBtn = document.createElement("button");
    //     addBtn.classList.add("red");
    // wrapper.append(addBtn);
    //     // if(event.target && event.target.classList.contains("blue")){
    //     //     event.target.classList.toggle("red");
    //     // }
    //     // console.dir(event.target);

    // }) ;
    
    btns.forEach((item) => {
        item.addEventListener("click", () => {
            console.log("work");      
        });
    });

    let btn = document.createElement("button");
    btn.classList.add("red");
    wrapper.append(btn);

    
    

// console.log(btns[0].classList.length);

// // console.log(btns[0].classList.item(1));

// btns[1].classList.add("red", "asfjefe");
// // btns[0].classList.remove("blue");
// // btns[0].classList.toggle("blue");

// if (btns[1].classList.contains("red")) {
//     console.log("red");
// }

// btns[1].classList.add("red");

// btns[0].addEventListener("click", () => {
//     if (btns[1].classList.contains("red")) {
//         btns[1].classList.remove("red");
//     } else {
//         btns[1].classList.add("red");
//     }
// });

// btns[0].addEventListener("click", () => {
//     btns[1].classList.toggle("red");
// });