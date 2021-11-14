import React from 'react';
import PropTypes from 'prop-types';
import buttonStyles from './button.style';
const noop = () => {};

const Button = ({ onClick, label, size, id, strech }) => {
  return (
    <button
      className={`button ${size} strech-${strech}`}
      type="button"
      onClick={onClick}
      id={id}
    >
      {label}
      <style jsx>{buttonStyles}</style>
    </button>
  );
};

Button.defaultProps = {
  onClick: noop,
  size: 'small',
  strech: 'auto',
  id: ''
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  strech: PropTypes.oneOf(['full', 'half', 'auto']),
  width: PropTypes.string,
  id: PropTypes.string
};

export default Button;
