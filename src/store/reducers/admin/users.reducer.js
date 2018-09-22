import {
  USERS_FETCHED,
  USER_DELETED,
  USER_CREATED,
  USER_EDITED,
  USERS_DELETED_FETCHED,
  USER_DELETED_PERMANENTLY,
  USER_DELETED_RESTORED
} from '../../../helpers/constants';
import {
  removeDataFromArrayById,
  sortDescendingArrayById,
  pushDataToArray,
  updateDataToArrayById
} from '../../../helpers';
import { initUsers } from '../../../helpers/seed-data';

const fetched = (state, action) => {
  return {
    ...state,
    current: action.users
  };
};

const deleted = (state, action) => {
  return {
    ...state,
    current: {
      ...state.current,
      data: removeDataFromArrayById(state.current.data, action.user.id)
    },
    deleted: {
      ...state.deleted,
      data: sortDescendingArrayById(
        pushDataToArray(state.deleted.data, action.user)
      )
    }
  };
};

const usersDeletedFetched = (state, action) => {
  return {
    ...state,
    deleted: action.users
  };
};

const deletedPermanently = (state, action) => {
  return {
    ...state,
    deleted: {
      ...state.deleted,
      data: removeDataFromArrayById(state.deleted.data, action.user.id)
    }
  };
};

const deletedRestored = (state, action) => {
  return {
    ...state,
    current: {
      ...state.current,
      data: sortDescendingArrayById(pushDataToArray(state.current, action.data))
    },
    deleted: {
      ...state.deleted,
      data: removeDataFromArrayById(state.deleted, action.data.id)
    }
  };
};

const created = (state, action) => {
  return {
    ...state,
    current: {
      ...state.current,
      data: sortDescendingArrayById(
        pushDataToArray(state.current.data, action.user)
      )
    }
  };
};

const updated = (state, action) => {
  return {
    ...state,
    current: {
      ...state.current,
      data: updateDataToArrayById(state.current.data, action.user)
    }
  };
};

const reducer = (state = initUsers, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      return fetched(state, action);
    case USER_DELETED:
      return deleted(state, action);
    case USERS_DELETED_FETCHED:
      return usersDeletedFetched(state, action);
    case USER_DELETED_PERMANENTLY:
      return deletedPermanently(state, action);
    case USER_DELETED_RESTORED:
      return deletedRestored(state, action);
    case USER_CREATED:
      return created(state, action);
    case USER_EDITED:
      return updated(state, action);
    default:
      return state;
  }
};

export default reducer;
