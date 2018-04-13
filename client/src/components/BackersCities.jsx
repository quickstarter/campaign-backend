import React, { Component } from 'react';

class BackersCities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [{
        name: 'New York City',
        country: 'United States',
        backers: 23
      },{
        name: 'New York City',
        country: 'United States',
        backers: 23
      }, {
        name: 'New York City',
        country: 'United States',
        backers: 23
      }, {
        name: 'New York City',
        country: 'United States',
        backers: 23
      }, {
        name: 'New York City',
        country: 'United States',
        backers: 23
      }, {
        name: 'New York City',
        country: 'United States',
        backers: 23578341
      }, {
        name: 'New York City',
        country: 'United States',
        backers: 23
      }, {
        name: 'New York City',
        country: 'United States',
        backers: 23
      }, {
        name: 'New York City',
        country: 'United States',
        backers: 23
      }, {
        name: 'New York City',
        country: 'United States',
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
      <div className="title titleWithBottomBorder">Top Cities</div>
      <div className="cityDetailsContainer">{
        this.state.cities.slice(0, 10).map((city) => {
          return (
            <div className="cityInlineElement">
              <div className="leftSide">
                <a className="city" href={`https://en.wikipedia.org/wiki/${city.name}`}>{city.name}</a>
                <a className="country" href={`https://en.wikipedia.org/wiki/${city.country}`}>{city.country}</a>
              </div>
              <div className="rightSide">
                <div className="backerCount">{`${city.backers.toLocaleString('en', {useGrouping:true})} backers`}</div>
              </div>
            </div>
          );
        })
      }
      </div>
    </div>
    )
  }
}


export default BackersCities;