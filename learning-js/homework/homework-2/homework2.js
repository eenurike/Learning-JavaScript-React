let budget = +prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату");



let appData = {
	budget: budget,
	date: date,
	expenses: {},							//обязательные рассходы
	optionalExpenses: {},			//не обязательные рассходы
	income: [],  							//доп.доход
	savings: false,
				 
};

// способ 3

for (let i = 0; i < 2; i++){
	let cost = prompt( "Введите обязательную статью расходов в этом месяце"),
			howMuch = prompt("Во сколько обойдется?");
			
		if (typeof(cost) === "string" && typeof(cost) != null && typeof(howMuch) != null
				&& cost != "" && howMuch != "" && cost.length < 50) {
			

					console.log("done");
					//appData.expenses["cost"] = howMuch;
					//или такая запись
					appData.expenses.cost = howMuch;

		} else {
			console.log("error");
			i--;  //возвращаемся назад на итерацию
		}

		  
 }

// Способ 1

// let i = 0;
// while (i < 2) {
// 	let cost = prompt( "Введите обязательную статью расходов в этом месяце"),
// 			howMuch = prompt("Во сколько обойдется?");

// 			if (typeof(cost) === "string" && typeof(cost) != null && typeof(howMuch) != null
// 					&& cost != "" && howMuch != "" && cost.length < 50) {
// 						console.log("done");
// 					} else {
// 						console.log("error");
// 						i--;
// 					}
// 	i++;				
// }

//Способ 2

// let i = 0;

// do {

// 	let cost = prompt( "Введите обязательную статью расходов в этом месяце"),
// 	 			howMuch = prompt("Во сколько обойдется?");
	
// 	 			if (typeof(cost) === "string" && typeof(cost) != null && typeof(howMuch) != null
// 					&& cost != "" && howMuch != "" && cost.length < 50) {
// 					console.log("done");
// 				} else {
// 					console.log("error");
// 					i--;
// 				}
// 	i++;				
// 	}
// while (i < 2);


appData.perDay = budget / 30;

alert("Ежедневный бюджет: " + appData.perDay + "тг.");

console.log(appData);

if (appData.perDay <= 2000) {
	console.log("работай больше");
	
} else if (appData.perDay > 2000 && appData.perDay <= 5000) {
	console.log("Ну пойдет");

} 	else if (appData.perDay > 5000) {
	console.log("Ебааа ты богат");
}



