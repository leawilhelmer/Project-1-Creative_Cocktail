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
			drinksDiv.innerHTML += `<div class="col s3"><h6 style="text-align: center"><strong>${drinksName}</strong></h6><img src=${drinksImg} style="width: 280px; border-radius: 10px;"/><button class="save-btn"><i class="material-icons" id="heart">favorite</i></button></div>`
			
			
		
		}

		$(".saveBtn").click(function(){
			console.log("clicked")
		})
	})
	.catch(err => {
		console.error(err);
	});
}
drinkData()

function listCocktailsData() {
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
			drinksDiv.innerHTML += `<div class="col s3"><h6 style="text-align: center"><strong>${drinksName}</strong></h6><img src=${drinksImg} style="width: 280px; border-radius: 10px;"/><button class="save-btn"><i class="material-icons" id="heart">favorite</i></button></div>`

		}
	})
	.catch(err => {
		console.error(err);
	});
}
listCocktailsData()


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
			// if the next ingredient is 'null' that means
			// the rest are null, so we stop the loop
			// and keep the actual ingredient
			if (ingredientsArr[i] === null) {
				break;
			}
			

			// checking for truthiness != includes null & undefined
			// for measurements
			// we add each ingredient to the 'x'

			if (measurementsArr[i] != null)
				{x += `<li class="ingredient">${measurementsArr[i]+` `+ingredientsArr[i]}</li>`;}

			// checking for truthiness. if it is equal to null or undefined then..
			else if (measurementsArr[i] !== null || ) {
				x += `<li class="ingredient">${ingredientsArr[i]}</li>`;
			}
			}
			
		}
		// here we populate div with id="flipcardBack" with 'x'
		flipcardFront.innerHTML += `<ul class="ingredientList">
		${x}
		</ul>
		`;
		flipcardBack.innerHTML+=`<p class="instructions">${data.drinks[random].strInstructions}</p>`
		flipcardBack.innerHTML += `<button class="save-btn"><i class="material-icons" id="heart">favorite</i></button>`
	});
}
randomizeDrinks()

var dadJoke = document.querySelector(".center-align")

// played around this late. Getting a 503 error (CORS?) tried implementing a
// second, diufferent API below but it is a "POST" method rather than GET. Maybe we can 
// discuss this Friday.



var cardPanel = document.querySelector(".card-panel")

fetch("https://joke3.p.rapidapi.com/v1/joke", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1b17814413msh79012f3c019efc8p1c7fb7jsn69899d6e8800",
		"x-rapidapi-host": "joke3.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(dadJokesData => {
	console.log(dadJokesData);
	var joke = dadJokesData.content
	
	console.log(joke)

	var jokeSetUp = `<h5 style="color: red">${joke}</h5>`

	cardPanel.innerHTML += jokeSetUp;

})
.catch(err => {
	console.error(err);
});

// This is where we put the code for the latest cocktail
//This variable is for the div with id 'flipcardFront'
const flipcardFrontLatest = document.getElementById("flipcardFrontLatest");

//This variable is for the div with id 'flipcardBack'
const flipcardBackLatest = document.getElementById("flipcardBackLatest");
const latest = document.getElementById("latest");

// beginning fetch request
fetch("https://the-cocktail-db.p.rapidapi.com/latest.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "1b17814413msh79012f3c019efc8p1c7fb7jsn69899d6e8800",
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
    }
}).then(response => response.json())
    .then(data => {
        console.log(data)
        for (let i = 0; i < 4; i++) {
            let name = data.drinks[i].strDrink;
            let imgUrl = data.drinks[i].strDrinkThumb;
            let drinkInstructions = data.drinks[i].strInstructions;
            let img = `<img src=${imgUrl} style="width: 200px; border-radius: 10px;"/>`;
            let cocktailName = `<h4>${name}</h4>`;
            let instructions = `<p>${drinkInstructions}</p>`
            let ingredientsArray = [];

            for (const [key, value] of Object.entries(data.drinks[i])) {
                let a = ""
                if (key.length > 13)
                    a = key.substring(3, 13);
                if (a === "Ingredient" && value != null)
                    ingredientsArray.push(value);
            }



            let ingredients = '';
            ingredientsArray.map(ingr => {
                ingredients += `<li>${ingr}</li>`;
            })


            let ingredientsList = `<h5><b>Ingredients</b></h5>
<ul>${ingredients}</ul>`;

            let x = `<div class="col">
    <div class="flip-card">
		<div class="flip-card-inner">
        <div id="flipcardFrontLatest" class="flip-card-front">
        ${img}
        ${cocktailName}
        ${ingredientsList}
		</div>
        <div id="flipcardBackLatest" class="flip-card-back">
        ${instructions}
        <button class="save-btn"><i class="material-icons" id="heart">favorite</i></button>
        </div>
		</div>
    </div>

	</div>`;
            console.log(x)
            latest.innerHTML += x;
        }
    })
