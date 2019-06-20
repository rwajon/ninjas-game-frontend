import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  className,
  onChange,
  placeholder,
  value,
  name,
  autoComplete
}) => (
  <input
    name={name}
    type={type}
    value={value}
    className={className}
    onChange={onChange}
    placeholder={placeholder}
    autoComplete={autoComplete}
  />
);

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

Input.defaultProps = {
  name: '',
  type: 'text',
  className: 'input',
  placeholder: '',
  value: ''
};

export default Input;