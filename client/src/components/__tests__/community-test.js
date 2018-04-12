import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Community from '../Community.jsx';



//describe what we are testing
describe('Community Component', () => {

  // make our assertion and what we expect to happen
  it('should render without throwing an error', () => {
    expect(shallow(<Community />).find('.communityModuleContainer').length).toEqual(1);
  });
});


