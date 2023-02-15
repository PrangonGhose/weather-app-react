import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CountryCard from '../components/home';
import { getCountry, getRegion, getSubRegion } from '../redux/home/home';
import logo from '../images/logo.png';

const HomePage = () => {
  let countryList = useSelector((state) => state.country);
  if (countryList.length !== 0) {
    countryList = countryList[countryList.length - 1];
  }
  const [region, setRegion] = useState('All');
  const [subRegion, setSubRegion] = useState('All');
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
  };

  const handleChangeSub = (event) => {
    if (event.target.value !== 'All') {
      dispatch(getSubRegion(event.target.value));
    }
    setRegion('All');
    setSubRegion(event.target.value);
  };

  return (
    <div className="flex">
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="./">
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
            </label>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container-fluid all-countries">
        <div className="header">
          <h2>
            Total no of countries displayed:&nbsp;
            {countryList.length}
          </h2>
        </div>
        <div className="d-flex flex-wrap">
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
