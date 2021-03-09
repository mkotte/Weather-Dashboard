// Variables
//stringify or not to stringify?
const display = document.querySelector('#results');
const forecast =document.querySelector('#forecast') ;
const ApiKey = '5a1361306ef906fe293b5db1d3f1f98c'
// search array to implement / save searches
let searches = [];
let searchBtn = document.getElementById('searchButton')
let featuredSearchesText = ['Austin', 'Chicago', 'New York', 'Orlando', 'Seattle'];
let citySearched = "Columbus";
let searchInput = document.getElementById('searchInput')

// On page load, there needs to be a render function using api's for a preset city ie. columbus




function renderPage(event){
    event.preventDefault();
    // wiping page
    removeAllChildNodes(display);
    removeAllChildNodes(forecast);
    //declaring input
    let cityName = searchInput.value; 
    console.log(cityName)
    //render featured + saved searches
    cityData(cityName);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


//function calling api using "fetch off of an event listener"
function cityData(citySearched){
    let cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearched + '&appid=' + ApiKey
    console.log(citySearched + '   ' + cityUrl)
    fetch (cityUrl).then( function (response){
        if(response.ok){
            response.json().then(function (data){
                let latitude = data.coord.lat;
                let longitude = data.coord.lon;
                let citySearched = data.name;
                
                
                let display = document.querySelector('#results')
                let currentDisplay = document.createElement('div');
                currentDisplay.setAttribute('id', 'header-results');
                display.appendChild(currentDisplay);
                let cityDisplay = document.createElement('h2');
                cityDisplay.textContent = citySearched;
                currentDisplay.appendChild(cityDisplay);
                console.log(citySearched)



               
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
                let currentDate = "(" + moment().format('L') + ")";
                let currentIcon = "https://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";                
                let currentTemp = "Temperature: " + ((data.current.temp - 273.15) * 1.8 + 32).toFixed(1) + " \u00B0F";                
                let currentHumidity = "Humidity: " + data.current.humidity + "%";                
                let currentWindSpeed = "Wind Speed: " + data.current.wind_speed + " MPH";                
                let currentUVIndex = document.createElement('span');
                currentUVIndex.textContent = data.current.uvi;
           
                let currentDisplay = document.querySelector('#header-results');
                      
                let dateDisplay = document.createElement('h2');
                dateDisplay.textContent = currentDate;
                currentDisplay.appendChild(dateDisplay);

                let iconDisplay = document.createElement('img');
                iconDisplay.src = currentIcon;
                currentDisplay.appendChild(iconDisplay);

                // let display = document.querySelector('#results')
                let tempDisplay = document.createElement('h3')
                tempDisplay.textContent = currentTemp;
                display.appendChild(tempDisplay);

                let humidityDisplay = document.createElement('h3');
                humidityDisplay.textContent = currentHumidity;
                display.appendChild(humidityDisplay);

                let windDisplay = document.createElement('h3');
                windDisplay.textContent = currentWindSpeed;
                display.appendChild(windDisplay);

                let uviDisplay = document.createElement('h3');
                uviDisplay.textContent = "UV Index: ";
                display.appendChild(uviDisplay);
                uviDisplay.appendChild(currentUVIndex)



                // loop for forecast cards + information
                for (let i=0; i < 5; i++){    
                    
                    let forecastDate = moment().add((i + 1), 'd').format('L');
                    let forecastIcon = "https://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png";
                    let forecastTemp = "Temp: " + ((data.daily[i].temp.day - 273.15) * 1.8 + 32).toFixed(2) + " \u00B0F";
                    let forecastHumidity = "Humidity: " + data.daily[i].humidity + "%";

                    //creating, adding content and appending the forecast cards/
                    // let forecast = document.querySelector('#forecast') ;
                    let forecastCard = document.createElement('div');
                    forecast.appendChild(forecastCard);
                    
                    let forecastDateDisplay = document.createElement('h4');
                    forecastDateDisplay.textContent = forecastDate;
                    forecastCard.appendChild(forecastDateDisplay);

                    let forecastIconDisplay = document.createElement('img');
                    forecastIconDisplay.src = forecastIcon;
                    forecastCard.appendChild(forecastIconDisplay);

                    let forecastTempDisplay = document.createElement('p');
                    forecastTempDisplay.textContent = forecastTemp;
                    forecastCard.appendChild(forecastTempDisplay);
                    
                    let forecastHumidityDisplay = document.createElement('p');
                    forecastHumidityDisplay.textContent = forecastHumidity;
                    forecastCard.appendChild(forecastHumidityDisplay);
                }
              
        })
    }})
}





//TODO: append data to document, add event listener + submitted values, create a featured + recent search list using local storage
//TODO: style created elements, then update README.

cityData(citySearched);

searchBtn.addEventListener('click', renderPage);



