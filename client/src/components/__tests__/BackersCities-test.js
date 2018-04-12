import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import BackersCities from '../BackersCities.jsx';


describe('BackersCities Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<BackersCities />).find('.BackersCitiesContainer').length).toEqual(1);
  });
});