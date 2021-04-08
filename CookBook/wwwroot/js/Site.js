// Write your JavaScript code.
const api = "4e03be6d29fe48f4bb3f8c037d930808"
const submitButton = document.querySelector("#submit");
//var searchBarValue = $('#searchbar').val()
submitButton.addEventListener('click', function () {
    console.log('You clicked Me!');
    callRecipe();
});

function callRecipe() {
    let viewNumber = 10;
    let searchBarValue = document.querySelector('#searchbar').value
    let url = 'https://api.spoonacular.com/recipes/complexSearch?query=' + searchBarValue + '&number=' + viewNumber + '&apiKey='+ api
    fetch(url)
        .then(response => (response.json()))
        .then(response => (console.log(response)))

        
    //    .then(data => assignCurrentWeatherData(data))
    console.log("searchBarValue:", searchBarValue)
    console.log("API query: ", url)
}