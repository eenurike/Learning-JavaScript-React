'use strict';

// window.addEventListener('DOMContentLoaded', () => {

//     let tabsList = document.querySelectorAll('.tabs_item'),
//         tabsBlock = document.querySelectorAll('.tabs_block > div'),
//         tabsListParent = document.querySelector('.tabs_list'),
//         cardPhrase = document.querySelectorAll('.tabs_block > div p');

//     let hideTabContent = () => {
//         tabsBlock.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show');
//         });

//         tabsList.forEach(item => {
//             item.classList.remove('active');
//         });
//     };

//     let showTabContent = (i = 0) => {
//         tabsBlock[i].classList.remove('hide');
//         tabsBlock[i].classList.add('show', "fade");

//         tabsList[i].classList.add('active');
//     };

//     hideTabContent();
//     showTabContent();

//     tabsListParent.addEventListener('click', (event) => {
//         let target = event.target;

//         if (target && target.classList.contains('tabs_item')) {
//             tabsList.forEach((item,i) => {
//                 if (target == item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });

//     cardPhrase.forEach(item => {
//         item.textContent = item.textContent.toUpperCase();
//     });
// });

window.addEventListener('DOMContentLoaded', () => {
    
    let tabsBlock = document.querySelectorAll('.tabs_block div'),
        tabsList = document.querySelectorAll('.tabs_list div'),
        tabsParent = document.querySelector('.tabs_list');

    let hideTabsContent = () => {
        tabsBlock.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabsList.forEach(item => {
            item.classList.remove('active');
        });
    };

    let showTabsContent = (i = 0) => {
        tabsBlock[i].classList.add('show', 'fade');
        tabsBlock[i].classList.remove('hide');
        tabsList[i].classList.add('active');
    };

    tabsParent.addEventListener('click', (event) => {
        let target = event.target;

        if (target && target.classList.contains('tabs_item')) {
            tabsList.forEach((item,i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });

    hideTabsContent();
    showTabsContent();
});