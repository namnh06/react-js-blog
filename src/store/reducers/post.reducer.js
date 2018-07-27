import { POST_FETCHED, POST_CREATED } from '../../helpers/constants';
import { setDataToObject, addDataToArray } from '../../helpers';
import { initPost } from '../../helpers/seed-data';

const postFetched = action => {
  return setDataToObject(action.state.post);
};

const postCreated = (state, action) => {
  return addDataToArray(state, action.state.post);
};

const reducer = (state = initPost, action) => {
  switch (action.type) {
    case POST_FETCHED:
      return postFetched(action);

    case POST_CREATED:
      return postCreated(state, action);
    default:
      return state;
  }
};

export default reducer;
