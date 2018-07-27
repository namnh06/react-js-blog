import {
  USER_ADDED,
  USER_EDITED,
  CATEGORIES_FETCH,
  CATEGORY_DELETED,
  SUB_CATEGORY_DELETED
} from '../../helpers/constants';
import { setArray, removeArray, addArray, updateArray } from '../../helpers';

const categories = [];

const categoriesFetch = action => {
  return setArray(action.state.categories);
};

const categoryDeleted = (state, id) => {
  return removeArray(state, id);
};

const subCategoryDeleted = (state, id, parentId) => {
  return state.map(category => {
    if (category.id === parentId) {
      return {
        ...category,
        sub_categories: removeArray(category.sub_categories, id)
      };
    }

    return category;
  });
};

const userAdded = (state, action) => {
  return addArray(state, action.state.user);
};

const userEdited = (state, action) => {
  return updateArray(state, action.state.user);
};

const reducer = (state = categories, action) => {
  switch (action.type) {
    case CATEGORIES_FETCH:
      return categoriesFetch(action);
    case CATEGORY_DELETED:
      return categoryDeleted(state, action.id);
    case SUB_CATEGORY_DELETED:
      return subCategoryDeleted(state, action.id, action.parentId);
    case USER_ADDED:
      return userAdded(state, action);
    case USER_EDITED:
      return userEdited(state, action);
    default:
      return state;
  }
};

export default reducer;
