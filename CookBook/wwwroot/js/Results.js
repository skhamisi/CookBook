var resultsContainer = document.querySelector(".main-container-flex-column");


function createRecipeCard(recipe, image) {
    const recipeCard = `
            <div class="card text-white mb-5 recipe-header" style="max-width: 18rem;">
                <div class="recipe-header">
                    <h5 class = 'name' >${recipe.title}</h5>
                </div>
                <div class="card-body">
                    <p class = 'info' > No. Servings: ${recipe.servings}</p>
                    <p class = 'info' > Cook Time: ${recipe.readyInMinutes} min</p><br>
                    <p>
                        <img src='${image}-556x370.jpg' class = "img"><br><br> 
                        <a class = 'sourceURL' href="${recipe.sourceUrl}?">Go to Recipe!</a>
                    </p>
                    
                </div>
            </div>
        `;
    return (recipeCard)
}

function callRecipe() {
    let viewNumber = 10;
    let searchValue = window.location.hash.split('#')[1]
    const api = "3e5b869249msh4af086636aa9752p1dce82jsn658d0a6a184c"
    console.log(searchValue)
    let url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query= ${searchValue}&number=${viewNumber}&apiKey=${api}`

    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "3e5b869249msh4af086636aa9752p1dce82jsn658d0a6a184c",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
        .then(response => (response.json()))
        .then(response => {
            console.log(response)
            let recipes = response.results;
            let imageURL = response.baseUri;
            recipes.forEach(recipe => {
               let image = imageURL+recipe.id
               let mainContainer = document.querySelector('.main-container-flex-column')
               let div = document.createElement("div"); 
                div.id = 'container'
                div.innerHTML = createRecipeCard(recipe, image)
                mainContainer.appendChild(div);
            })
        })
}

callRecipe();

   

