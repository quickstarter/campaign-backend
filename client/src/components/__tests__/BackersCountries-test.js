import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import BackersCountries from '../BackersCountries.jsx';


describe('BackersCountries Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<BackersCountries />).find('.BackersCountriesContainer').length).toEqual(1);
  });
});