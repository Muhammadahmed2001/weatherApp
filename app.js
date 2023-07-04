let city = document.getElementById("city")
let country = document.getElementById("country")
let date = document.getElementById("date")
let temp = document.getElementById("temp")
let weather = document.getElementById("weather")
let feels_like = document.getElementById("feels_like")
let humitidy = document.getElementById("humitidy")
let wind_speed = document.getElementById("wind_speed")
let clouds = document.getElementById("clouds")

navigator.geolocation.getCurrentPosition((location) => {
    let lat = location.coords.latitude
    let lon = location.coords.longitude
    
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f4dce3879f81d250a6e851c7ceef9a94&units=metric`)
    .then(data => data.json())
    .then((data) => {
            let weather_img = document.getElementById("weather_img")
            country.innerHTML = data.sys.country;
            city.innerHTML = `${data.name},${data.sys.country}`
            date.innerHTML = moment().format("ll");
            temp.innerHTML = Math.round(data.main.temp) + "°C";
            weather.innerHTML = data.weather[0].main
            feels_like.innerHTML = Math.round(data.main.feels_like) + "°C";
            humitidy.innerHTML = data.main.humidity + "%"
            wind_speed.innerHTML = data.wind.speed + "km/h"
            clouds.innerHTML = data.clouds.all + "%"
            if (data.weather[0].main == "Thunderstorm") {
                weather_img.src = "pic/thunderstorms-rain.svg";
            }
            else if (data.weather[0].main == "Clouds") {
                weather_img.src = 'pic/cloudy.svg';
                
                
            }
            else if (data.weather[0].main === "Rain") {
                weather_img.src = "pic/extreme-night-rain.svg"

            }
            else if (data.weather[0].main === "Snow") {
                weather_img.src = "pic/overcast-night-snow.svg"

            }
            else if (data.weather[0].main === "Mist") {
                weather_img.src = "pic/mist.svg"


            }
            else if (data.weather[0].main === "Smoke") {
                weather_img.src = "pic/smoke.svg"



            }
            else if (data.weather[0].main === "Haze") {
                weather_img.src = "pic/haze.svg"


            }
            else if (data.weather[0].main === "Dust") {
                weather_img.src = "pic/dust.svg"


            }
            else if (data.weather[0].main === "Fog") {
                weather_img.src = "pic/fog.svg"


            }
            else if (data.weather[0].main === "Tornado") {
                weather_img.src = "pic/tornado.svg"


            }
            else {
                weather_img.src = "pic/clear-day.svg"
            }


            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

})



let getLocation = document.getElementById("input")

let getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getLocation.value}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`)
    .then(data => data.json())
    .then((data) => {
            let weather_img = document.getElementById("weather_img")
            country.innerHTML = data.sys.country;
            city.innerHTML = `${data.name},${data.sys.country}`
            date.innerHTML = moment().format("ll");
            temp.innerHTML = Math.round(data.main.temp) + "°C";
            weather.innerHTML = data.weather[0].main
            feels_like.innerHTML = Math.round(data.main.feels_like) + "°C";
            humitidy.innerHTML = data.main.humidity + "%"
            wind_speed.innerHTML = data.wind.speed + "km/h"
            clouds.innerHTML = data.clouds.all + "%"
            if (data.weather[0].main == "Thunderstorm") {
                weather_img.src = "pic/thunderstorms-rain.svg";
            }
            else if (data.weather[0].main == "Clouds") {
                weather_img.src = 'pic/cloudy.svg';
                
                
            }
            else if (data.weather[0].main === "Rain") {
                weather_img.src = "pic/extreme-night-rain.svg"

            }
            else if (data.weather[0].main === "Snow") {
                weather_img.src = "pic/overcast-night-snow.svg"

            }
            else if (data.weather[0].main === "Mist") {
                weather_img.src = "pic/mist.svg"


            }
            else if (data.weather[0].main === "Smoke") {
                weather_img.src = "pic/smoke.svg"



            }
            else if (data.weather[0].main === "Haze") {
                weather_img.src = "pic/haze.svg"


            }
            else if (data.weather[0].main === "Dust") {
                weather_img.src = "pic/dust.svg"


            }
            else if (data.weather[0].main === "Fog") {
                weather_img.src = "pic/fog.svg"


            }
            else if (data.weather[0].main === "Tornado") {
                weather_img.src = "pic/tornado.svg"


            }
            else {
                weather_img.src = "pic/clear-day.svg"
            }
            getLocation.value = ""

            
        })
        .catch((err) => {
            console.log(err)
        })
}

