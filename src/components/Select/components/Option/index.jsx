import React from 'react';
import { string } from 'prop-types';

class Option extends React.Component {
  render() {
    const { value, text } = this.props;
    return (
      <option value={ value }>{text}</option>
    );
  }
}

Option.propTypes = {
  value: string.isRequired,
  text: string.isRequired,
};

export default Option;
