import {
  ARTICLES_FETCH,
  ARTICLE_DELETED,
  ARTICLE_CREATED
} from '../../helpers/constants';
import {
  setDataToArray,
  removeDataFromArrayById,
  addDataToArray
} from '../../helpers';
import { initArticles } from '../../helpers/seed-data';

const articlesFetch = action => {
  return setDataToArray(action.state.articles);
};

const articleDeleted = (state, id) => {
  return removeDataFromArrayById(state, id);
};

const articleCreated = (state, action) => {
  return addDataToArray(state, action.state.article);
};

const reducer = (state = initArticles, action) => {
  switch (action.type) {
    case ARTICLES_FETCH:
      return articlesFetch(action);
    case ARTICLE_DELETED:
      return articleDeleted(state, action.id);
    case ARTICLE_CREATED:
      return articleCreated(state, action);
    default:
      return state;
  }
};

export default reducer;
