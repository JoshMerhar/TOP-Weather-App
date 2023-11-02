import './styles.css';
import { dataManager } from './data-manager';
import { domManager } from './dom-manager';

const submitSearch = document.querySelector('#submit-search');
submitSearch.addEventListener('click', async () => {
    const weatherData = await dataManager.getWeatherData();
    const currentWeather = dataManager.getCurrentWeather(weatherData);
    if (!weatherData.error) {
        domManager.displayWeather(currentWeather);
    }
});
