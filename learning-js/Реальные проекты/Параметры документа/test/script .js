'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let box = document.querySelector('.box'),
        btn = document.querySelector('button');

    let width = box.scrollWidth,
        height = box.scrollHeight;

    console.log(width, height);    

    btn.addEventListener('click', () => {

        console.log(box.scrollTop);

        if (box.scrollTop == 200) {
            box.style.height = box.scrollHeight + 'px';
        }
        
    });

    let style = window.getComputedStyle(box);
        if (box.offsetHeight == 400) {
            box.style.height = box.scrollHeight + 'px';
        }
});