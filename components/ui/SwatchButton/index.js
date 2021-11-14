import React from 'react';
import swatchStyles from './swatchButton.style';

const SwatchButton = ({ bgColor }) => {
  return (
    <React.Fragment>
      <div className="swatch-btn" style={{ backgroundColor: bgColor }}></div>
      <style jsx>{swatchStyles}</style>
    </React.Fragment>
  );
};

export default SwatchButton;
