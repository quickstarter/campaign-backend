import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import NewAndOldBackers from '../NewAndOldBackers.jsx';

const fakeBackers = [{
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  fundedProjects: 0,
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  fundedProjects: 3,
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  fundedProjects: 3,
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  fundedProjects: 3,
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  fundedProjects: 3,
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  fundedProjects: 0,
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  fundedProjects: 0,
}, {
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg',
  fundedProjects: 0,
}];

describe('NewAndOldBackers Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<NewAndOldBackers />).find('.NewAndOldBackersContainer').length).toEqual(1);
  });

  it('newBackers + oldBackers should equal the total backers passed in', () => {
    const wrapper = shallow(<NewAndOldBackers backers={fakeBackers} />);
    wrapper.instance().componentDidUpdate();
    wrapper.update();
    expect(wrapper.instance().state.newBackers + wrapper.instance().state.oldBackers).toEqual(fakeBackers.length);
  });
});
