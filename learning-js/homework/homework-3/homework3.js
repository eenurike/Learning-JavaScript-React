"use strict";

let budget, date;

function start() {
	 budget = +prompt("ваш бюджет на месяц?");
	 date = prompt("Введите дату");

	 while(isNaN(budget) || budget == "" || budget == null) {
		budget = +prompt("ваш бюджет на месяц?");
	 }
}

start();



let appData = {
	budget: budget,
	date: date,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

function chooseExperses() {
	for (let i = 0; i < 2; i++) {
		let cost = prompt( "Введите обязательную статью расходов в этом месяце"),
				 howMuch = prompt("Во сколько обойдется?");
				 
				if ((typeof(cost)) === "string" && (typeof(cost)) != null && cost != "" && cost.length < 20 && typeof(howMuch) === "string" && typeof(howMuch) != null && howMuch != "" && howMuch.length < 20) {
						
					appData.expenses.cost = howMuch;
				} else {
	
					console.log("error");
					i--;
				}
	
	
	}
}

chooseExperses();

function detectDayBudget() {
	appData.budgetPerDay = (appData.budget / 30).toFixed();
	alert("Ваш ежедневный доход: " + appData.budgetPerDay);
}

detectDayBudget();

function detectLevel() {

	if (appData.budgetPerDay < 2000) {
		console.log("work more");
	} else if (appData.budgetPerDay >= 2000 && appData.budgetPerDay <= 5000) {
		console.log("norm");
	} else {
		console.log("you reach baby");
	}
	
	console.log(appData);
}

detectLevel();



function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");

				appData.monthIncome = save / 100 / 12 * percent;
				alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}

checkSavings();

function chooseOptExpenses() {
	for (let i = 1; i <= 3; i++) {
		let optExpenses = +prompt("Статья необязательных расходов?");
		

		while (optExpenses == null || optExpenses == "" || isNaN(optExpenses)) {
			optExpenses = +prompt("Статья необязательных расходов?");
		} 

		appData.optionalExpenses[i] = optExpenses;
	}

	
}

chooseOptExpenses();


