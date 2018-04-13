import React, { Component } from 'react';

class BackersCountries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [{
        name: 'United States',
        backers: 2456
      },{
        name: 'United States',
        backers: 23
      }, {
        name: 'United States',
        backers: 23
      }, {
        name: 'United States',
        backers: 23
      }, {
        name: 'United States',
        backers: 23
      }, {
        name: 'United States',
        backers: 23
      }, {
        name: 'United States',
        backers: 23
      }, {
        name: 'United States',
        backers: 23
      }, {
        name: 'United States',
        backers: 23
      }, {
        name: 'United States',
        backers: 23
      }]
    };
  }


  componentWillMount() {

  }


  render() {
    return (
    <div className="BackersCountriesContainer">
      <div className="title">Where Backers Come From</div>
      <div className="title titleWithBottomBorder">Top Countries</div>
      <div className="countryDetailsContainer">{
        this.state.countries.slice(0, 10).map((country) => {
          return (
            <div className="countryInlineElement">
              <div className="leftSide">
                <a className="country" href={`https://en.wikipedia.org/wiki/${country.name}`}>{country.name}</a>
              </div>
              <div className="rightSide">
                <div className="backerCount">{`${country.backers.toLocaleString('en', {useGrouping:true})} backers`}</div>
              </div>
            </div>
          );
        })
      }
      </div>
    </div>
    );
  }
}


export default BackersCountries;