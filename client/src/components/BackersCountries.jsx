import React, { Component } from 'react';

class BackersCountries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [{
        name: 'United States',
        backers: 23
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
      <div className="title">Top Countries</div>
      <div className="topCountriesContainer">
        <div className="countryDetailsContainer">{
          this.state.countries.slice(0, 10).map((country) => {
            return (
              <div className="countryInlineElement">
                <div className="country">{country.name}</div>
                <div className="backerCount">{country.backers}</div>
              </div>
            );
          })
        }
        </div>
      </div>
    </div>
    );
  }
}


export default BackersCountries;