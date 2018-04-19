import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import BackersCountries from '../BackersCountries.jsx';

const fakeBackers = [{
  name: 'Cameron Fielder',
  country: 'New York',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  country: 'Los Angeles',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  country: 'San Francisco',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  country: 'St. Loius',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  country: 'Miami',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  country: 'London',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  country: 'Beijing',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}, {
  name: 'Cameron Fielder',
  country: 'Amsterdam',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
},
{
  name: 'Cameron Fielder',
  country: 'Copenhagen',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
},
{
  name: 'Cameron Fielder',
  country: 'Atlanta',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
},
{
  name: 'Cameron Fielder',
  country: 'Toronto',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  projectsBacked: 3,
}];

describe('BackersCountries Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<BackersCountries />).find('.BackersCountriesContainer').length).toEqual(1);
  });

  it('should contain an array of no more than 10 countries in countriesArray in component state', () => {
    const wrapper = shallow(<BackersCountries backers={fakeBackers} />);
    wrapper.instance().componentDidUpdate();
    wrapper.update();
    expect(wrapper.instance().state.countries.length <= 10).toEqual(true);
  });
});
