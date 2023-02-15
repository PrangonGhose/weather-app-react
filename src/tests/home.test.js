import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CountryCard from '../components/home';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

const mockData = {
  countryName: 'MockCountry',
  countryFlag: 'MockFlag',
  countryRegion: 'MockRegion',
  countrySubRegion: 'MockSub',
  countryCapital: 'MockCap',
};

describe('Testing component deployment', () => {
  test('Weather Page matches snapshot', () => {
    const tree = render(
      <Provider store={store} props={mockData}>
        <MemoryRouter>
          <CountryCard />
        </MemoryRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
