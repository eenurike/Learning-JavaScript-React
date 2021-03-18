'use strict';

const obj = {
    name1: "modalWinwod",
    width: 1024,
    height: 900,
    style: {
        border: "black",
        borderRadius: "10px"
    }
};


for (let key in obj) {
    if (typeof(obj[key]) === 'object') {
        for (let i in obj[key]) {
            console.log(`Свойство ${i} и его значение ${obj[key][i]}`);
           
        }
    } else {
        console.log(`Свойство ${key} и его значение ${obj[key]}`);
       
        
    }
}
 console.log(Object.keys(obj).length);




