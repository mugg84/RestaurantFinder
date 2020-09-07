import React from 'react';
import { render } from '@testing-library/react';
import restContext from '../Components/context/restaurant/restContext';

let value = {
  restaurants: [],
  getRestaurants: jest.fn(),
  setAlert: jest.fn(),
};

const Provider = ({ component }) => (
  <restContext.Provider value={value}>{component}</restContext.Provider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: Provider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
