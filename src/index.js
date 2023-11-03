import './styles.css';
import { dataManager } from './data-manager';
import { domManager } from './dom-manager';

const submitSearch = document.querySelector('#submit-search');
submitSearch.addEventListener('click', async () => {
    try {
        const weatherData = await dataManager.getWeatherData();
        if (!weatherData.error) {
            const currentWeather = dataManager.getCurrentWeather(weatherData);
            domManager.displayWeather(currentWeather);
        }
    } catch (error) {
        return domManager.displayError();
    }
});
