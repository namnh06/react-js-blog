import {
  ARTICLES_FETCH,
  ARTICLE_DELETED,
  ARTICLE_CREATED
} from '../../helpers/constants';
import axios from '../../helpers/axios.config';

export const articlesFetchStart = () => {
  return dispatch => {
    return axios.get('article').then(response => {
      if (response.data.status === 200) {
        const articles = response.data.data.articles;
        dispatch(articlesFetch({ articles }));
      }
    });
  };
};

export const articlesFetch = state => {
  return {
    type: ARTICLES_FETCH,
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
