// 'use strict';

// window.addEventListener('DOMContentLoaded', () => {

//     let myObj = {
//         fruits: [
//             "Apple",
//             "Orange",
//             "Kivi",
//             "Banana",
//             "Watermelon",
//             "Pear"
//         ]
//     };

//     let fruitsParent = document.querySelector('ul'),
//         formAdd = document.querySelector('form'),
//         inputAdd = formAdd.querySelector('input');

    

//     let createFruitsList = () => {
//         fruitsParent.innerHTML = "";
//         myObj.fruits.sort();

//         myObj.fruits.forEach((item,i) => {
//             fruitsParent.innerHTML += `
//             <li>${i+1}: ${item} 
//                 <button class="del">Delete</button>
//             </li>
//             `;
//         });

//         document.querySelectorAll('.del').forEach((item,i) => {
//             item.addEventListener('click', () => {
//                 item.parentElement.remove();
//                 myObj.fruits.splice(i,1);
//                 createFruitsList();
//             });
//         });
//     };

//     formAdd.addEventListener('submit', (event) => {
//         event.preventDefault();
//         let newFruits = inputAdd.value;

//         if(newFruits) {
//             if(newFruits.length > 5) {
//                 newFruits = `${newFruits.slice(0,5)}...`;
//             }
            
//             myObj.fruits.push(newFruits);
//             createFruitsList();
//         }

//         event.target.reset();
//     });


//     createFruitsList();
// });

'use strict';

window.addEventListener('DOMContentLoaded', () => {

    let myObj = {
        fruits: [
            "Apple",
            "Orange",
            "Kivi",
            "Banana",
            "Watermelon",
            "Pear"
        ]
    };

    let fruitList = document.querySelector('ul'),
        formAdd = document.querySelector('form'),
        inputValue = formAdd.querySelector('input');

    

    let createFruitsList = () => {
        fruitList.innerHTML = '';
        myObj.fruits.sort();

        myObj.fruits.forEach((item,i) => {
            fruitList.innerHTML += `
                <li>${i+1}: ${item} <button class="del">Delete</button></li>
            `;
        });

        document.querySelectorAll('.del').forEach((item,i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                myObj.fruits.splice(i, 1);
                createFruitsList();
            });
        });
    };

    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let newFruit = inputValue.value;
        

        if (newFruit) {
            if (newFruit.length > 5) {
                newFruit = `${newFruit.slice(0,5)}...`;
            }
            
            myObj.fruits.push(newFruit);
            createFruitsList();
        }
        
        event.target.reset();
    });

    createFruitsList();
});

