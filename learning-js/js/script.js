"use strict";

let tabsContent = document.querySelectorAll(".tabs__content"),
    tabs = document.querySelectorAll(".tabs__item"),
    tabsParent = document.querySelector(".tabs__item-wrapper");

function hideTabContent() {
    tabsContent.forEach(item => {
        item.classList.add("hide");
        item.classList.remove("show");
    });

    tabs.forEach(item => {
        item.classList.remove("tabs__item-active");
    });
}  

function showTabContent(i = 0) {
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabs__item-active");
}

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
    let target = event.target;

    if (target && target.classList.contains("tabs__item")) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});