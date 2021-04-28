import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap';
import PropTypes from 'prop-types';

const WeatherCard = ({ ...weatherObj }) => (
  <Card id="weather-card"
  className="shadow rounded">
    <CardBody>
      <CardTitle tag="h5">{weatherObj.name}</CardTitle>
      <CardText>{weatherObj.main.temp}F | {weatherObj.weather[0].description}</CardText>
    </CardBody>
  </Card>
);

WeatherCard.propTypes = {
  name: PropTypes.string,
  temp: PropTypes.number,
  description: PropTypes.string
};

export default WeatherCard;
