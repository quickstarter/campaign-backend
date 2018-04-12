import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import NewAndOldBackers from '../NewAndOldBackers.jsx';


describe('NewAndOldBackers Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<NewAndOldBackers />).find('.NewAndOldBackersContainer').length).toEqual(1);
  });
});