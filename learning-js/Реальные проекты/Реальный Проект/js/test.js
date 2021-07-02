'use strict';

window.addEventListener("DOMContentLoaded", () => {
    
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

    

    let modal = document.querySelector('[data-modal]'),
        modalClose = document.querySelector('[data-close]'),
        trigger = document.querySelector('.conect');


    let openModal = () => {
        modal.classList.add('showFlex');
        modal.classList.remove('hide');

        document.body.style.overflow = 'hidden';
    };

    let closeModal = () => {
        modal.classList.add('hide');
        modal.classList.remove('showFlex');

        document.body.style.overflow = '';

        if (trigger.classList.contains('active')) {
            trigger.classList.remove('active');
        }
    };

        trigger.addEventListener('click', () => {
            trigger.classList.toggle('active');

            openModal();
        });

        modalClose.addEventListener('click', closeModal);

        modal.addEventListener('click', (event) => {
            if(event.target.classList.contains('modal')) {
                closeModal();
            }
        });


        const parent = document.querySelector('.cardWrapper');
        parent.innerHTML = "";

        class CardBlock {
            constructor(bgColor, title, text, parentElement, ...classes) {
                this.bgColor = bgColor;
                this.title = title;
                this.text = text;
                this.classes = classes;
                this.parent = document.querySelector(parentElement);
            }


            render() {
                const element = document.createElement('div');

                this.classes.forEach(item => element.classList.add(item));

                if (element.classList.contains != "cardBlock") {
                    element.classList.add("cardBlock");
                    // element.classList.add("grey");
                }
                
                // if(this.classes.length === 0) {
                //     this.defaultClass = "cardBlock";
                //     this.classes.push(this.defaultClass);
                    
                // }
                    
                

                element.innerHTML = `
                    <div class="image ${this.bgColor}" >
                        <p>image1</p>
                    </div>
                    <div class="title">
                        <p>${this.title}</p>
                    </div>
                    <div class="text">
                        <p>${this.text}</p>
                    </div>
                `;

                this.parent.append(element);
            }
        }


        new CardBlock (
            "red",
            'Apple',
            'IOS',
            ".cardWrapper",
            "grey",
            "yo"
        ).render();

        new CardBlock (
            "purple",
            'Samsung',
            'Android',
            ".cardWrapper",
            "lightGrey"
        ).render();

        new CardBlock (
            "green",
            'Lenovo',
            'Windows',
            ".cardWrapper",
            "grey"
        ).render();




        
});