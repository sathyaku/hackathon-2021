import React from 'react';
import Image from 'next/image';
import csStyle from './image.module.scss';

const PodImage = ({ url, name, width, height }) => {
  return (
    <div>
      <Image
        className={csStyle.podImage}
        src={url}
        width={width}
        height={height}
        alt={name}
      />
    </div>
  );
};

export default PodImage;
