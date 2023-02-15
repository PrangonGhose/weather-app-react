import '@testing-library/jest-dom';
import { GET_WEATHER } from '../redux/constants';
import weatherReducer from '../redux/weather/weather';

describe('Test purity of countryReducer', () => {
  it('Should return the initial state', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    expect(weatherReducer(initialState, action)).toEqual(initialState);
  });

  it('Should handle object addition', () => {
    const initialState = [];
    const payload = {
      temperature: 'MOCKTEMP',
      wind: 'MOCKWIND',
      description: 'MOCKDESC',
    };
    const action = { type: `${GET_WEATHER}/fulfilled`, payload };
    const expected = [{
      temperature: 'MOCKTEMP',
      wind: 'MOCKWIND',
      description: 'MOCKDESC',
    }];
    expect(weatherReducer(initialState, action)).toEqual(expected);
  });
});
