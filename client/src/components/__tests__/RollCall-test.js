import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import RollCall from '../RollCall.jsx';

var fakeBackers = [{
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3
}];

describe('RollCall Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<RollCall backers={fakeBackers}/>).find('.RollCallContainer').length).toEqual(1);
  });
});