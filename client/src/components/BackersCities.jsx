import React, { Component } from 'react';

class BackersCities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [{
        name: 'New York City',
        backers: 23
      },{
        name: 'New York City',
        backers: 23
      }, {
        name: 'New York City',
        backers: 23
      }, {
        name: 'New York City',
        backers: 23
      }, {
        name: 'New York City',
        backers: 23
      }, {
        name: 'New York City',
        backers: 23
      }, {
        name: 'New York City',
        backers: 23
      }, {
        name: 'New York City',
        backers: 23
      }, {
        name: 'New York City',
        backers: 23
      }, {
        name: 'New York City',
        backers: 23
      }]
    };
  }

  componentWillMount() {

  }



  render() {
    return (
    <div className="BackersCitiesContainer">
      <div className="title">Where Backers Come From</div>
      <div className="title">Top Cities</div>
      <div className="topCitiesContainer">
        <div className="cityDetailsContainer">{
          this.state.cities.slice(0, 10).map((city) => {
            return (
              <div className="cityInlineElement">
                <div className="city">{city.name}</div>
                <div className="country">{city.country}</div>
                <div className="backerCount">{city.backers}</div>
              </div>
            );
          })
        }
        </div>
      </div>
    </div>
    )
  }
}


export default BackersCities;