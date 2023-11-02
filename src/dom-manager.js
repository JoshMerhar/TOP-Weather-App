export const domManager = (function () {

    function displayWeather(currentWeather) {
        const location = document.querySelector('#location');
        const conditions = document.querySelector('#conditions');
        const temperature = document.querySelector('#temperature');
        const wind = document.querySelector('#wind');
        const humidity = document.querySelector('#humidity');

        location.textContent = currentWeather.location;
        conditions.textContent = 'Currently: ' + currentWeather.conditions;
        temperature.textContent = 'Temperature: ' + currentWeather.tempF + ' F';
        wind.textContent = 'Wind: ' + currentWeather.windMPH + ' mph';
        humidity.textContent = 'Humidity: ' + currentWeather.humidity + '%';
    }

    return {displayWeather};
})();