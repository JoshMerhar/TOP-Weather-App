export const dataManager = (function () {

    async function getWeatherData() {

        const searchField = document.querySelector('#search').value;

        if (!searchField) {
            return alert('Search can\'t be empty.');
        }
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5e7b9ca8a6b54f279dc03649232610&q=${searchField}`, {mode: "cors"});
            const weatherData = await response.json();
            if (weatherData.error) {
                console.log(error.response);
                return;
            }
            return weatherData;
        } catch (error) {
            console.log(error.response);
            return;
        }
    }

    let currentWeather = {};
    function getCurrentWeather(weatherData) {
        if (weatherData) {
            currentWeather = {
                location: weatherData.location.name + ', ' + weatherData.location.region,
                conditions: weatherData.current.condition.text,
                icon: weatherData.current.condition.icon,
                tempF: weatherData.current.temp_f,
                tempC: weatherData.current.temp_c,
                feelsLikeF: weatherData.current.feelslike_f,
                feelsLikeC: weatherData.current.feelslike_c,
                humidity: weatherData.current.humidity,
                windMPH: weatherData.current.wind_mph,
                windKPH: weatherData.current.wind_kph,
                windDir: weatherData.current.wind_dir,
            }
        }
        return currentWeather;
    }

    return {getWeatherData, getCurrentWeather};
})();