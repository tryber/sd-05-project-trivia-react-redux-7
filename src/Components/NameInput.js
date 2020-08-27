import React from 'react';
import PropTypes from 'prop-types';

const NameInput = (props) => {
  const { onChange } = props;
  return (
    <label htmlFor="email">
      Name
      <input name="name" type="text" data-testid="input-palyer-name" onChange={onChange} />
    </label>
  );
};

NameInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default NameInput;
