import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

class PlanetsProvider extends Component {
  constructor() {
    super();
    this.state = {
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
      filteredPlanets: undefined,
      planets: '',
      wasFiltered: false,
    };
    this.getPlanets = this.getPlanets.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.submitFilters = this.submitFilters.bind(this);
    this.toggleWasFiltered = this.toggleWasFiltered.bind(this);
    this.filterByValue = this.filterByValue.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  async getPlanets() {
    const rawApiData = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const apiData = await rawApiData.json();
    this.setState({ planets: apiData.results, filteredPlanets: apiData.results });
  }

  submitFilters() {
    let { filteredPlanets } = this.state;
    const { filters: { filterByName, filterByNumericValues }, planets } = this.state;
    filteredPlanets = planets
      .filter((planet) => planet.name
        .toLowerCase().includes(filterByName.name
          .toLowerCase()));
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((filter) => {
        const { value, column } = filter;
        if (filteredPlanets) {
          switch (filter.comparison) {
          case 'maior que':
            filteredPlanets = filteredPlanets
              .filter((planet) => Number(planet[column]) > Number(value));
            break;
          case 'menor que':
            filteredPlanets = filteredPlanets
              .filter((planet) => Number(planet[column]) < Number(value));
            break;
          case 'igual a':
            filteredPlanets = filteredPlanets
              .filter((fplanet) => Number(fplanet[column]) === Number(value));
            break;
          default:
            break;
          }
        }
      });
    }
    this.setState({ filteredPlanets }, () => this.toggleWasFiltered());
  }

  clearFilters(column) {
    const { filters, filters: { filterByNumericValues } } = this.state;
    const filterToClear = filterByNumericValues
      .filter((filter) => filter.column === column).shift();
    const index = filterByNumericValues.indexOf(filterToClear);
    filterByNumericValues.splice(index, 1);
    this.setState({
      filters: { ...filters, filterByNumericValues },
    }, this.submitFilters());
  }

  filterByName(e) {
    const { filters } = this.state;
    if (e !== '' && e !== undefined) {
      this.setState({ filters: { ...filters, filterByName: { name: e.target.value } } },
        () => this.submitFilters());
    } else {
      this.setState({ filters: { ...filters, filterByName: { name: '' } } });
    }
  }

  filterByValue(values) {
    const { filters, filters: { filterByNumericValues } } = this.state;
    const repeatCondition = filterByNumericValues
      .some((filter) => filter.column === values.column);
    if (repeatCondition) {
      const repeated = filterByNumericValues
        .filter((filter) => filter.column === values.column).shift();
      repeated.comparison = values.comparison;
      repeated.value = values.value;
    } else {
      filterByNumericValues.push(values);
    }
    this.setState({
      filters: { ...filters, filterByNumericValues } }, () => this.submitFilters());
  }

  toggleWasFiltered() {
    const { filters: { filterByName, filterByNumericValues } } = this.state;
    if (filterByName.name === '' && filterByNumericValues.length === 0) {
      this.setState({ wasFiltered: false });
    } else {
      this.setState({ wasFiltered: true });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <PlanetsContext.Provider
        value={ {
          ...this.state,
          getPlanets: this.getPlanets,
          filterByName: this.filterByName,
          submitFilters: this.submitFilters,
          toggleWasFiltered: this.toggleWasFiltered,
          filterByValue: this.filterByValue,
          clearFilters: this.clearFilters,
        } }
      >
        { children }
      </PlanetsContext.Provider>
    );
  }
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
