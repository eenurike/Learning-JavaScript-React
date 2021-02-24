'use strict';

// Операторы

/*
Все Арифметические действия * / - и особняком стоит +
*/
console.log(7 + 6);         // => 13
console.log(7 + '6');       // => 76 потомучто это строка, к 7 присоединили 6
console.log(7 + +"6");      // => 13 это унарный плюс, плюс который ставится перед чем-то
console.log("arr" + " - object");       // => arr - object   



/*
Инкремент и декремент
*/

let incr = 10,      
    decr = 10;    

console.log(incr++);      // => 10 Инкремент постфиксной формы  
console.log(decr--);      // => 10 Декримент постфиксной формы 
console.log(++incr);      // => 11 Префиксная форма
console.log(--decr);      // => 9 Префиксная форма

/*
Лишь когда сразу используем операцию постфиксной и префиксной формы,
лишь тогда мы можем увидеть результат. 
Например incr у нас 10, потом ++, но число не может увеличится.
А если сперва ++, и incr у нас 10, то тогда сперва идет операция увеличения,
а потом эта операция увеличивает наше число 
*/

incr++;
decr--;
console.log(incr);      // => 11
console.log(decr);      // => 9

/*
Козалось бы мы получим результаты 10 и 10, но сперва сперва сделали операцию,
а потом вывели его
*/



// Математические операторы >,>=,<,<=,==,===,%,!,!=

console.log(5%2);       
/*
=> 1 остаток, 5 делится на 2 на сталько раз на сколько он может,
и записывает остаток. То есть 4/2=2 2/2=0 и остается 1
*/

console.log(2*4 == 8);      // => true
console.log(2*4 === 8);      // => true
console.log(2*4 == "8");        // => true, сравниваем по значению
console.log(2*4 === '8');       // => false, сравниваем по типу (строгое сравнение)


// Логические операторы &&(И) || (ИЛИ)

/*
&& - работает только тогда, когда два и более условий
являются правдимыми. И это правда И это правда
|| - работает только тогда, когда одно из условий
является правдимым. ИЛИ это правда
*/

let isChecked = true,
    isClosed = true;
console.log(isChecked && isClosed);     // => true
console.log(isChecked || isClosed);     // => true
/*
Например галочка на checkbox отмечена и модальное окно закрыто.
Оба условия правдивые, значит true
*/
isChecked = true;
isClosed = false;
console.log(isChecked && isClosed);     // => одно из двух условий не правдива значит, false 
console.log(isChecked || isClosed);     // => одно из условий правдиво значит, true

isChecked = false;
isClosed = false;
console.log(isChecked && isClosed);     // => не одно из условий не правдиво, false
console.log(isChecked || isClosed);     // => одно из условий не правдиво, false
console.log(isChecked || !isClosed);    // => true
/*
Оператор отрицания, меняет значение на обратное, у нас isClosed был false,
ставим перед ним !, и он меняет на true. 
И поэтому результат поменялся, потомучто одно из чначений правдиво 
*/

// Приоритет операторов 

console.log(2+2*2 == 8);    // => false, будет 6. Так как умножение выполняется первым
/*
Есть таблица операторов, посмотри
*/

console.log(2+2+2 != 8);    // => true. 6 не равно 8? 
console.log(2+2+2 !== '6');     // => true. Строгое сравнение