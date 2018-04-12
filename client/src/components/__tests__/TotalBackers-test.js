import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import TotalBackers from '../TotalBackers.jsx';


describe('TotalBackers Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<TotalBackers />).find('.TotalBackersContainer').length).toEqual(1);
  });
});