// let api =
//   "https://api.openweathermap.org/data/2.5/weather";

//   // ?={city name}&appid={API key}

let api_key = "0282843047ef09a9ed4427043c9c9b32";
// let city = "buldana"




async function fetchWeatherData(city) {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
  );

  let data = await res.json();
  console.log(data);
  // console.log(data.main.temp)
  // console.log(data.name);
  // console.log(data.wind.speed);
  // console.log(data.main.humidity);
  // console.log(data.visibility);
  
  updateWeather(data);
  
  
  
}

let cityElement = document.querySelector(".city")
let tempreture = document.querySelector(".temp")
let windspeed = document.querySelector(".wind-speed")
let humidity = document.querySelector(".humidity")
let visibility = document.querySelector(".visibility-distance");
let description = document.querySelector(".description");
let date = document.querySelector(".date")

fetchWeatherData();

function updateWeather(data){
  cityElement.textContent = data.name;
  tempreture.textContent = `${Math.round(data.main.temp)}°C`;
  windspeed.textContent = `${data.wind.speed} km/h`;
  humidity.textContent = `${data.main.humidity}%`;
  visibility.textContent = `${data.visibility / 1000} Km`;
  description.textContent = data.weather[0].description;

  let currentDate = new Date();
  date.textContent = currentDate.toDateString();
}

let formElement = document.querySelector(".search_form");
let inputElement = document.querySelector(".city_input");


formElement.addEventListener("submit", function(e){
  event.preventDefault();

 let city =  inputElement.value;
 if(city !== '')
  fetchWeatherData(city);



 
})
