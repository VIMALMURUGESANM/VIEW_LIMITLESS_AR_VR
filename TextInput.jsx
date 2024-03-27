// TextInput.js
import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="text-input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
