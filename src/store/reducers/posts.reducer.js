import {
  POSTS_FETCHED,
  POST_DELETED,
  POST_CREATED
} from '../../helpers/constants';
import {
  setDataToArray,
  removeDataFromArrayById,
  addDataToArray
} from '../../helpers';
import { initPosts } from '../../helpers/seed-data';

const postsFetched = action => {
  return setDataToArray(action.state.posts);
};

const articleDeleted = (state, id) => {
  return removeDataFromArrayById(state, id);
};

const articleCreated = (state, action) => {
  return addDataToArray(state, action.state.article);
};

const reducer = (state = initPosts, action) => {
  switch (action.type) {
    case POSTS_FETCHED:
      return postsFetched(action);
    case POST_DELETED:
      return articleDeleted(state, action.id);
    case POST_CREATED:
      return articleCreated(state, action);
    default:
      return state;
  }
};

export default reducer;
