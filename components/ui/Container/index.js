import React from 'react';
import PropTypes from 'prop-types';
import containerStyles from './container.style';

const ContainerWrap = ({ direction, children }) => {
  return (
    <div className={`container ${direction}`}>
      {children}
      <style jsx>{containerStyles}</style>
    </div>
  );
};

ContainerWrap.defaultProps = {
  direction: ''
};

ContainerWrap.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string
};

export default ContainerWrap;
