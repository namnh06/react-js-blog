import {
  ARTICLE_DELETED,
  ARTICLE_CREATED,
  ARTICLE_FETCH
} from '../../helpers/constants';
import {
  setDataToObject,
  removeDataFromArrayById,
  addDataToArray
} from '../../helpers';
import { initArticle } from '../../helpers/seed-data';

const articleFetch = action => {
  return setDataToObject(action.state.article);
};

const articleDeleted = (state, id) => {
  return removeDataFromArrayById(state, id);
};

const articleCreated = (state, action) => {
  return addDataToArray(state, action.state.article);
};

const reducer = (state = initArticle, action) => {
  switch (action.type) {
    case ARTICLE_FETCH:
      return articleFetch(action);
    case ARTICLE_DELETED:
      return articleDeleted(state, action.id);
    case ARTICLE_CREATED:
      return articleCreated(state, action);
    default:
      return state;
  }
};

export default reducer;
