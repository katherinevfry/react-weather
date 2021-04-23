import axios from 'axios';

const dbUrl = process.env.REACT_APP_URL;
const appId = process.env.REACT_APP_API_KEY;

const getWeather = (userInput) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}${userInput}&appid=${appId}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getWeather;
