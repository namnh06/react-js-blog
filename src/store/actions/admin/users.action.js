import {
  USERS_FETCHED,
  USER_DELETED,
  USER_CREATED,
  USER_EDITED,
  USERS_DELETED_FETCHED,
  USER_DELETED_PERMANENTLY,
  USER_DELETED_RESTORED
} from '../../../helpers/constants';
import axios from '../../../helpers/axios.config';

export const usersFetchStart = ({ pageNumber = 1 }) => {
  return dispatch => {
    return axios.get(`users?page=${pageNumber}`).then(response => {
      if (response.data.status === 200) {
        const users = response.data.data.users;

        dispatch(usersFetched(users));
      }
    });
  };
};

export const usersLinkFetchStart = link => {
  return dispatch => {
    return axios.get(link).then(response => {
      const users = response.data.data.users;
      dispatch(usersFetched(users));
    });
  };
};

export const usersFetched = users => {
  return {
    type: USERS_FETCHED,
    users
  };
};

export const usersDeletedFetchStart = () => {
  return dispatch => {
    return axios.get('users-deleted').then(response => {
      if (response.data.status === 200) {
        const users = response.data.data.users;
        dispatch(usersDeletedFetched(users));
      }
    });
  };
};

export const usersDeletedFetched = users => {
  return {
    type: USERS_DELETED_FETCHED,
    users
  };
};

export const userDeleteStart = id => {
  return dispatch => {
    return axios.delete(`/users/${id}`).then(response => {
      if (response.data.status === 200) {
        const user = response.data.data.user;
        dispatch(userDeleted(user));
      }
    });
  };
};

export const userDeleted = user => {
  return {
    type: USER_DELETED,
    user
  };
};

export const userDeletePermanentlyStart = id => {
  return dispatch => {
    return axios.delete(`users-deleted/${id}`).then(response => {
      if (response.data.status === 200) {
        const user = response.data.data.user;
        dispatch(userDeletedPermanently(user));
      }
    });
  };
};

export const userDeletedPermanently = user => {
  return {
    type: USER_DELETED_PERMANENTLY,
    user
  };
};

export const userDeletedRestoreStart = id => {
  return dispatch => {
    return axios.put(`users-deleted/${id}`).then(response => {
      if (response.data.status === 200) {
        const { user } = response.data.data;
        dispatch(userDeletedRestored(user));
      }
    });
  };
};

export const userDeletedRestored = user => {
  return {
    type: USER_DELETED_RESTORED,
    user
  };
};

export const userCreateStart = user => {
  return dispatch => {
    return axios.post('/users', user).then(response => {
      if (response.data.status === 200) {
        const user = response.data.data.user;

        dispatch(userCreated(user));
      }
      return null;
    });
  };
};

export const userCreated = user => {
  return {
    type: USER_CREATED,
    user
  };
};

export const userEditStart = (id, user) => {
  return dispatch => {
    return axios.put(`/users/${id}`, user).then(response => {
      if (response.data.status === 200) {
        const user = response.data.data.user;
        dispatch(userEdited(user));
      }
      return null;
    });
  };
};

export const userEdited = user => {
  return {
    type: USER_EDITED,
    user
  };
};
