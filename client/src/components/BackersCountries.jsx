import React, { Component } from 'react';

class BackersCountries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }


  componentDidUpdate() {
    let backers = this.props.backers;
    let countries = {};
    let topCountries = [];
    for (var i = 0; i < backers.length; i++) {
      if (countries[backers[i].country]) {
        countries[backers[i].country]++;
      } else {
        countries[backers[i].country] = 1;
      }
    }
    for (var j = 0; j < 10; j++) {
      var country = Object.keys(countries).reduce(function(a, b){ return countries[a] > countries[b] ? a : b});
      topCountries.push({name: country, backers: countries[country]});
      delete countries[country];
    }
    if (this.state.countries !== topCountries) {
      this.setState({
        countries: topCountries
      });
    }
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