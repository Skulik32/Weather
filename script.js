let searchButton = document.querySelector('.searchbutton');
let weatherCity = document.getElementById('weathercity');
let result2 = document.getElementById('result2');

searchButton.addEventListener("click", () => {
  let cityName = weatherCity.value;
  let final = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=863242cfb2b1d357e6093d9a4df19a4b&units=metric`;
  fetch(final)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const weatherValue = data.weather[0].main;
    let imgSrc;
    if (weatherValue === `Clouds`) {
      imgSrc = "clouds.png"
    }else if(weatherValue === `Clear`){
      imgSrc = `clear.png`
    }else if(weatherValue === `Rain`){
      imgSrc = `rain.png`
    }else if(weatherValue === `Drizzle`){
      imgSrc = `drizzle.png`
    }else if(weatherValue === `Snow`){
      imgSrc = `snow.png`
    }else if(weatherValuee === `Wind`){
      imgSrc = `wind.png`
    }else if(weatherValue === `Mist`){
      imgSrc = `mist.png`
    }
 
    result2.innerHTML = `<h1>${cityName.charAt(0).toUpperCase() + cityName.slice(1)} Weather</h1>
      <img src="${imgSrc}" alt="weather icon">
      <h2>${Math.round(data.main.temp)}°C   &nbsp &nbsp ${weatherValue}</h2>
      <div class="wrapper">
        <div class="data-wrapper">
        <img src="raindrop.png" class="raindrop">
          <h4>humidity:</h4>
          <span class="humidity">${data.main.humidity}%</span>
        </div>
        <div class="data-wrapper">
        <img src="wind.png" class="wind">
          <h4>Wind Speed:</h4>
          <span class="Wind speed">${data.wind.speed}km/h</span>
        </div>
        <div class="data-wrapper">
        <h4>Country:</h4>
        <span>${data.sys.country}</span>
        </div>
      </div>
    ` 
    console.log(data.weather[0].main)
  });

});



