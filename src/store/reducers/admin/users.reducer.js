import {
  USERS_FETCH,
  USER_DELETED,
  USER_ADDED,
  USER_EDITED
} from '../../../helpers/constants';
import { setArray, removeArray, addArray, updateArray } from '../../../helpers';

const users = [];

const usersFetch = (state, action) => {
  return setArray(action.state.users);
};

const userDeleted = (state, id) => {
  return removeArray(state, id);
};

const userAdded = (state, action) => {
  return addArray(state, action.state.user);
};

const userEdited = (state, action) => {
  return updateArray(state, action.state.user);
};

const reducer = (state = users, action) => {
  switch (action.type) {
    case USERS_FETCH:
      return usersFetch(state, action);
    case USER_DELETED:
      return userDeleted(state, action.id);
    case USER_ADDED:
      return userAdded(state, action);
    case USER_EDITED:
      return userEdited(state, action);
    default:
      return state;
  }
};

export default reducer;
