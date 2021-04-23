import React, { useState } from 'react';
import { Button, Form } from 'reactstrap';
import getWeather from '../helpers/data/weatherData';
import './App.scss';

function App() {
  const [printWeather, setPrintWeather] = useState({});
  const [userInput, setUserInput] = useState('');

  const grabWeather = () => {
    getWeather(userInput)
      .then((response) => {
        setPrintWeather(response);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput('');
    grabWeather();
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  console.warn(printWeather);

  return (
    <div>
      <Form
      onSubmit={handleSubmit}
      id="get-weather"
      className="shadow p-3 rounded">
        <div className="form-group">
          <h2
            id="search-title">
              Get the Weather
          </h2>
          <input
            type="text"
            className="form-control"
            id="value"
            aria-describedby="location"
            onChange={handleUserInput}>
          </input>
        </div>
      <Button
        type="submit"
        id="search-weather"
        className="btn btn-outline-dark">
          Submit
      </Button>
      </Form>`;
    </div>
  );
}

export default App;
