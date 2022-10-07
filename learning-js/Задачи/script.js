'use strict';

const sayHello = name => `Привет ${name}!`;

console.log(sayHello('Nurike'));

const returnNeighboringNumbers = num => [num - 1, num, num + 1];

console.log(returnNeighboringNumbers(6));




if (4 === 4 || 5 < 4) {
  console.log('ok');
} else {
  console.log('not ok');
}

function getMathResult(a, b) {
  if (typeof(b) !== 'number' || b <= 0) {
    return a;
  }

  let str = '';

  for (let i = 1; i <= b; i++) {
    if (i === b) {
      str += `${a * i} `;
    } else {
      str += `${a * i}---`;
    }
  } 

  return str;
}

console.log(getMathResult(5, 3));
console.log(getMathResult(15, 0));
console.log(getMathResult(25, '3'));

let str2 = '',
    strLength = 6;

for (let i = 1; i < strLength; i++) {
  for (let j = 0; j < i; j++) {
    str2 += '*';
  }
  str2 += '\n';
}    

console.log(str2);

let str3 = '',
    str3Length = 5;

for (let i = 0; i <= str3Length; i++) {
  for (let j = 0; j < str3Length - i; j++) {
    str3 += ' ';
  }

  for (let k = 0; k < 2 * i + 1; k++) {
    str3 += '*';
  }

  str3 += '\n';
}    

console.log(str3);