'use strict';

window.addEventListener('DOMContentLoaded', () => {

    let tabsList = document.querySelectorAll('.tabs_item'),
        tabsBlock = document.querySelectorAll('.tabs_block > div'),
        tabsListParent = document.querySelector('.tabs_list'),
        cardPhrase = document.querySelectorAll('.tabs_block > div p');

    let hideTabContent = () => {
        tabsBlock.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabsList.forEach(item => {
            item.classList.remove('active');
        });
    };

    let showTabContent = (i = 0) => {
        tabsBlock[i].classList.remove('hide');
        tabsBlock[i].classList.add('show', "fade");

        tabsList[i].classList.add('active');
    };

    hideTabContent();
    showTabContent();

    tabsListParent.addEventListener('click', (event) => {
        let target = event.target;

        if (target && target.classList.contains('tabs_item')) {
            tabsList.forEach((item,i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    cardPhrase.forEach(item => {
        item.textContent = item.textContent.toUpperCase();
    });
});