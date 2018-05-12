import React, { Component } from 'react';
import axios from 'axios';
import TotalBackers from './TotalBackers.jsx';
import BackersCities from './BackersCities.jsx';
import BackersCountries from './BackersCountries.jsx';
import NewAndOldBackers from './NewAndOldBackers.jsx';
import RollCall from './RollCall.jsx';
import styles from '../stylesheets/base.scss';

const CSS = styles.toString();

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.data.project.title,
      creator: props.data.project.creator,
      backers: props.data.backers,
    };
  }

  render() {
    return (
      <div>
        <style type="text/css">{CSS}</style>
        <div className="communityModuleContainer">
          <TotalBackers totalBackers={this.state.backers.length} projectCreator={this.state.creator} />
          <div className="communityLocationDataContainer">
            <BackersCities backers={this.state.backers} />
            <BackersCountries backers={this.state.backers} />
          </div>
          <NewAndOldBackers backers={this.state.backers} />
          <RollCall backers={this.state.backers} projectTitle={this.state.title} />
        </div>
      </div>
    );
  }
}

export default Community;
