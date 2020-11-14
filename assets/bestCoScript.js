

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



