let city = document.getElementById("city")
let country = document.getElementById("country")
let date = document.getElementById("date")
let temp = document.getElementById("temp")
let weather = document.getElementById("weather")
let feels_like = document.getElementById("feels_like")
let humitidy = document.getElementById("humitidy")
let wind_speed = document.getElementById("wind_speed")
let clouds = document.getElementById("clouds")

navigator.geolocation.getCurrentPosition((location)=>{
    let lat = location.coords.latitude
    let lon = location.coords.longitude

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f4dce3879f81d250a6e851c7ceef9a94&units=metric`)
        .then(data => data.json())
        .then((data) => {
            country.innerHTML = data.sys.country;
            city.innerHTML = `${data.name},${data.sys.country}`
            date.innerHTML = moment().format("MMM Do YY");
            temp.innerHTML = Math.round(data.main.temp)+"°C";
            weather.innerHTML = data.weather[0].main
            feels_like.innerHTML = Math.round(data.main.feels_like)+"°C";
            humitidy.innerHTML = data.main.humidity +"%"
            wind_speed.innerHTML = data.wind.speed +"km/h"
            clouds.innerHTML = data.clouds.all +"%"

            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })

    })

