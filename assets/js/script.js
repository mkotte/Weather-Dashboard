// Variables
//stringify or not to stringify?
const ApiKey = '5a1361306ef906fe293b5db1d3f1f98c'
// search array to implement / save searches
let searches = [];
let searchBtn = document.getElementById('search-button')
let featuredSearchesText = ['Austin', 'Chicago', 'New York', 'Orlando', 'Seattle'];
let citySearched = "Atlanta";
 
// On page load, there needs to be a render function using api's for a preset city ie. columbus
function renderPage(){
    
    
    //variables we need to call/fetch from api
    let temperature = "";
    let windSpeed = "";
    let humidity = "";
    let uvIndex= "";
    
    
    // declaring + appending elements of the container containing the results
   
    
}
renderPage();

//function calling api using "fetch off of an event listener"
let cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearched + '&appid=' + ApiKey
function cityData(){
    fetch (cityUrl).then( function (response){
        if(response.ok){
            response.json().then(function (data){
                console.log(data)
                let latitude = data.coord.lat;
                let longitude = data.coord.lon;
                console.log(longitude + ", " + latitude)

                weatherData(latitude,longitude)
            }) 
        }
    })
}

function weatherData(latitude,longitude){
let oneCallApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly,alerts&appid=" + ApiKey;
    //fetch goes here
}


cityData();

//Input btn listener



//Render function using API's and Fetch


//Saving past searches using local storage





// api.openweathermap.org/data/2.5/weather?q=Columbus&appid=5a1361306ef906fe293b5db1d3f1f98c



