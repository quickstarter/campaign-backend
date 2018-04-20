import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import RollCall from '../RollCall.jsx';

const fakeBackers = [{
  name: 'Cameron Fielder',
  city: 'New York',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  city: 'Los Angeles',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  city: 'San Francisco',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  city: 'St. Loius',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  city: 'Miami',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  city: 'London',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  city: 'Beijing',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  city: 'Amsterdam',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
},
{
  name: 'Cameron Fielder',
  city: 'Copenhagen',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
},
{
  name: 'Cameron Fielder',
  city: 'Atlanta',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
},
{
  name: 'Cameron Fielder',
  city: 'Toronto',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}];

describe('RollCall Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<RollCall backers={fakeBackers} />).find('.RollCallContainer').length).toEqual(1);
  });
});
