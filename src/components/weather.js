import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BsFillArrowLeftCircleFill, BsWind } from 'react-icons/bs';
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
    <div className="container flex">
      <div className="first-row">
        <Link to="/">
          <BsFillArrowLeftCircleFill className="back" />
        </Link>
      </div>
      <div className="second-row flex">
        <div className="card weather-card" style={{ width: '30rem' }}>
          <img src={weatherCountry[0].countryFlag} alt="" />
          <div className="card-body">
            <h5 className="card-title text-center">
              Weather of&nbsp;
              {countryCapital}
              ,
              {weatherCountry[0].countryName}
            </h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <FaTemperatureHigh className="react-icons" />
              {' '}
              The temperature of today is
              {' '}
              {temperature}
            </li>
            <li className="list-group-item">
              <BsWind className="react-icons" />
              {' '}
              The wind speed is
              {' '}
              {wind}
            </li>
            <li className="list-group-item">
              <FaSkyatlas className="react-icons" />
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
