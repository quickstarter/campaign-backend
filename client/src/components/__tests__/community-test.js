import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Community from '../community.jsx';



//describe what we are testing
describe('Community Component', () => {

  // make our assertion and what we expect to happen
  it('should render without throwing an error', () => {
    expect(shallow(<Community />).find('h1').length).toEqual(1)
  })
})