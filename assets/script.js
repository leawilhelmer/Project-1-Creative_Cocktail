//NOTE: this will be added to List of Drinks
var drinksDiv = document.querySelector("#drinksDiv")

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
		var drinksInfo = cocktailData.drinks

		for (var i = 0 ; i < drinksInfo.length; i++) {
			var drinksEle = drinksInfo[i];
			var drinksName = drinksEle.strDrink
			var drinksImg = drinksEle.strDrinkThumb
			drinksDiv.innerHTML += `<div class="col s3"><h6 style="text-align: center"><strong>${drinksName}</strong></h6><img src=${drinksImg} style="width: 280px; border-radius: 10px;"/><button id="save-btn"><i class="material-icons" id="heart">favorite</i></button></div>`
			
		}
	})
	.catch(err => {
		console.error(err);
	});
}
drinkData()

function additionalData() {
	fetch("https:the-cocktail-db.p.rapidapi.com/latest.php", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "1b17814413msh79012f3c019efc8p1c7fb7jsn69899d6e8800",
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
		}
	})
	.then(response =>
		response.json())
	.then(cocktailData => {
		var drinksInfo = cocktailData.drinks

		for (var i = 0 ; i < drinksInfo.length; i++) {
			var drinksEle = drinksInfo[i];
			var drinksName = drinksEle.strDrink
			var drinksImg = drinksEle.strDrinkThumb
			drinksDiv.innerHTML += `<div class="col s3"><h6 style="text-align: center"><strong>${drinksName}</strong></h6><img src=${drinksImg} style="width: 280px; border-radius: 10px;"/><button id="save-btn"><i class="material-icons" id="heart">favorite</i></button></div>`

		}
	})
	.catch(err => {
		console.error(err);
	});
}
additionalData()

//NOTE: this will be added to Most Popular Drinks html
var popularDrink = document.querySelector("#popular-div")

function mostPopularDrinks() {
	fetch("https://the-cocktail-db.p.rapidapi.com/popular.php", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "1b17814413msh79012f3c019efc8p1c7fb7jsn69899d6e8800",
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
		}
	})
	.then(response =>
		response.json())
	.then(moreData => {
		console.log(moreData)
		var drinksInfo = moreData.drinks
		for (var i = 0 ; i < 8; i++) {
			var drinksEle = drinksInfo[i];
			var popDrinksName = drinksEle.strDrink
			var popDrinksImg = drinksEle.strDrinkThumb
			popularDrink.innerHTML += `<div class="col s3"><h6 style="text-align: center"><strong>${popDrinksName}</strong></h6><img src=${popDrinksImg} style="width: 280px; border-radius: 10px;"/><button id="save-btn"><i class="material-icons" id="heart">favorite</i></button></div>`
			
		}
		})
	.catch(err => {
		console.error(err);
	})
}
mostPopularDrinks()


// NOTE: Adding randomize drinks to index.html

//This variable is for the div with id 'flipcardFront'
const flipcardFront = document.getElementById("flipcardFront");
//This variable is for the div with id 'flipcardBack'
const flipcardBack = document.getElementById("flipcardBack");

function randomizeDrinks() {
//Here we are fetching the most popular drinks from the cocktail API
fetch("https://the-cocktail-db.p.rapidapi.com/random.php", {
	method: "GET",
	headers: {
		"x-rapidapi-key": "1b17814413msh79012f3c019efc8p1c7fb7jsn69899d6e8800",
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
	},
})
	.then((response) => response.json())
	.then((data) => {
		let drinksLength = data.drinks.length;
		let random = Math.floor(Math.random() * drinksLength);
		// console.log(data.drinks[random].strDrinkThumb);
		let imgUrl = data.drinks[random].strDrinkThumb;
		let name = data.drinks[random].strDrink;
		let img = `<img src=${imgUrl} style="width: 300px; border-radius: 10px;"/>`;
		let cocktailName = `<h3>${name}</h3>`;
		flipcardFront.innerHTML += img;
		flipcardFront.innerHTML += cocktailName;
		flipcardFront.innerHTML += "<h6><b>Ingredients</b></h6>";
		// All the drinks have a maximum of 6 ingredients, so we put 6 of those
		// in this array
		let ingredientsArr = [
			data.drinks[random].strIngredient1,
			data.drinks[random].strIngredient2,
			data.drinks[random].strIngredient3,
			data.drinks[random].strIngredient4,
			data.drinks[random].strIngredient5,
			data.drinks[random].strIngredient6,
			data.drinks[random].strIngredient7,
		];
		let measurementsArr = [
			data.drinks[random].strMeasure1,
			data.drinks[random].strMeasure2,
			data.drinks[random].strMeasure3,
			data.drinks[random].strMeasure4,
			data.drinks[random].strMeasure5,
			data.drinks[random].strMeasure6,
			data.drinks[random].strMeasure7,
		];
		// We intialize 'x' as an empty string
		let x = "";
		// We loop through the array
		for (var i = 0; i <= ingredientsArr.length; i++) {
			//if the next ingredient is 'null' that means
			//the rest are null, so we stop the loop
			//and keep the actual ingredient
			if (ingredientsArr[i] === null) {
				break;
			}
			

			//checking for truthiness != includes null & undefined
			//we add each ingredient to the 'x'

			if (measurementsArr[i] != null)
				{x += `<li class="ingredient">${measurementsArr[i]+` `+ingredientsArr[i]}</li>`;}

			//checking for truthiness. if it is equal to null or undefined then..
			else if (measurementsArr[i] !== null) {
				window.print("to taste:")
			}
			
		}
		// here we populate div with id="flipcardBack" with 'x'
		flipcardFront.innerHTML += `<ul class="ingredientList">
		${x}
		</ul>
		`;
		flipcardBack.innerHTML+=`<p class="instructions">${data.drinks[random].strInstructions}</p>`
	});
	// FIXME: I noticed when margarita or brandy alexander appears at random, salt and nutmeg measurement = null. 
	// 
}
randomizeDrinks()

var dadJoke = document.querySelector(".center-align")

fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5317d4a7bbmsheea7635e83cfc32p12631ejsnbaba3f7b7b71",
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

