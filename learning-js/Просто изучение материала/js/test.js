'use strict';

function copyObj(mainObj) {
    let obj = {};

    for (let i in mainObj) {
        obj[i] = mainObj[i];
    }

    return obj;
} 

let options = {
    1: 'fsaf',
    2: 'wf;ef',
    3: 'fsdf'
};



let newObj = copyObj(options);
newObj["4"] = 'nurike';
newObj["5"] = 'yelemessov';


console.log(newObj);


console.log(options);




