import React from 'react';
import ReactLazyLoad from 'react-lazyload';
const index = props => {
  const backgroundImage = [
    'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6 ) ),',
    props.url
  ].join(' ');

  return (
    <ReactLazyLoad>
      <div
        className={[
          'carousel-item Carousel__image Carousel__image--height',
          props.active ? 'active' : ''
        ].join(' ')}
        style={{
          backgroundImage: backgroundImage
        }}
      >
        <div className="carousel-caption d-none d-md-block">
          <div className="h1">{props.name}</div>
          <p>{props.caption}</p>
        </div>
      </div>
    </ReactLazyLoad>
  );
};

export default index;
