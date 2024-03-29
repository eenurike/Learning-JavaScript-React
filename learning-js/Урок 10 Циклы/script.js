// Циклы это важнейшее понятие в программирование. Все технические средства, все программы созданные человеком направлены на автомотизацию процессов и облегчение нашего труда, так мы заменяем однотипные человеческие действия, так и в программировании вместо того чтобы много раз писать одни и теже команды "покрасить каждую кнопку в другой цвет" мы заменяем это небольшим циклом, который сделает все за нас. Поэтому для повторения однотипных действий мы применяем этот прием. Пример из реальной жизни, самый банальный дневной цикл: утром просыпаемся, завтракаем, едем на работу, работаем, вечером домой, ужинаем, отдыхаем и спать, и на следующий тоже самое, это дневной цикл. Так же цикличность месяцев в году, они повторяются из года в год. В JS есть 3 способа этих циклов, и каждый способ необходимо использовать взависимости от ситуации

// Способ 1. While Пока это условие првдиво мы будем делать какие-то действия, while чем то похож на if(условие). Пока есть батарейка на ноутбуке мы можем писать код
let num = 50;

while (num <= 55) { 
  console.log(num);
  // И тут можно догодаться, что наше действие будет выполнятся бесконечно, так как уловие правдивое
  num++;
  // С помощью инкремента мы каждый цикл увеличиваем num на 1, до тех пор пока условие не будет false
}

// Способ 2. do При помощи него мы можем сперва заставить наш цикл что-то сделать, а потом уже проверить условие и если необходимо выйти из цикла
let num2 = 30;
do { // То есть сделай пожалуйста что-то
  console.log(num2);
  num2++;
}
// А потом проверяем условие
while (num2 <= 29);
// С мотри хоть и условие не верно, но действие выполнилось один раз

// Способ 3. for Самый часто использующийся, он такой популярный потому-что мы можем его весьма подробно настроить
// Цикл for должен состоять из 3 аргументов, но не обязательно.
// 1. То что будет в начале нашего цикла, с чего вообще его начинать
// 2. Условие при котором наш цикл остановит свою работу
// 3. Шаг цикла, что будет происходить каждый раз в новом цикле, чаще всего используется i++

let num3 = 40;
for (let i = 1; i < 8; i++) {
  console.log(i);
}

for (let i = 0; i <= 5; i++) {
  console.log(num3);
  num3++;
}
// Тут i просто делает 5 шагов, а действие будет увеличивать наш num3 будет увеличивать 5 раз, так как сказано в условии

// Циклы это одно из самых важных, фундаментальных понятий программирования. Именно циклы позволять буквально в одну в две строчки покрасить 10-20 каких-то кнопок в другой цвет, или создать 20-50-1000 каких-то товаров в интернет магазине, только при помощи одного маленького скрипта, и циклы в этом помогут

// Еще будь внимателен что передаешь в условие, если оно в логическом контексте всегда будет выполнятся, то вы создадите бесконечный цикл и браузер или программа просто зависнет
for (let i = 1; i > 0; i++) {
  console.log(i);
}
// Присер бесконечного цикла, i всегда будет больше нуля

// Иногда необходимо закончить цикл досрочно, если вдруг переменная приняла какое-то специфическое значение
for (let i = 1; i < 10; i++) {
  if (i === 6) {
    break;  // break полностью прерывает цикл на этом этапе
  }

  console.log(i);
}
// То-есть цикл дойдет до 5 сталкнется с break и прекратит работу

// А иногда нужно пропустить какую-то итерацию

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    continue;
  }

  console.log(i);
}
// Видим что 6-ой итерации нет. Если например хотим избежать каких-то четных значений или каких-то определенных значений в переборе нашего цикла

// Вложенность циклов
// Например у вас есть цикл который постепенно перебирает данные, когда он натыкается на определенные структуры(например массив), то ему нужно перебрать эти уже данные еще раз, возникает цикл в цикле
for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
    // Чаще всего во вложенных циклах используют букву j
  }
}
// Принцип работы цикла в цикле, сперва цикл i выводит 0, потом цикл j выводит 0 1 2. Следующая итерация цикла i, i выводит 1, затем j выводит 0 1 2. Следующая итерация i, i выводит 2, затем j выводит 0 1 2

// Классическая задача на вложенные циклы, нужно создать фигуру треугольника при помощи символа *, есть много вариантов решения этой задачи, но расмотрим самую базовою 
//  *
//  **
//  ***
//  ****
//  *****
//  ******

let result = '';
// Сюда будет записываться результат
const length = 6;
// Ставим ограничения по длине этой пирамиды, то есть 6 рядов
// Почему это вообще задача на вложенные циклы, у нас 6 рядов, но на каждом ряду добавляется по одной звездочки, как бы с каждым рядом рассширяется пирамида. Типа один цикл отвечает за увеличение рядов, а второй цикл отвечает за увеличение на одну звездочку

for (let i = 1; i <= length; i++) {
// Главный цикл формирует ряды

  for (let j = 0; j < i; j++) {
  // Этот цикл формирует звездочки
  // И цикл j как бы ориентируется на главный цикл i, поэтому j < i
    result += '*';
  }

  result += '\n';
  // Каждый раз добавляем вконце перенос строки(\n)
}

console.log(result);

// Альтернативный спосооб решения этой задачи
let star = '*';
let lengthA = 6;
let resultA = '';

for (let i = 1; i <= lengthA; i++) {
  console.log(resultA += star);
  // Эту запись можно понять вот так resultA = resultA + star
}
// Но в таком случае просто перезаписывается одна и таже строка, а в первом примере мы создали строку и записали в нее звездочку, а циклы дальше сделалил все за нас

// Практика с break и continue
// Пример из начала урока, каждый день повторяется, внутри каждого дня повторяется приготовление пищи, и в свою очередь еще один процесс внутри это мытье посуды. Но готовя ужин вы так устали что хочется все бросить уснуть и начать следующий день с новыми силами, то есть завершить два начатых цикла
// Как сделать так чтобы из какого-то внутреннего вложенного цикла сразу остановить или перейти к следующей итерации большого главного цикла
first: for (let i = 0; i < 3; i++) {
// first это метка(название любое) 
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first;
      // Условие при котором пропустит 2 цикл, а после continue мы даем указание на самый верхний цикл чтобы не просто этот внутрений цикл пропустил свою итерацию, а самый главный, ну и при этом должны понимать закончится и второй вложенный цикл 
      console.log(`Third level: ${k}`);
    }
  }
}




wtf: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);

  for (let j = 0; j < 3; j++) {
    console.log(`second level: ${j}`);

    for (let k = 0; k < 3; k++) {
      if (k === 2) continue wtf;
      console.log(`Third level: ${k}`);
    }
  }
}

test: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);

  for (let j = 0; j < 3; j++) {
    if (j === 2) continue test;
    console.log(`Second level: ${j}`);
  }
}

let mainNum = 15;

function testFunk(a, callback) {
  let result1 = a + mainNum;
  callback(result1);
}

testFunk(5, function(b) {
  console.log(b + 10);
});