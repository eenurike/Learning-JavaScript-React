'use sctrict';

// ОБЬЕКТЫ

const obj = new Object();
/*
Обычно этим способом никогда не пользуются, но просто чтоб знать
const obj = {

}
*/

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

//delete options.name;        // Оператор удаления
console.log(options);
/*
Видим наш обьект, но без свойства name
*/


for (let key in options) {
    console.log(`Свойсиво ${key}, имеет значение ${options[key]}`);
}
/*
Перебираем каждое свойство обьекта, key это свойство обькта,
но у внутренего обьекта в кончоле он выводит [object object].
Дело в том что мы выводим все значения в качестве строк,
и когда цикл доходит до свойства colors, он не может 
обьект превратить в строку, и [object object] это строковое
преставление обьекта 
*/

console.log(options["colors"]["border"]);
/*
Так мы обращаемся во внутренний обьект, к определенному свойству
*/

for (let key in options) {

    if (typeof(options[key]) === "object") {     //Если свойство равно обьекту
        for (let i in options[key]) {       //и внутри этого обьекта запускаем перебор
            console.log(`Свойство ${i} и его значение ${options[key][i]}`);
        } 
    } else {
        console.log(`Свойство ${key} и его значение ${options[key]}`);
    }
}
/*
То есть если свойства обьекта будет равно по типу данных object,
то запускается перебор имено этого обьекта, а конструкция options[key][i]
это мы перебираем первый обьект, а потом его внутрений обьект  
*/

