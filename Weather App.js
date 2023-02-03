var weather = {
    apiKey: "b953d39bb21c817169492afa5cf971a6",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.country').innerText= 'Weather in ' +  name;
        document.querySelector('.weather-status').innerText = description;
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%';
        document.querySelector('.wind-speed').innerText = 'Wind speed: ' + speed + 'km/h';
        document.querySelector('.degrees').innerText = Math.floor(temp) + '°C';
    },
    search: function (){
        this.fetchWeather(document.querySelector('.search-input').value);
    },
};

document.querySelector('.search-input').addEventListener('click', function () {
    weather.search();
});

document.querySelector('.search-input').addEventListener('keyup', function (event) {
   if (event.key == 'Enter') {
    weather.search();
   }
});