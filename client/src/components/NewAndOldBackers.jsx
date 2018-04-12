import React, { Component } from 'react';

class NewAndOldBackers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBackers: 57,
      oldBackers: 213
    };
  }


  componentWillMount() {

  }


  render() {
    return (
      <div className="NewAndOldBackersContainer">
        <div className="newBackersContainer">
          <div className="subTitle">New Backers</div>
          <div className="backerCount">{this.state.newBackers}</div>
          <div className="supText">backers had never backed a project on Kickstarter before</div>
        </div>
        <div className="oldBackersContainer">
          <div className="subTitle">Returning Backers</div>
          <div className="backerCount">{this.state.oldBackers}</div>
          <div className="supText">backers had backed a project on Kickstarter before</div>
        </div>
      </div>
    );
  }
}

export default NewAndOldBackers;