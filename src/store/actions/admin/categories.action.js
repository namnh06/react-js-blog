import {
  CATEGORIES_FETCHED,
  CATEGORY_DELETED,
  SUB_CATEGORY_DELETED,
  CATEGORY_CREATED
} from '../../../helpers/constants';
import axios from '../../../helpers/axios.config';

export const categoriesFetchStart = () => {
  return dispatch => {
    return axios.get('categories').then(response => {
      if (response.data.status === 200) {
        const categories = response.data.data.categories;
        dispatch(categoriesFetch({ categories }));
      }
    });
  };
};

export const categoriesFetch = state => {
  return {
    type: CATEGORIES_FETCHED,
    state
  };
};

export const categoryDeleteStart = id => {
  return dispatch => {
    return axios.delete(`categories/${id}`).then(response => {
      if (response.data.status === 200) {
        dispatch(categoryDeleted(id));
      }
    });
  };
};

export const categoryDeleted = id => {
  return {
    type: CATEGORY_DELETED,
    id
  };
};

export const categoryCreateStart = data => {
  return dispatch => {
    return axios.post('categories', data).then(response => {
      if (response.data.status === 200) {
        const category = response.data.data.category;
        dispatch(categoryCreated(category));
      }
    });
  };
};

export const categoryCreated = category => {
  return {
    type: CATEGORY_CREATED,
    category
  };
};
