 const api_key = "0282843047ef09a9ed4427043c9c9b32";
 const city = "Buldana"


async function fetchWeatherData(){
   const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
    );
    const data = response.json();
    console.log(data);
    console.log(data.main.temp);
    

}
fetchWeatherData();