export const domManager = (function () {

    function displayWeather(currentWeather) {
        const weatherContainer = document.querySelector('.weather-info-container');
        const location = document.querySelector('#location');
        const conditions = document.querySelector('#conditions');
        const icon = document.querySelector('#conditions-icon');
        const temperature = document.querySelector('#temperature');
        const wind = document.querySelector('#wind');
        const humidity = document.querySelector('#humidity');
        const errorContainer = document.querySelector('.error-container');

        errorContainer.style.display = 'none';
        weatherContainer.style.display = 'flex';
        location.textContent = currentWeather.location;
        conditions.textContent = 'Currently: ' + currentWeather.conditions;
        icon.src = 'https:' + currentWeather.icon;
        temperature.textContent = 'Temperature: ' + currentWeather.tempF + ' F';
        wind.textContent = 'Wind: ' + currentWeather.windDir + ' ' + currentWeather.windMPH + ' mph';
        humidity.textContent = 'Humidity: ' + currentWeather.humidity + '%';
    }

    function displayError() {
        const weatherContainer = document.querySelector('.weather-info-container');
        const errorContainer = document.querySelector('.error-container');
        weatherContainer.style.display = 'none';
        errorContainer.style.display = 'flex';
    }

    return {displayWeather, displayError};
})();