fetch("https://the-cocktail-db.p.rapidapi.com/list.php?i=list", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1b17814413msh79012f3c019efc8p1c7fb7jsn69899d6e8800",
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
	}
})
.then(response =>
    response.json()
)
    
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error);
})
