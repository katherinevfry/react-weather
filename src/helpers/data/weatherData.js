import axios from 'axios';
import apiKeys from '../apiKeys';

const dbUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const appId = apiKeys.weatherKey;

const getWeather = (userInput) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}${userInput}&appid=${appId}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getWeather;
