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

var cocktails = document.querySelector("#listOfCocktails")




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
		var drinkInfo = cocktailData.drinks
		drinkInfo.forEach(drink => {
			names = drink.strDrink;
			instructions = drink.strInstructions;
			
			ingredients = drink.strIngredient;
			images = drink.strDrinkThumb;
			measurements = drink.strMeasure1



	var driName = document.createElement("h4")
	driName.textContent = names

	var img = new Image();
	img.src = images
	
	cocktails.appendChild(driName)//UPDATE: prints out names of drinks to cocktail.html
	cocktails.appendChild(img).width = "250" //UPDATE: prints out images of drinks to cocktail.html
})

	})
	.catch(err => {
		console.error(err);
	});
	
	
}

drinkData()


// NOTE: Adding randomize drinks to index.html

function drinkOfTheDay() {
	fetch("https://the-cocktail-db.p.rapidapi.com/popular.php", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "1b17814413msh79012f3c019efc8p1c7fb7jsn69899d6e8800",
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
		}
	})
	.then(response => response.json())
	.then(function(cocktailData) {
		console.log(cocktailData.drinks)
		for (var i = 0; i < cocktailData.length; i++) {
			
			var rand = Math.floor(Math.random() * 20)
			displayName(cocktailData[rand])
			console.log(rand)
		}

	})
	.catch(error => console.log('Error', error));
}

drinkOfTheDay()

