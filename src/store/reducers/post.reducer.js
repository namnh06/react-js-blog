import { POST_FETCHED } from '../../helpers/constants';
import { setDataToObject } from '../../helpers';
import { initPost } from '../../helpers/seed-data';

const postFetched = action => {
  return setDataToObject(action.state.post);
};

const reducer = (state = initPost, action) => {
  switch (action.type) {
    case POST_FETCHED:
      return postFetched(action);

    default:
      return state;
  }
};

export default reducer;
