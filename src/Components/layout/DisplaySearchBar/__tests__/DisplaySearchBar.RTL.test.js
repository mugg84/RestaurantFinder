import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

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
    const { getByPlaceholderText } = render(wrapper);
    let input = getByPlaceholderText('Where do you want to eat?');

    fireEvent.change(input, {
      target: { value: 'foo' },
    });

    expect(input.value).toBe('foo');
  });

  test('2- input "what" updates its value when input simulated', () => {
    const { getByPlaceholderText } = render(wrapper);
    let input = getByPlaceholderText('What do you want to eat?');

    fireEvent.change(input, {
      target: { value: 'foo' },
    });

    expect(input.value).toBe('foo');
  });

  test('3- if "restaurants" empty btn--clear is not rendered ', () => {
    const { queryByText } = render(wrapper);

    expect(queryByText('Clear')).not.toBeInTheDocument();
  });

  test('4- setAlert called if inputs not empty and form submitted', () => {
    const { getByTestId } = render(wrapper);
    fireEvent.submit(getByTestId('form'));

    expect(value.setAlert).toHaveBeenCalled();
  });

  test('5- getRestaurant called if inputs not empty and form submitted', () => {
    const { getByPlaceholderText, getByTestId } = render(wrapper);

    let inputWhere = getByPlaceholderText('Where do you want to eat?');
    let inputWhat = getByPlaceholderText('What do you want to eat?');

    fireEvent.change(inputWhere, {
      target: { value: 'foo', name: 'where' },
    });

    fireEvent.change(inputWhat, {
      target: { value: 'foo', name: 'what' },
    });

    fireEvent.submit(getByTestId('form'));

    expect(value.getRestaurants).toHaveBeenCalled();
  });

  test('6- if "restaurants" not empty btn--clear click should call "clearSearch"', () => {
    let value = {
      restaurants: ['foo'],
      clearSearch: jest.fn(),
      setAlert: jest.fn(),
    };

    wrapper = (
      <restContext.Provider value={value}>
        <DisplaySearchBar {...props} />
      </restContext.Provider>
    );

    const { getByTestId } = render(wrapper);

    const button = getByTestId('clear');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(value.clearSearch).toHaveBeenCalled();
  });
});
