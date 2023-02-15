import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './home/home';
import weatherReducer from './weather/weather';

export const rootReducer = {
  country: countryReducer,
  weather: weatherReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
