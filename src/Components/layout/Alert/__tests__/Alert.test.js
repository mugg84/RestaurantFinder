import React from 'react';
import { mount } from 'enzyme';

import restContext from './../../../context/restaurant/restContext';

import Alert from '../Alert';

describe('Alert', () => {
  test('renders nothing with initial state msg null', () => {
    const alertMount = mount(
      <restContext.Provider value={{ alert: '' }}>
        <Alert />
      </restContext.Provider>
    );

    expect(alertMount.find('.alertText').text()).toBe('');
  });

  test('displays alert message', () => {
    const alertMount = mount(
      <restContext.Provider value={{ alert: { msg: 'foo' } }}>
        <Alert />
      </restContext.Provider>
    );

    expect(alertMount.find('.alertText').text()).toBe('foo');
  });
});
