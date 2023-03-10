'use strict';

// function showFamily(family) {
//   let str = ``;
//   (family.length === 0) ? str = `Семья пуста`: str += `Семья состоит из: ${family.join(', ')}`;

//   return str;
// }

// let arrayfamily = ['Peter', 'Ann', 'Alex', 'Linda'];
// let emptyFamily = [];
// console.log(showFamily(arrayfamily));   
// console.log(showFamily(emptyFamily));   

// function standardizeStrings(favoriteCities) {
//   favoriteCities.forEach(function(cities) {
//     console.log(cities.toLowerCase());
//   });
// }

// let cities = ['LISOBON', 'ROME', 'MILAN', 'DUBLIN'];
// console.log(standardizeStrings(cities));

let someString = 'This is some strange string';
let errorString = 123;

function reverse(str) {
  if(typeof(str) !== 'string') {
    return 'Ошибка';
  }

  return str.split('').reverse().join('');
}

console.log(reverse(someString));
console.log(reverse(errorString));