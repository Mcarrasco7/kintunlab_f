// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "369f313fd19b178e8118c611263bc7fe";

/*
// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}
*/
getWeather(1,2);
// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    let api;
    if (comuna=="Toltén"){
        api = "//api.openweathermap.org/data/2.5/weather?q=Lleco,cl&appid="+key;
    }
    else{
        api = "//api.openweathermap.org/data/2.5/weather?q="+comuna+",cl&appid="+key;
    }
    //let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    //let api = `https://api.openweathermap.org/data/2.5/weather?lat=-39.2120600&lon=-73.0783600&appid=${key}`;
    console.log(api);

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.main = data.weather[0].main;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            if (weather.city=="Lleco"){
                weather.city = "Toltén";
            }
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="js/tiempo/icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    
    
    var dict =  JSON.parse('{"Thunderstorm":"Tormenta","Drizzle":"Llovizna","Snow":"Nieve","Tornado":"Tornado","Squall":"Chubasco","Sand":"Arena","Fog":"Niebla","Ash":"Ceniza","Dust":"Polvo","Haze":"Bruma","Smoke":"Humo","Mist":"Niebla","Clouds":"Nublado","Clear":"Despejado","clearsky":"Cielo despejado","fewclouds":"pocas nubes","scatteredclouds":"nubes dispersas","brokenclouds":"nubes fragmentadas","showerrain":"chubascos","Rain":"lluvia","thunderstorm":"tormenta","snow":"nieve","mist":"neblina","thunderstormwithlightrain":"tormenta con lluvia ligera","thunderstormwithrain":"tormenta con lluvia","thunderstormwithheavyrain":"tormenta con lluvia fuerte","lightthunderstorm":"tormenta ligera","heavythunderstorm":"tormenta fuerte","raggedthunderstorm":"tormenta torrencial","thunderstormwithlightdrizzle":"tormenta con llovizna ligera","thunderstormwithdrizzle":"tormenta con llovizna","thunderstormwithheavydrizzle":"tormenta con fuerte llovizna","lightrain": "lluvia ligera","moderaterain": "lluvia moderada","overcastclouds": "nublado"}');
    var temp=weather.main.replace(" ", "");
    //var temp=weather.description.replace(" ", "");
    console.log(weather.main);
    
    var text_tiempo=dict[temp];
    
    descElement.innerHTML = text_tiempo;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});

