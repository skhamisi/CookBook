// Write your JavaScript code.
const api = "6ef5d2b5f2984c96896a94b1413bb9a5"
const submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', function () {
    console.log('You clicked Me!');
    callRecipe();
});


function callRecipe() {
    let viewNumber = 10;
    let searchBarValue = document.querySelector('#searchbar').value
    let url = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&fillIngredients=true&query= ${searchBarValue}&number=${viewNumber}&apiKey=${api}`
    fetch(url)
        .then(response => (response.json()))
        .then(response => {
            let recipes = response.results;
            //window.location.replace('https://localhost:44366/RecipeResults');
            let mainContainer = document.getElementById('myData')
            recipes.forEach(recipe => {
                let div = document.createElement("a");
                var linktext = document.createTextNode(recipe.title);
                div.appendChild(linktext);
                div.title = recipe.title;
                div.href = "https://www.google.com";
                //div.innerHTML = `Recipe: ${recipe.title} Image: ${recipe.image}`;
                mainContainer.appendChild(div);
            })
            mainContainer.style
        })
}