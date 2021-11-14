import React from 'react';
import inputStyles from './input.style';

const FormInput = ({ onChangeHandler, value, name, id, type, label }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        className="form-input"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
      <style jsx>{inputStyles}</style>
    </React.Fragment>
  );
};

export default FormInput;
