import React from 'react';

const Image = ({ src, className, alt = '' }) => {
  const responsiveImage = require(`images/${src}?resize`);
  const responsiveImageWebp = require(`images/${src}?resize&format=webp`);

  return (
    <picture>
      <source srcSet={responsiveImageWebp.srcSet} type="image/webp" />
      <img
        srcSet={responsiveImage.srcSet}
        src={responsiveImage.src}
        alt={alt}
        className={`${className} object-cover w-full h-full`}
      />
    </picture>
  );
};

export default Image;
