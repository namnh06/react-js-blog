import {
  USERS_FETCHED,
  USER_DELETED,
  USER_ADDED,
  USER_EDITED,
  USERS_DELETED_FETCHED,
  USER_DELETED_PERMANENTLY,
  USER_DELETED_RESTORED
} from '../../../helpers/constants';
import {
  setDataToArray,
  removeDataFromArrayById,
  addArray,
  updateArray,
  sortDescendingArrayById,
  pushDataToArray
} from '../../../helpers';
import { initUsers } from '../../../helpers/seed-data';

const usersFetched = (state, action) => {
  return {
    ...state,
    current: sortDescendingArrayById(setDataToArray(action.users))
  };
};

const userDeleted = (state, action) => {
  return {
    ...state,
    current: removeDataFromArrayById(state.current, action.data.id),
    deleted: sortDescendingArrayById(
      pushDataToArray(state.deleted, action.data)
    )
  };
};

const usersDeletedFetched = (state, action) => {
  return {
    ...state,
    deleted: sortDescendingArrayById(setDataToArray(action.data))
  };
};

const deletedPermanently = (state, action) => {
  return {
    ...state,
    deleted: removeDataFromArrayById(state.deleted, action.id)
  };
};

const deletedRestored = (state, action) => {
  return {
    ...state,
    current: sortDescendingArrayById(
      pushDataToArray(state.current, action.data)
    ),
    deleted: removeDataFromArrayById(state.deleted, action.data.id)
  };
};

const userAdded = (state, action) => {
  return addArray(state, action.state.user);
};

const userEdited = (state, action) => {
  return updateArray(state, action.state.user);
};

const reducer = (state = initUsers, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      return usersFetched(state, action);
    case USER_DELETED:
      return userDeleted(state, action);
    case USERS_DELETED_FETCHED:
      return usersDeletedFetched(state, action);
    case USER_DELETED_PERMANENTLY:
      return deletedPermanently(state, action);
    case USER_DELETED_RESTORED:
      return deletedRestored(state, action);
    case USER_ADDED:
      return userAdded(state, action);
    case USER_EDITED:
      return userEdited(state, action);
    default:
      return state;
  }
};

export default reducer;
