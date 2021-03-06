// Variables
//stringify or not to stringify?
const ApiKey = '5a1361306ef906fe293b5db1d3f1f98c'
// search array to implement / save searches
let searches = [];
let searchBtn = document.getElementById('search-button')
let featuredSearchesText = ['Austin', 'Chicago', 'New York', 'Orlando', 'Seattle'];
let citySearched = "Columbus";
 
// On page load, there needs to be a render function using api's for a preset city ie. columbus
function renderPage(){
    
    
 
    
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
                let citySearched = data.name
                console.log(citySearched)
                let currentDate = "(" + moment().format('L') + ")"
                console.log(currentDate)


                weatherData(latitude,longitude)


            }) 
        }
    })
}

function weatherData(latitude,longitude){
let oneCallApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly,alerts&appid=" + ApiKey;
    //fetch goes here
    fetch(oneCallApi).then( function (response){
        if(response.ok){
            response.json().then(function (data){
                console.log(data)
                console.log(data.current.temp)
                
                let currentIcon = data.current.weather[0].icon;
                console.log(currentIcon)
                let currentTemp = "Temperature: " + ((data.current.temp - 273.15) * 1.8 + 32).toFixed(2) + "\u00B0F"
                console.log(currentTemp) 
                let currentHumidity = "Humidity: " + data.current.humidity + "%";
                console.log(currentHumidity);
                let currentWindSpeed = "Wind Speed: " + data.current.wind_speed + " MPH"
                console.log(currentWindSpeed);
                let currentUVIndex = "" +data.current.uvi+ "";
                console.log(currentUVIndex);

                // loop for forecast cards + information
               
                for (let i=0; i < 5; i++){    
                    let forecast = document.querySelector('#forecast')
                    
                    let forecastDate = moment().add((i + 1), 'd').format('L');
                    console.log(forecastDate);
                    let forecastIcon = "https://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png";
                    console.log(forecastIcon);
                    let forecastTemp = "Temp: " + ((data.daily[i].temp.day - 273.15) * 1.8 + 32).toFixed(2) + "\u00B0F"
                    console.log(forecastTemp);
                    console.log(forecastTemp);
                    console.log(forecastTemp);
                    let forecastHumidity = "Humidity: " + data.daily[i].humidity + "%";
                    console.log(forecastHumidity);

                    //creating, adding content and appending the forecast cards/
                    let forecastCard = document.createElement('div');
                    forecast.appendChild(forecastCard);
                    
                    let forecastDateDisplay = document.createElement('h4')
                    forecastDateDisplay.textContent = forecastDate;
                    forecastCard.appendChild(forecastDateDisplay);

                    let forecastIconDisplay = document.createElement('img')
                    forecastIconDisplay.src = forecastIcon;
                    forecastCard.appendChild(forecastIconDisplay);

                    let forecastTempDisplay = document.createElement('p');
                    forecastTempDisplay.textContent = forecastTemp;
                    forecastCard.appendChild(forecastTempDisplay);
                    
                    let forecastHumidityDisplay = document.createElement('p');
                    forecastHumidityDisplay.textContent = forecastHumidity;
                    forecastCard.appendChild(forecastHumidityDisplay);
            


                }

                //TODO: append data to document, add event listener + submitted values, create a featured + recent search list using local storage
                //TODO: style created elements, then update README.










        })
    }})
}


cityData();

//Input btn listener



//Render function using API's and Fetch


//Saving past searches using local storage





// api.openweathermap.org/data/2.5/weather?q=Columbus&appid=5a1361306ef906fe293b5db1d3f1f98c



