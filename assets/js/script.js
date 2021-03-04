// Variables
//stringify or not to stringify?
const ApiKey = '5a1361306ef906fe293b5db1d3f1f98c'
// search array to implement / save searches
let searches = [];
let searchBtn = $('#searchButton')
let featuredSearchesText = ['Austin', 'Chicago', 'New York', 'Orlando', 'Seattle'];
let citySearched = "Atlanta";
 
// On page load, there needs to be a render function using api's for a preset city ie. columbus
function renderPage(){
    
    // declaring + appending the container's containing the results and 5-day forecasts
    let info = $('.information');
    let results = $('<div>');
    results.addClass('results');
    results.appendTo(info);
    let cityResults = $('<h2>');
    cityResults.text(citySearched);
    cityResults.appendTo(results);
    let tempResults = $('<h3>');
    tempResults.text = "Temperature: " + temperature + "\u00B0F";

    
    let forecast = $('<div>');
    forecast.addClass('forecast');
    forecast.appendTo(info);



    //variables we need to call/fetch from api
    let temperature = ""

}


renderPage();









//function calling api using "fetch off of an event listener"
let cityUrl = 'api.openweathermap.org/data/2.5/weather?q=' + citySearched + '&appid=' + ApiKey

//Input btn listener



//Render function using API's and Fetch


//Saving past searches using local storage





// api.openweathermap.org/data/2.5/weather?q=Columbus&appid=5a1361306ef906fe293b5db1d3f1f98c



