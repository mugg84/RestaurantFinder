import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';

import { restContext } from './../../../context/restaurant/restContext';
import DisplaySearchBar from '../../../layout/DisplaySearchBar/DisplaySearchBar';

jest.mock('../../Alert/Alert', () => ({
  default: () => null,
  __esModule: true,
}));

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

afterEach(cleanup);

describe('Search', () => {
  test('1- input "where" updates its value when input simulated', () => {
    render(wrapper);
    let input = screen.getByPlaceholderText('Where do you want to eat?');

    fireEvent.change(input, {
      target: { value: 'foo', name: 'where' },
    });

    expect(input.value).toBe('foo');
  });

  test('2- input "what" updates its value when input simulated', () => {
    render(wrapper);
    let input = screen.getByPlaceholderText('What do you want to eat?');

    fireEvent.change(input, {
      target: { value: 'foo', name: 'what' },
    });

    expect(input.value).toBe('foo');
  });

  test('3- if "restaurants" empty ClearButton is not rendered ', () => {
    render(wrapper);

    expect(screen.queryGetByText('Clear')).toBeFalsy();
  });
});
