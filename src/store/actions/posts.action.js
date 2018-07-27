import { POSTS_FETCHED, POST_DELETED } from '../../helpers/constants';
import axios from '../../helpers/axios.config';

export const postsFetchStart = () => {
  return dispatch => {
    return axios.get('posts').then(response => {
      if (response.data.status === 200) {
        const posts = response.data.data.posts;
        dispatch(postsFetched({ posts }));
      }
    });
  };
};

export const postsFetched = state => {
  return {
    type: POSTS_FETCHED,
    state
  };
};

export const postDeleteStart = id => {
  return dispatch => {
    return axios.delete(`posts/${id}`).then(response => {
      if (response.data.status === 200) {
        dispatch(postDeleted(id));
      }
    });
  };
};

export const postDeleted = id => {
  return {
    type: POST_DELETED,
    id
  };
};
