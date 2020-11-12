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

//This variable is for the div with id 'flipcardFront'
const flipcardFront = document.getElementById("flipcardFront");
//This variable is for the div with id 'flipcardBack'
const flipcardBack = document.getElementById("flipcardBack");

//Here we are fetching the most popular drinks from the cocktail API
fetch("https://the-cocktail-db.p.rapidapi.com/popular.php", {
	method: "GET",
	headers: {
		"x-rapidapi-key": "1b17814413msh79012f3c019efc8p1c7fb7jsn69899d6e8800",
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
	},
})
	.then((response) => response.json())
	.then((data) => {
		var d = new Date();
		var todaysDate = d.getDate();
		console.log(d.getDate());
		var i;
		for (i = 0; i < 20; i+=19) {
			if (i < todaysDate) {
				let imgUrl = data.drinks[i].strDrinkThumb;
				let name = data.drinks[i].strDrink;
			
			

		// let drinksLength = data.drinks.length;
		// let random = Math.floor(Math.random() * drinksLength);
		// console.log(data.drinks[random].strDrinkThumb);
		// let imgUrl = data.drinks[random].strDrinkThumb;
		// let name = data.drinks[random].strDrink;
		let img = `<img src=${imgUrl} style="width: 200px; border-radius: 10px;"/>`;
		let cocktailName = `<h3>${name}</h3>`;
		flipcardFront.innerHTML += img;
		flipcardFront.innerHTML += cocktailName;
		flipcardFront.innerHTML += "<h6><b>Ingredients</b></h6>";
		// All the drinks have a maximum of 6 ingredients, so we put 6 of those
		// in this array
		let ingredientsArr = [
			data.drinks[i].strIngredient1,
			data.drinks[i].strIngredient2,
			data.drinks[i].strIngredient3,
			data.drinks[i].strIngredient4,
			data.drinks[i].strIngredient5,
			data.drinks[i].strIngredient6,
			data.drinks[i].strIngredient7,
    ];
    let measurementsArr = [
		data.drinks[i].strMeasure1,
		data.drinks[i].strMeasure2,
		data.drinks[i].strMeasure3,
		data.drinks[i].strMeasure4,
		data.drinks[i].strMeasure5,
		data.drinks[i].strMeasure6,
		data.drinks[i].strMeasure7,
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
	
		//we add each ingredient to the 'x'
		x += `<li class="ingredient">${measurementsArr[i]+` `+ingredientsArr[i]}</li>`;
	}

    // here we populate div with id="flipcardBack" with 'x'
    flipcardFront.innerHTML += `<ul class="ingredientList">
    ${x}
    </ul>
    `;
	flipcardBack.innerHTML+=`<p class="instructions">${data.drinks[i].strInstructions}</p>`
}
		
	// FIXME: I noticed when margarita or brandy alexander appears at random, salt and nutmeg measurement = null. 
	// 

if (i > todaysDate) {
	var i = 0;
	break;
}
		}
	})
