import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillGearFill, BsFillMicFill } from 'react-icons/bs';
import CountryCard from '../components/home';
import { getCountry, getRegion, getSubRegion } from '../redux/home/home';
import logo from '../images/logo.png';
import all from '../images/all.png';
import america from '../images/america.png';
import asia from '../images/asia.png';
import africa from '../images/africa.png';
import europe from '../images/europe.png';
import oceania from '../images/oceania.png';

const HomePage = () => {
  let countryList = useSelector((state) => state.country);
  if (countryList.length !== 0) {
    countryList = countryList[countryList.length - 1];
  }
  const [region, setRegion] = useState('All');
  const [subRegion, setSubRegion] = useState('All');
  const [map, setMap] = useState(all);
  const [title, setTitle] = useState('The World');
  const dispatch = useDispatch();

  useEffect(() => {
    if (region === 'All' && subRegion === 'All') {
      dispatch(getCountry());
    }
  }, [region, subRegion, dispatch]);

  const handleChange = (event) => {
    if (event.target.value !== 'All') {
      dispatch(getRegion(event.target.value));
    }
    setSubRegion('All');
    setRegion(event.target.value);
    setTitle(event.target.value);
    if (event.target.value.includes('All')) {
      setMap(all);
      setTitle('The World');
    } else if (event.target.value.includes('Asia')) {
      setMap(asia);
    } else if (event.target.value.includes('America')) {
      setMap(america);
    } else if (event.target.value.includes('Africa')) {
      setMap(africa);
    } else if (event.target.value.includes('Europe')) {
      setMap(europe);
    } else {
      setMap(oceania);
    }
  };

  const handleChangeSub = (event) => {
    if (event.target.value !== 'All') {
      dispatch(getSubRegion(event.target.value));
    }
    setRegion('All');
    setSubRegion(event.target.value);
    setTitle(event.target.value);
    if (event.target.value.includes('All')) {
      setMap(all);
      setTitle('The World');
    } else if (event.target.value.includes('Asia')) {
      setMap(asia);
    } else if (event.target.value.includes('America')) {
      setMap(america);
    } else if (event.target.value.includes('Africa')) {
      setMap(africa);
    } else if (event.target.value.includes('Europe')) {
      setMap(europe);
    } else {
      setMap(oceania);
    }
  };

  return (
    <div className="flex">
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="./" className="text-white">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block justify-content-center"
            alt="Weather App logo"
          />
          {' '}
          Weather App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end navbar-collapse">
            <label htmlFor="region">
              Filter with Continent
              <select name="region" id="region" value={region} onChange={handleChange}>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </label>
            <label htmlFor="sub-region">
              Filter with Sub Continent
              <select name="sub-region" id="sub-region" value={subRegion} onChange={handleChangeSub}>
                <option value="All">All</option>
                <option value="Eastern Asia">Eastern Asia</option>
                <option value="Western Asia">Western Asia</option>
                <option value="South-Eastern Asia">South-Eastern Asia</option>
                <option value="Central Asia">Central Asia</option>
                <option value="Southern Asia">Southern Asia</option>
                <option value="Polynesia">Polynesia</option>
                <option value="Melanesia">Melanesia</option>
                <option value="Micronesia">Micronesia</option>
                <option value="Australia and New Zealand">Australia and New Zealand</option>
                <option value="Northern Europe">Northern Europe</option>
                <option value="Western Europe">Western Europe</option>
                <option value="Southeast Europe">Southeast Europe</option>
                <option value="Southern Europe">Southern Europe</option>
                <option value="Central Europe">Central Europe</option>
                <option value="Eastern Europe">Eastern Europe</option>
                <option value="Northern Africa">Northern Africa</option>
                <option value="Western Africa">Western Africa</option>
                <option value="Southern Africa">Southern Africa</option>
                <option value="Middle Africa">Middle Africa</option>
                <option value="Eastern Africa">Eastern Africa</option>
                <option value="North America">North America</option>
                <option value="Central America">Central America</option>
                <option value="South America">South America</option>
              </select>
              <BsFillMicFill className="gear" />
              <BsFillGearFill className="gear" />
            </label>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="display">
        <div className="image-holder">
          <img
            src={map}
            width="100%"
            height="100%"
            alt="Weather App logo"
          />
        </div>
        <div className="title">
          <h1 className="text-white">{title}</h1>
        </div>
      </div>
      <div className="container-fluid all-countries">
        <div className="header">
          <h2>
            Total no of countries displayed:&nbsp;
            {countryList.length}
          </h2>
        </div>
        <div className="d-flex flex-wrap country-holder">
          {countryList.map((country) => (
            <CountryCard
              key={country.countryName}
              countryName={country.countryName}
              countryFlag={country.countryFlag}
              countryRegion={country.countryRegion}
              countrySubRegion={country.countrySubRegion}
              countryCapital={country.countryCapital}
            />
          ))}
          <div className="pseudo-div" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
