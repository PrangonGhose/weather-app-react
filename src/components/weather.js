import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useParams } from 'react-router-dom';
import { BsWind } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { FaTemperatureHigh, FaSkyatlas } from 'react-icons/fa';
import { getWeather } from '../redux/weather/weather';

const Weather = () => {
  let weather = useSelector((state) => state.weather);
  if (weather.length !== 0) {
    weather = weather[weather.length - 1];
  }
  const { temperature, wind, description } = weather;
  let countryList = useSelector((state) => state.country);
  if (countryList.length !== 0) {
    countryList = countryList[countryList.length - 1];
  }
  const { countryCapital } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather(countryCapital));
  }, [dispatch, countryCapital]);

  let weatherCountry = [{ countryFlag: 'loading', countryName: 'loading' }];

  if (countryList.length !== 0 && weather.length !== 0) {
    weatherCountry = countryList.filter((country) => country.countryCapital === countryCapital);
  }

  return (
    <div className="flex">
      <div className="first-row">
        <Navbar expand="lg" className="navbar">
          <Navbar.Brand href="./" className="text-white">
            <Link to="/">
              <IoIosArrowBack className="back" />
            </Link>
            &nbsp;Weather Data
          </Navbar.Brand>
        </Navbar>
      </div>
      <div className="second-row flex">
        <div className="card weather-card" style={{ width: '95%' }}>
          <div className="card-display flex">
            <div className="image-holder flex">
              <img src={weatherCountry[0].countryFlag} alt={`Flag of ${weatherCountry[0].countryName}`} className="flag" />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">
                Weather of&nbsp;
                {countryCapital}
                ,&nbsp;
                {weatherCountry[0].countryName}
              </h5>
            </div>
          </div>
          <ul className="list-group">
            <li className="list-group-item text-white" style={{ backgroundColor: '#ec4c8a' }}>
              <FaTemperatureHigh className="react-icons text-dark" />
              {' '}
              The temperature of today is
              {' '}
              {temperature}
            </li>
            <li className="list-group-item text-white" style={{ backgroundColor: '#f38fb5' }}>
              <BsWind className="react-icons text-dark" />
              {' '}
              The wind speed is
              {' '}
              {wind}
            </li>
            <li className="list-group-item text-white" style={{ backgroundColor: '#ec4c8a' }}>
              <FaSkyatlas className="react-icons text-dark" />
              {' '}
              The sky is
              {' '}
              {description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
