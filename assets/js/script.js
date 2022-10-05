const apiKey = "47d7ba8c1a57c412777ddcb40635e9c5"
let searchBtn = document.querySelector("#btn-search")
let citySearchContainer = document.getElementById("city-search-container")
let searchInput = document.getElementById("input-search")
let city = ""
let cityNameDisplay = document.getElementById("city-name")
let currentDate = moment().format("LL")
console.log(currentDate);
const cityList = document.getElementById("city-list")
const date = document.getElementById("date")
const forecastContainer = document.getElementById("forecast-container")
const forecastDisplay = document.getElementById("forecast")

const cityCoordinates = function(city) {
  console.log("hi");
}

console.log(searchBtn);

searchBtn.addEventListener('click', function(event) {
  event.preventDefault()
  city = searchInput.value.trim()
  console.log(city);
  
  if (city) {
    cityCoordinates(city)
  }
})
