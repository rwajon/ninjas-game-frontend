import React from 'react';

const Input = props => {
  const {
    name,
    type,
    value,
    textSize,
    inputWidth,
    inputOpacity,
    className
  } = props;

  return (
    <div className="input-field">
      <input
        name={name}
        type={type}
        value={value}
        className={`${className} ${textSize} ${inputWidth} ${inputOpacity}`}
      />
    </div>
  );
};
export default Input;
