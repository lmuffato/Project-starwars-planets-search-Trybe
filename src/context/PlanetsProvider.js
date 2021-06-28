import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

class PlanetsProvider extends Component {
  constructor() {
    super();
    this.state = {
      filters: {},
      planets: '',
    };
    this.getPlanets = this.getPlanets.bind(this);
  }

  async getPlanets() {
    const rawApiData = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const apiData = await rawApiData.json();
    this.setState({ planets: apiData });
  }

  render() {
    const { children } = this.props;
    return (
      <PlanetsContext.Provider
        value={ {
          ...this.state,
          getPlanets: this.getPlanets,
        } }
      >
        { children }
      </PlanetsContext.Provider>
    );
  }
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.symbol]).isRequired,
};

export default PlanetsProvider;
