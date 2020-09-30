let aba = {
    name: "abadon",
    role: "support",
    whatToDo: function() {
        let say = () => {
            console.log(this.role);
        };
        say();
    }
};

aba.whatToDo();

let answer = ["nUriKe", "TemuR", "sTaS"];

answer = answer.map((item) => item.toLocaleLowerCase());

// answer = answer.map(function(item) {
//     return item.toLocaleLowerCase();
    

// });

console.log(answer);

// console.log(answer);

// answer.forEach((item) => {

//     answer = item.toLocaleLowerCase();
//     console.log(answer);
// });















