import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import Weather from './components/weather';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/weather/:countryCapital" exact element={<Weather />} />
    </Routes>
  );
}

export default App;
