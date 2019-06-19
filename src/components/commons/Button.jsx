import React from 'react';
import '../../assets/css/style.scss';

export default ({
  text,
  onClick,
  type,
  disabled,
  className,
  radius,
  bgColor,
  textColor,
  padding
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`${className} ${radius} ${bgColor} ${textColor} ${padding}`}
  >
    {text}
  </button>
);
