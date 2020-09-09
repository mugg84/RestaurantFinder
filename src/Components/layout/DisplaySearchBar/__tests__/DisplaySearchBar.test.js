import React from 'react';
import { mount } from 'enzyme';

import { restContext } from './../../../context/restaurant/restContext';
import DisplaySearchBar from '../../../layout/DisplaySearchBar/DisplaySearchBar';

jest.mock('../../Alert/Alert', () => ({
  default: () => null,
  __esModule: true,
}));

const props = {
  handleScriptLoad: jest.fn(),
};

let wrapper;
let value = {
  restaurants: [],
  getRestaurants: jest.fn(),
  setAlert: jest.fn(),
};
wrapper = mount(
  <restContext.Provider value={value}>
    <DisplaySearchBar {...props} />
  </restContext.Provider>
);

describe('Search', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('1- input "where" updates its value when input simulated', () => {
    wrapper.find('[name="where"]').simulate('change', {
      target: { value: 'foo', name: 'where' },
    });

    expect(wrapper.find('[name="where"]').prop('value')).toBe('foo');
  });

  test('2- input "what" updates its value when input simulated', () => {
    const what = wrapper.find('[name="what"]');

    what.simulate('change', {
      target: { value: 'foo', name: 'what' },
    });

    wrapper.find('[name="what"]').simulate('change', {
      target: { value: 'foo', name: 'what' },
    });

    expect(wrapper.find('[name="what"]').prop('value')).toBe('foo');
  });

  test('3- if "restaurants" empty ClearButton is not rendered ', () => {
    const clear = wrapper.find('[data-testid="clear"]');

    expect(clear.length).toBe(0);
  });

  test('4- getRestaurant called if inputs not empty and form submitted', () => {
    wrapper.find('form').simulate('submit');

    expect(value.getRestaurants).toHaveBeenCalled();
  });

  test('5 - setAlert called if no imput and search button pressed', () => {
    wrapper.find('[name="what"]').simulate('change', {
      target: { value: '', name: 'what' },
    });
    wrapper.find('[name="where"]').simulate('change', {
      target: { value: '', name: 'where' },
    });

    wrapper.find('form').simulate('submit');

    expect(value.setAlert).toHaveBeenCalled();
  });

  test('6- if "restaurants" not empty ClearButton click should call "clearSearch"', () => {
    let value = {
      restaurants: ['foo'],
      clearSearch: jest.fn(),
    };

    wrapper = mount(
      <restContext.Provider value={value}>
        <DisplaySearchBar {...props} />
      </restContext.Provider>
    );

    const clear = wrapper.find('[data-testid="clear"]');
    clear.simulate('click');

    expect(value.clearSearch).toHaveBeenCalled();
  });
});
