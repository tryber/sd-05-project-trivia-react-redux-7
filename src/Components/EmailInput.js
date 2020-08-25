import React from 'react';

const EmailInput = (props) => {
  const { onChange } = props;
  return (
    <label htmlFor="email">
      Name
      <input
        name="email"
        type="text"
        data-testid="input-gravatar-email"
        onChange={onChange}
      />
    </label>
  );
};

export default EmailInput;
