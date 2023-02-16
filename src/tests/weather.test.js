import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Weather from '../components/weather';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

describe('Testing component deployment', () => {
  test('Weather Page matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <MemoryRouter>
          <Weather />
        </MemoryRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
