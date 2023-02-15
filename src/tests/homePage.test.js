import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import HomePage from '../pages/homePage';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

describe('Testing page deployment', () => {
  test('Home Page matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
