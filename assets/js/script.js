const apiKey = "47d7ba8c1a57c412777ddcb40635e9c5"
let searchBtn = document.querySelector("#btn-search")
let citySearchContainer = document.getElementById("city-search-container")
let searchInput = document.getElementById("input-search")
let city = ""
let cityNameDisplay = document.getElementById("city-name")
let currentDate = moment().format("LL")
const cityList = document.getElementById("city-list")
const date = document.getElementById("date")
const forecastContainer = document.getElementById("forecast-container")
const forecastDisplay = document.getElementById("forecast")
const cityHistory = JSON.parse(localStorage.getItem("city-name")) || []


const cityCoordinates = function(city) {
  var geoApiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + ",&limit=1&appid=" + apiKey;
  console.log(geoApiUrl);
  
  fetch(geoApiUrl)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
  })
  .then(data => {
    let latitude = data[0].lat
    let longitude = data[0].lon

    showWeatherInfo(latitude, longitude, city)
  })
}


const showWeatherInfo = function(latitude, longitude, city) {
  var weatherApiUrl = "api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + apiKey;
  console.log(weatherApiUrl);
  console.log(city);

  fetch(weatherApiUrl)
  .then(response => {
    if (response.ok) {
      return response.json()
      .then(data => {
        console.log(data);
      })
    }
  })
}

function updateLocalStorage() {
  cityHistory.push(city)
  localStorage.setItem("city-name", JSON.stringify(cityHistory))
}

searchBtn.addEventListener('click', function(event) {
  event.preventDefault()
  city = searchInput.value.trim()
  console.log(city);
  
  if (city) {
    cityCoordinates(city)
  }
})
