"use strict";

let appData = {
    key: [
        "nurike 1",
        "nurike 2",
        "nurike 3",
        "nurike 4",
    ]
};

let list = document.querySelector("ul"),
    addForm = document.querySelector("form.add"),
    textForm = addForm.querySelector("input[type='text']"),
    addText = addForm.querySelector("input[type='submit']");
    
    



    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let text = textForm.value;

        if (textForm) {
            appData.key.push(text);

            createList(appData.key, list);
        }

        event.target.reset();
        console.log(appData.key);
    });

let createList = (onwData, ownList) => {
    ownList.innerHTML = "";
    onwData.forEach((item, i) => {
        ownList.innerHTML += `
            <li>${i+1} ${item}</li>
        `;
    });
};

createList(appData.key, list);