import axios from '../../helpers/axios.config';
import {
  SLIDE_CREATED,
  SLIDES_FETCHED,
  SLIDES_RAND_FETCHED,
  SLIDE_DELETED,
  SLIDE_UPDATED
} from '../../helpers/constants';
export const slidesFetchStart = () => {
  return dispatch => {
    return axios.get('slides').then(response => {
      if (response.data.status === 200) {
        const slides = response.data.data.slides;
        return dispatch(slidesFetched(slides));
      }

      return null;
    });
  };
};

export const slidesFetched = slides => {
  return {
    type: SLIDES_FETCHED,
    slides
  };
};

export const slidesRandFetchStart = () => {
  return dispatch => {
    return axios.get('slides-rand').then(response => {
      if (response.data.status === 200) {
        const slides = response.data.data.slides;
        return dispatch(slidesRandFetched(slides));
      }
      return null;
    });
  };
};

export const slidesRandFetched = slides => {
  return {
    type: SLIDES_RAND_FETCHED,
    slides
  };
};

export const slideCreateStart = slide => {
  return dispatch => {
    return axios.post('/slides', slide).then(response => {
      if (response.data.status === 200) {
        const slide = response.data.data.slide;
        return dispatch(slideCreated(slide));
      }
      return null;
    });
  };
};

export const slideCreated = slide => {
  return {
    type: SLIDE_CREATED,
    slide
  };
};

export const slideDeleteStart = id => {
  return dispatch => {
    return axios.delete(`slides/${id}`).then(response => {
      if (response.data.status === 200) {
        const slide = response.data.data.slide;
        dispatch(slideDeleted(slide));
      }
    });
  };
};

export const slideDeleted = slide => {
  return {
    type: SLIDE_DELETED,
    slide
  };
};

export const slideUpdateStart = (id, data) => {
  return dispatch => {
    return axios.post(`slides/${id}`, data).then(response => {
      if (response.data.status === 200) {
        const slide = response.data.data.slide;
        dispatch(updated(slide));
      }
    });
  };
};

export const updated = slide => {
  return {
    type: SLIDE_UPDATED,
    slide
  };
};
