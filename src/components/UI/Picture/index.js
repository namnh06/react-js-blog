import React from 'react';

const index = props => {
  return (
    <picture>
      <img
        src={props.imageSrc}
        alt={props.imageAlt}
        width={props.imageWidth}
        height={props.imageHeight}
      />
    </picture>
  );
};

export default index;
