import {
  USERS_FETCH,
  USER_DELETED,
  USER_ADDED,
  USER_EDITED
} from '../../../helpers/constants';
import axios from '../../../helpers/axios.config';

export const usersFetchStart = () => {
  return dispatch => {
    return axios.get('users').then(response => {
      if (response.data.status === 200) {
        const users = response.data.data.users;
        dispatch(usersFetch({ users }));
      }
    });
  };
};

export const usersFetch = state => {
  return {
    type: USERS_FETCH,
    state
  };
};

export const userDeleteStart = id => {
  return dispatch => {
    return axios.delete(`/users/${id}`).then(response => {
      if (response.data.status === 200) {
        dispatch(userDeleted(id));
      }
    });
  };
};

export const userDeleted = id => {
  return {
    type: USER_DELETED,
    id
  };
};

export const userAddStart = user => {
  return dispatch => {
    return axios.post('/users', user).then(response => {
      if (response.data.status === 200) {
        const user = response.data.data.user;
        dispatch(userAdded({ user }));
      } else {
        return null;
      }
    });
  };
};

export const userAdded = state => {
  return {
    type: USER_ADDED,
    state
  };
};

export const userEditStart = (id, user) => {
  return dispatch => {
    return axios.put(`/users/${id}`, user).then(response => {
      if (response.data.status === 200) {
        const user = response.data.data.user;
        dispatch(userEdited({ user }));
      } else {
        return null;
      }
    });
  };
};

export const userEdited = state => {
  return {
    type: USER_EDITED,
    state
  };
};
