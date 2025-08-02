const searchButton = document.querySelector('.search-bar button');
const searchInputBox = document.querySelector('.search-bar input');
const weatherIcon = document.querySelector('.weather-icon');

async function getWeather(city) {

  try {
    document.querySelector(".error").style.display="none";
    document.querySelector(".container").style.display="none";    
    document.querySelector(".loading").style.display="block";

    const res = await fetch(weather_app_url + city + `&appid=${API_KEY}`);

    if (res.status === 404) {
      console.log("Invalid city...");
      document.querySelector(".error").style.display="block";
      document.querySelector(".container").style.display="none";
      return;
    }

    if (res.status === 200) {
      document.querySelector(".error").style.display="none";
      document.querySelector(".container").style.display="block"; 
    }

    let data = await res.json();
    const desc = data.weather[0].main;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".desc").innerHTML = data.weather[0].description;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed;

    if (desc == "Clouds") {
      weatherIcon.src = "assets/climate/brokenClouds.png";
    } else if (desc == "Clear") {
      weatherIcon.src = "./assets/climate/sun.png";
    } else if (desc == "Rain") {
      weatherIcon.src = "assets/climate/lightRain.png";
    } else if (desc == "Drizzle") {
      weatherIcon.src = "assets/climate/lightRain.png";
    } else if (desc == "Mist") {
      weatherIcon.src = "";
    } else {
      weatherIcon.src = "assets/climate/brokenClouds.png"
    }
  } catch (error) {
    console.log(error)
  } finally {
    document.querySelector(".loading").style.display="none";
  }
}

  

searchButton.addEventListener("click", () => {
  getWeather(searchInputBox.value);
})

searchInputBox.addEventListener("keyup", () => {
  if (event.key == "Enter") {
    getWeather(searchInputBox.value);
  }
})