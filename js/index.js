var findBtn = document.getElementById("findBtn");
var findInput = document.getElementById("findInput");
var locationName = document.querySelector(".weather .today .location")
var currentDeg = document.querySelector(".weather .today .number")
var currentIcon = document.querySelector(".weather .today img.icon")
var currentState = document.querySelector(".weather .today .state")
var currentCload = document.querySelector(".weather .today .info span.cload")
var currentWind = document.querySelector(".weather .today .info span.wind")
var currentDir = document.querySelector(".weather .today .info span.dir")
var tomorrowIcon = document.querySelector(".weather .tomorrow .image img")
var tomorrowMax = document.querySelector(".weather .tomorrow .degree")
var tomorrowMin = document.querySelector(".weather .tomorrow .smaller")
var tomorrowState = document.querySelector(".weather .tomorrow .state")
var nextIcon = document.querySelector(".weather .next .image img")
var nextMax = document.querySelector(".weather .next .degree")
var nextMin = document.querySelector(".weather .next .smaller")
var nextState = document.querySelector(".weather .next .state")
var todayName = document.querySelector(".weather .today .day")
var tomorrowName = document.querySelector(".weather .tomorrow .day")
var nextName = document.querySelector(".weather .next .day")
var todayDate = document.querySelector(".weather .today .date");



async function getDegree(search) {
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0a156648a02041e6ada165630243009&q=${search}&days=3`)
    var apiData = await response.json();
    // console.log(apiData.forecast.forecastday[1].day.condition.text);

    var todayInfo = {
        location: apiData.location.name,
        temp: apiData.current.temp_c + "<sup>o</sup>C",
        icon: "https:"+apiData.current.condition.icon,
        text: apiData.current.condition.text,
        cload: apiData.current.cloud + " %",
        wendDir: apiData.current.wind_dir,
        wendKmh: apiData.current.wind_kph + " km/h",
    }
    locationName.innerHTML = todayInfo.location;
    currentDeg.innerHTML = todayInfo.temp;
    currentIcon.src = todayInfo.icon;
    currentState.innerHTML = todayInfo.text;
    currentCload.innerHTML = todayInfo.cload;
    currentWind.innerHTML = todayInfo.wendKmh;
    currentDir.innerHTML = todayInfo.wendDir;

    var tomorrowInfo = {
        max: apiData.forecast.forecastday[1].day.maxtemp_c + "<sup>o</sup>C",
        min: apiData.forecast.forecastday[1].day.mintemp_c + "<sup>o</sup>",
        icon: "https:"+apiData.forecast.forecastday[1].day.condition.icon,
        text: apiData.forecast.forecastday[1].day.condition.text
    }
    tomorrowIcon.src = tomorrowInfo.icon;
    tomorrowMax.innerHTML = tomorrowInfo.max;
    tomorrowMin.innerHTML = tomorrowInfo.min;
    tomorrowState.innerHTML = tomorrowInfo.text;


    var nextInfo = {
        max: apiData.forecast.forecastday[2].day.maxtemp_c + "<sup>o</sup>C",
        min: apiData.forecast.forecastday[2].day.mintemp_c + "<sup>o</sup>",
        icon: "https:"+apiData.forecast.forecastday[2].day.condition.icon,
        text: apiData.forecast.forecastday[2].day.condition.text
    }
    nextIcon.src = nextInfo.icon;
    nextMax.innerHTML = nextInfo.max;
    nextMin.innerHTML = nextInfo.min;
    nextState.innerHTML = nextInfo.text;

    // console.log(tomorrowInfo);

}


findBtn.addEventListener("click", function () {


    getDegree(findInput.value)

})
getDegree("cairo")


var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var today = new Date();
todayName.innerHTML = days[today.getDay()];
tomorrowName.innerHTML = days[today.getDay() + 1];
nextName.innerHTML = days[today.getDay() + 2];
var currentMonth = monthNames[today.getMonth()];
var currentDate = today.getDate();
todayDate.innerHTML = currentDate +" "+ currentMonth;

console.log(currentDate);



