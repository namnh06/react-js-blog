import { POST_FETCHED } from '../../helpers/constants';
import { setDataToObject, setDataToArray } from '../../helpers';
import { initPost } from '../../helpers/seed-data';

const postFetched = (state, action) => {
  console.log(action);
  return setDataToObject(action.data);
};

const reducer = (state = initPost, action) => {
  switch (action.type) {
    case POST_FETCHED:
      return postFetched(state, action);
    default:
      return state;
  }
};

export default reducer;
