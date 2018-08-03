import React from 'react';

const index = props => {
  return (
    <picture>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </picture>
  );
};

export default index;
