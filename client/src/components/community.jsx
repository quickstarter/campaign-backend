import React, { Component } from 'react';
import TotalBackers from './TotalBackers.jsx';
import BackersCities from './BackersCities.jsx';
import BackersCountries from './BackersCountries.jsx';
import NewAndOldBackers from './NewAndOldBackers.jsx';
import RollCall from './RollCall.jsx';


var fakeBackers = [{
  name: 'Cameron Fielder',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/tjisousa/128.jpg',
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

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      creator: null,
      backers: null
    }
  }



  render() {
    return (
      <div className="communityModuleContainer">
        <TotalBackers totalBackers={367} projectCreator={'notAirBnB'} />
        <div className="communityLocationDataContainer">
          <BackersCities />
          <BackersCountries />
        </div>
        <NewAndOldBackers />
        <RollCall backers={fakeBackers} projectTitle='Real Fake Doors'/>
      </div>
    );
  }
}

export default Community;