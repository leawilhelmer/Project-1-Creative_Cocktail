// on window

// fetch("https://the-cocktail-db.p.rapidapi.com/list.php?i=list", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "1b17814413msh79012f3c019efc8p1c7fb7jsn69899d6e8800",
// 		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 	}
// })
// 	.then(response =>
// 		response.json())
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	})

function drinkData() {
	fetch("https://the-cocktail-db.p.rapidapi.com/popular.php", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "1b17814413msh79012f3c019efc8p1c7fb7jsn69899d6e8800",
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
		}
	})
	.then(response =>
		response.json())
	.then(cocktailData => {
		console.log(cocktailData);
		var drinkName = cocktailData.drinks
		drinkName.forEach(drink => {
			names = drink.strDrink;
			instructions = drink.strInstructions;
			ingredients = drink.strIngredient1;
			images = drink.strDrinkThumb;

			
			console.log(names) //UPDATE: prints out names of drinks
			document.getElementById("cocktailName").textContent = names
			//FIXME: only printing out the last drink
		
		})
		

	})
	.catch(err => {
		console.error(err);
	});
}

drinkData()




// let ingrPush = document.querySelector("#ingredient") {
// 	drinks.strDrinks

// }
// var formInput = document.querySelector("#formInput");
// var ingredientInput = document.querySelector("#ingredientInput");
// var textInput = document.querySelector("#textInput");


// formInput.addEventListener("submit", function (e) {
// 	e.preventDefault()
// 	console.log("It worked?")

// 	let drinks = {
// 		name: drinks.strDrink.value,
// 		ingredients: drinks.strIngredient1.value,

// 		function drinks(name, ingredients) {
// 			this.name = name
// 			this.ingredients = ingredients
// 		}
// }
// 	console.log(drinks)

// 	localStorage.setItem("drinks", JSON.stringify(drinks))
// // setting to local storage
// })
// var userObject = localStorage.getItem("drinks")
// console.log(JSON.parse(userObject))

