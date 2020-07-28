"use strict";

document.addEventListener("DOMContentLoaded", () => {
    let box = document.querySelector(".box");
    console.log(box);

    // box.addEventListener("touchstart", (event) => {
    //     event.preventDefault();
    //     console.log("start");
    //     console.log(event.touches);
    // });

    box.addEventListener("touchmove", (event) => {
        console.log(event.targetTouches[0].pageX);  //[0] это один ралец, типа вилим координаты перемещения пальлца. и можно сделать  чтоб с какогото координата например перелистывался слайд
    });
});
