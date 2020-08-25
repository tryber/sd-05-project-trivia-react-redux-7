import React from 'react';
import PropTypes from 'prop-types';

const EmailInput = (props) => {
  const { onChange } = props;
  return (
    <label htmlFor="email">
      Name
      <input name="email" type="text" data-testid="input-gravatar-email" onChange={onChange} />
    </label>
  );
};

EmailInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default EmailInput;
