'use strict';

// Кстати у обьекта нет свойства length, и это очень интересная задача, потому что там используется прием счетчика, и это очень частый прием на первых порах

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};

let counter = 0;

for (let key in options) {
  counter++;
}
// То есть счетчик пробегается по каждому свойству и увеличивает счетчик
console.log(counter); // 4, но без свойств во вложенном обьекте


counter = 0;
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      counter++;
    }
  }
  counter++;
}

console.log(counter); // 6 Это уже со свойствами во вложенном обьекте

// Но лучше использовать Object.keys