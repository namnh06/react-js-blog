import {
  ARTICLE_FETCH,
  ARTICLE_DELETED,
  ARTICLE_CREATED
} from '../../helpers/constants';
import axios from '../../helpers/axios.config';

export const articleFetchStart = slug => {
  return dispatch => {
    return axios.get(`article/${slug}`).then(response => {
      if (response.data.status === 200) {
        const article = response.data.data.article;
        dispatch(articleFetch({ article }));
      }
    });
  };
};

export const articleFetch = state => {
  return {
    type: ARTICLE_FETCH,
    state
  };
};

export const articleDeleteStart = id => {
  return dispatch => {
    return axios.delete(`article/${id}`).then(response => {
      if (response.data.status === 200) {
        dispatch(articleDeleted(id));
      }
    });
  };
};

export const articleDeleted = id => {
  return {
    type: ARTICLE_DELETED,
    id
  };
};

export const articleCreateStart = article => {
  return dispatch => {
    return axios.post('article', article).then(response => {
      if (response.data.status === 200) {
        const article = response.data.data.article;
        dispatch(articleCreated({ article }));
      } else {
        return null;
      }
    });
  };
};

export const articleCreated = state => {
  return {
    type: ARTICLE_CREATED,
    state
  };
};
