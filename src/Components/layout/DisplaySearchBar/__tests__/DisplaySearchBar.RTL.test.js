import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';

import { restContext } from './../../../context/restaurant/restContext';
import DisplaySearchBar from '../../../layout/DisplaySearchBar/DisplaySearchBar';

jest.mock('../../Alert/Alert', () => ({
  default: () => null,
  __esModule: true,
}));

afterEach(cleanup);

const props = {
  handleScriptLoad: jest.fn(),
};
let value = {
  restaurants: [],
  getRestaurants: jest.fn(),
  setAlert: jest.fn(),
};

let wrapper = (
  <restContext.Provider value={value}>
    <DisplaySearchBar {...props} />
  </restContext.Provider>
);

describe('Search', () => {
  test('1- input "where" updates its value when input simulated', () => {
    render(wrapper);
    let input = screen.getByPlaceholderText('What do you want to eat?');

    fireEvent.change(input, {
      target: { value: 'foo', name: 'where' },
    });

    screen.debug();

    expect(input.value).toBe('foo');
  });
});
