//Veri çkmek için link ve api key
const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'fbd8317da680b6dce6eff45b74a7b502'

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

const displayResult = (result) => {
    let city = "",
        temp = "",
        desc = "",
        minMax = ""
    weathercountrylink = "";

    city = document.querySelector('.city')
    city.innerText = `${result.name},${result.sys.country}`

    //Şehrin hava durumu -Daha fazlası için
    weathercountrylink = document.querySelector('.weathercountrylink')
    weathercountrylink.setAttribute("href", `https://openweathermap.org/find?q=${city.innerText}`)

    //Anlık hava sıcaklığı
    temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    //Hava Bilgisi ve icon ekleme
    desc = document.querySelector('.desc')
    desc.innerHTML = (result.weather[0].description).toUpperCase() + `<img src="http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="" srcset="">`

    //Min ve Max hava sıcaklıkları
    minMax = document.querySelector('.minmax')
    minMax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener("change", setQuery = (e) => {
    getResult(searchBar.value)
})