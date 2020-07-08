let budget = prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату");

let appData = {
	budget: budget,
	date: date,
	expenses: {},							//обязательные рассходы
	optionalExpenses: {},			//не обязательные рассходы
	income: [],  							//доп.доход
	savings: false,
				 
};




let costs1 = prompt( "Введите обязательную статью расходов в этом месяце"),
 		howMuch1 = prompt("Во сколько обойдется?"),
		costs2 = prompt( "Введите обязательную статью расходов в этом месяце"),
 		howMuch2 = prompt("Во сколько обойдется?");

appData.expenses.costs1 = howMuch1;
appData.expenses.costs2 = howMuch2;

alert(budget / 30);

console.log(appData.expenses.costs1);
console.log(appData.expenses.costs2);

    