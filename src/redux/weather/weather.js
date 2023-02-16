import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_WEATHER } from '../constants';

export const getWeather = createAsyncThunk(GET_WEATHER, async (city) => {
  const url = `https://goweather.herokuapp.com/weather/${city}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_WEATHER}/fulfilled`:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export default weatherReducer;
