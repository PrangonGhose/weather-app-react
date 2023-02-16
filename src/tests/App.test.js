import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from '../App';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

describe('Testing component deployment', () => {
  test('App Page matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
