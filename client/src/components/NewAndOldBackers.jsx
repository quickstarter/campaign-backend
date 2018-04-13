import React, { Component } from 'react';

class NewAndOldBackers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBackers: 1057,
      oldBackers: 2113
    };
  }


  componentWillMount() {

  }


  render() {
    return (
      <div className="NewAndOldBackersContainer">
        <div className="NewAndOldBackersContent">
          <div className="newBackersContainer">
            <div className="subTitle">New Backers</div>
            <div className="backerCount">{`${this.state.newBackers.toLocaleString('en', {useGrouping:true})}`}</div>
            <div className="supText">backers had never backed a project on Kickstarter before</div>
          </div>
          <div className="oldBackersContainer">
            <div className="subTitle">Returning Backers</div>
            <div className="backerCount">{`${this.state.oldBackers.toLocaleString('en', {useGrouping:true})}`}</div>
            <div className="supText">backers had backed a project on Kickstarter before</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewAndOldBackers;