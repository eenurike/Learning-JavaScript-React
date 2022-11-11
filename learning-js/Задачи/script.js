'use strict';

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  }
};

console.log(typeof(personalPlanPeter.skills.programmingLangs));

const showExperience = function(plan) {
  const {exp} = plan.skills;
  return exp;
};

console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
  let str = "";
  const {programmingLangs} = plan.skills;
  if (Object.keys(programmingLangs).length === 0) {
    console.log('isEmpty');
  } else {
    for (let i in programmingLangs) {
      str += `Язык ${i} изучен на ${programmingLangs[i]}\n`;
    }
  }

  return str;
}

console.log(showProgrammingLangs(personalPlanPeter));
