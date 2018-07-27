import { POST_FETCHED, POST_CREATED } from '../../helpers/constants';
import axios from '../../helpers/axios.config';

export const postFetchStart = slug => {
  return dispatch => {
    return axios.get(`posts/${slug}`).then(response => {
      if (response.data.status === 200) {
        const post = response.data.data.post;
        dispatch(postFetch({ post }));
      }
    });
  };
};

export const postFetch = state => {
  return {
    type: POST_FETCHED,
    state
  };
};

export const postCreateStart = post => {
  return dispatch => {
    return axios.post('posts', post).then(response => {
      if (response.data.status === 200) {
        const post = response.data.data.post;
        dispatch(postCreated({ post }));
      } else {
        return null;
      }
    });
  };
};

export const postCreated = state => {
  return {
    type: POST_CREATED,
    state
  };
};
