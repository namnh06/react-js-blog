import {
  CATEGORY_DELETED,
  CATEGORIES_FETCHED,
  CATEGORY_CREATED,
  CATEGORIES_DELETED_FETCHED,
  CATEGORY_DELETED_PERMANENTLY,
  CATEGORY_DELETED_RESTORED,
  CATEGORY_EDITED
} from '../../../helpers/constants';
import {
  setDataToArray,
  pushDataToArray,
  removeDataFromArrayById,
  updateDataToArrayById,
  sortDescendingArrayById
} from '../../../helpers';
import { initCategories } from '../../../helpers/seed-data';

const fetched = (state, action) => {
  return { ...state, current: action.categories };
};

const categoriesDeletedFetched = (state, action) => {
  return { ...state, deleted: setDataToArray(action.categories) };
};

const deleted = (state, action) => {
  return {
    ...state,
    current: {
      ...state.current,
      data: removeDataFromArrayById(state.current.data, action.category.id)
    },
    deleted: {
      ...state.deleted,
      data: sortDescendingArrayById(
        pushDataToArray(state.deleted.data, action.category)
      )
    }
  };
};

const categoryDeletedPermanently = (state, action) => {
  return {
    ...state,
    deleted: removeDataFromArrayById(state.deleted, action.id)
  };
};

const categoryDeletedRestored = (state, action) => {
  return {
    ...state,
    current: pushDataToArray(state.current, action.category),
    deleted: removeDataFromArrayById(state.deleted, action.category.id)
  };
};

const created = (state, action) => {
  return {
    ...state,
    current: {
      ...state.current,
      data: sortDescendingArrayById(
        pushDataToArray(state.current.data, action.category)
      )
    }
  };
};

const updated = (state, action) => {
  return {
    ...state,
    current: {
      ...state.current,
      data: updateDataToArrayById(state.current.data, action.category)
    }
  };
};

const reducer = (state = initCategories, action) => {
  switch (action.type) {
    case CATEGORIES_FETCHED:
      return fetched(state, action);
    case CATEGORIES_DELETED_FETCHED:
      return categoriesDeletedFetched(state, action);
    case CATEGORY_DELETED:
      return deleted(state, action);
    case CATEGORY_DELETED_PERMANENTLY:
      return categoryDeletedPermanently(state, action);
    case CATEGORY_DELETED_RESTORED:
      return categoryDeletedRestored(state, action);
    case CATEGORY_CREATED:
      return created(state, action);
    case CATEGORY_EDITED:
      return updated(state, action);

    default:
      return state;
  }
};

export default reducer;
