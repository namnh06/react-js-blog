import { logoImage } from '.';
import { HOST } from './constants';

export const imageFallBack = images => {
  return !!images[0] ? HOST + images[0].path : logoImage();
};

export const imageBackground = images => {
  console.log(images);
  return {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),url(${HOST +
      images[0].path})`
  };
};
