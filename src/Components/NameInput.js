import React from 'react';

const NameInput = (props) => {
  const { onChange } = props;
  return (
    <label htmlFor="email">
      Name
      <input
        name="name"
        type="text"
        data-testid="input-palyer-name"
        onChange={onChange}
      />
    </label>
  );
};

export default NameInput;