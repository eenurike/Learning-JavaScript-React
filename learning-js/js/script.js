"use strict";

console.log(document.body.childNodes);

console.log(document.body.firstChild);
console.log(document.body.lastChild);

console.log(document.body.querySelector("#current").parentNode);
document.body.querySelector("#current").parentNode.parentNode.style.cssText = "max-width: 900px; margin: 0 auto; background: lightgreen";


console.log(document.querySelector("ul").childNodes);
console.log(document.querySelector("[data-current = '3']").nextSibling);
console.log(document.querySelector("[data-current = '3']").previousSibling);
console.log(document.querySelector("[data-current = '3'").nextElementSibling);
console.log(document.querySelector("[data-current = '3']").previousElementSibling);

console.log(document.querySelector("#current").parentElement.parentElement);
console.log("----");

for (let i of document.body.childNodes) {
    if (i.nodeName == "#text") {
        continue;
    }

    console.log(i);
}