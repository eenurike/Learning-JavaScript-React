'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Nurike'];

function sortStudentsByGroups(people) {
  people.sort();
  let one = [], two = [], three = [], notFit = [];

  for (let i = 0; i < people.length; i++) {
    if (i < 3) {
      one.push(people[i]);
    } else if (i < 6) {
      two.push(people[i]);
    } else if (i < 9) {
      three.push(people[i]);
    } else {
      notFit.push(people[i]);
    }
  } 
 
  return [one, two, three, `Оставшиеся студенты: ${(notFit.length === 0 ? '-': notFit.join(', '))}`];
}

console.log(sortStudentsByGroups(students));



