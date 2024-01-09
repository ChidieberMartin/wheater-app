function openNav() {
    document.getElementById("demo").style.heigth = "100%";
}
function closebtn() {
    document.getElementById("demo").style.height = "0";
}

const getCityDetails = async (event) => {

    event.preventDefault();

    const inputElement = document.getElementById("searchInput")
    const searchedValue = inputElement.value;
    const cityNameElement = document.getElementById("cityName");
    const cityRegionElement = document.getElementById("cityRegion");
    const cityCountryElement = document.getElementById("cityCountry");
    const cityLocalTimeElement = document.getElementById("cityLocalTime");
    const cityTempretureCelsiusElement = document.getElementById("cityTempretureCelsius");
    const cityTempretureFahrenheitElement = document.getElementById("cityTempretureFahrenheit");
    const cityWeatherConditionElement = document.getElementById("cityWeatherCondition");
    const cityWindSpeedMphElement = document.getElementById("cityWindSpeedMph");
    const cityWindSpeedKphElement = document.getElementById("cityWindSpeedKph");
    const cityWindSpeedDegreeElement = document.getElementById("cityWindSpeedDegree");
    const cityHumidityElement = document.getElementById("cityHumidity");
    const cityForecastElement = document.getElementById("cityForecast");
    const cityCloudElement = document.getElementById("cityCloud");

    if (!searchedValue) {
        return alert("Input is empthy");
    }

    const url = `http://api.weatherapi.com/v1/forecast.json?key=a90804a40bf645c6ab1113849232811&q=${searchedValue}&days=2&aqi=yes&alerts=yes`


    const errMsg = "We could'nt get this  " + searchedValue + "  at this moment";

    try {
        const result = await fetch(url);
        const cityData = await result.json()

        const actualCityData = cityData;

        cityNameElement.innerText = actualCityData.location.name.toUpperCase();
        cityRegionElement.innerText = actualCityData.location.region.toUpperCase();
        cityCountryElement.innerText = cityData.location.country.toUpperCase();
        cityLocalTimeElement.innerText = cityData.location.localtime;
        cityTempretureCelsiusElement.innerText = "Tempreture C:" + actualCityData.current.temp_c;
        cityTempretureFahrenheitElement.innerText = "Tempreture F:" + actualCityData.current.temp_f;
        cityWeatherConditionElement.innerHTML = `<img src="http:${cityData.current.condition.icon}" width="150px" />`;
        cityWindSpeedMphElement.innerText = "Wind-mph: " + actualCityData.current.wind_mph;
        cityWindSpeedKphElement.innerText = "Wind-Kph: " + actualCityData.current.wind_kph;
        cityWindSpeedDegreeElement.innerText = "Wind degree: " + actualCityData.current.wind_degree;
        cityHumidityElement.innerText = "Humdity: " + actualCityData.current.humidity;
        cityForecastElement.innerHTML = `<img src="http:${cityData.forecast.forecastday[0].day.condition.icon}" width="170"/>`;
        cityCloudElement.innerText = "Cloud:  " + actualCityData.current.cloud;
    } catch (error) {
        alert(errMsg)
        console.log(errMsg)
    }
}

var data = document.getElementsByClassName("controlBtn");
var i;

for (i = 0; i < data.length; i++) {
    data[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var demo = this.nextElementSibling;
        if (demo.style.display = "none") {
            demo.style.display = "block";
        } else {
            demo.style.display = "none";
        }
    });
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlide");

    for (i=0; i < slides.length;i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

