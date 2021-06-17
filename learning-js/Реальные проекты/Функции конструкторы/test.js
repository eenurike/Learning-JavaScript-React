'use strict';

function Vihicle (brand, year, color, transmission) {
    this.brand = brand;
    this.year = year;
    this.color = color;
    this.transmission = transmission;
    this.startTheCar = function() {
        console.log(`I'm a ${this.brand}, and i ready to go`);
    };
    this.owner = 'ME';
}

let lexusIS200 = new Vihicle('Lexus', 2000 , 'dark grey', 'automatic');

console.log(lexusIS200);
lexusIS200.startTheCar();

let bmwM5 = new Vihicle('BMW', 1998, 'white', 'mechnic');

console.log(bmwM5);

Vihicle.prototype.bodywork = 'sedan';
Vihicle.prototype.myFiling = function() {
    console.log(`I love my ${this.brand}`);
};
console.log(lexusIS200.bodywork);
bmwM5.myFiling();