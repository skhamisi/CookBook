//const api = "3e5b869249msh4af086636aa9752p1dce82jsn658d0a6a184c"
const submitButton = document.querySelector("#submit");

submitButton.addEventListener('click', function () {
    callRecipe();
});


function callRecipe() {
    let searchBarValue = document.querySelector('#searchbar').value
    //window.location.replace('https://localhost:44366/RecipeResults' + `#` + searchBarValue);
    window.location.href = ('https://localhost:44366/RecipeResults' + `#` + searchBarValue);
}
