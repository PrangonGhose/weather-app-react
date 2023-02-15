import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_COUNTRY, GET_REGION, GET_SUBREGION } from '../constants';

// Some countries do not have any weather data in the used API
// That is why these countries are not shown in the DOM

const noWeatherDataList = [
  'Iceland', 'Japan', 'Jordan', 'Nauru', 'Palau', 'Iran', 'Austria', 'Turkmenistan', 'Marshall Islands',
  'Mexico', 'British Indian Ocean Territory', 'Cayman Islands', 'Guinea', 'Bosnia and Herzegovina',
  'Vietnam', 'Australia', 'Suriname', 'Brazil', 'Vanuatu', 'Faroe Islands', 'North Korea',
  'Uzbekistan', 'Greenland', 'Ukraine', 'Montserrat', 'Bulgaria', 'Denmark', 'Germany', 'India',
  'Timor-Leste', 'Falkland Islands', 'Dominica', 'Trinidad and Tobago', 'Gibraltar', 'Liechtenstein', 'Guam',
  'Brunei', 'Kazakhstan', 'Honduras', 'Benin', 'Kyrgyzstan', 'Chad', 'Senegal', 'Cocos (Keeling) Islands',
  'Tajikistan', 'Lithuania', 'Fiji', 'France',
];

export const getCountry = createAsyncThunk(GET_COUNTRY, async () => {
  const url = 'https://restcountries.com/v3.1/all';
  const response = await fetch(url);
  const data = await response.json();
  const countryArray = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].capital && !noWeatherDataList.includes(data[i].name.common)) {
      const countryObj = {
        countryName: data[i].name.common,
        countryFlag: data[i].flags.png,
        countryRegion: data[i].region,
        countrySubRegion: data[i].subregion,
        countryCapital: data[i].capital[0] || null,
      };
      countryArray.push(countryObj);
    }
  }
  return countryArray;
});

export const getRegion = createAsyncThunk(GET_REGION, async (region) => {
  const url = `https://restcountries.com/v3.1/region/${region}`;
  const response = await fetch(url);
  const data = await response.json();
  const countryArray = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].capital && !noWeatherDataList.includes(data[i].name.common)) {
      const countryObj = {
        countryName: data[i].name.common,
        countryFlag: data[i].flags.png,
        countryRegion: data[i].region,
        countrySubRegion: data[i].subregion,
        countryCapital: data[i].capital[0] || null,
      };
      countryArray.push(countryObj);
    }
  }
  return countryArray;
});

export const getSubRegion = createAsyncThunk(GET_SUBREGION, async (subRegion) => {
  const url = `https://restcountries.com/v3.1/region/${subRegion}`;
  const response = await fetch(url);
  const data = await response.json();
  const countryArray = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].capital && !noWeatherDataList.includes(data[i].name.common)) {
      const countryObj = {
        countryName: data[i].name.common,
        countryFlag: data[i].flags.png,
        countryRegion: data[i].region,
        countrySubRegion: data[i].subregion,
        countryCapital: data[i].capital[0] || null,
      };
      countryArray.push(countryObj);
    }
  }
  return countryArray;
});

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_COUNTRY}/fulfilled`:
      return [
        ...state,
        action.payload,
      ];
    case `${GET_REGION}/fulfilled`:
      return [
        ...state,
        action.payload,
      ];
    case `${GET_SUBREGION}/fulfilled`:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export default countryReducer;
