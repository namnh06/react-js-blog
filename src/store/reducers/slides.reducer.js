import { initSlides } from '../../helpers/seed-data';
import {
  SLIDE_CREATED,
  SLIDES_FETCHED,
  SLIDES_RAND_FETCHED,
  SLIDE_DELETED,
  SLIDE_UPDATED
} from '../../helpers/constants';
import {
  sortDescendingArrayById,
  pushDataToArray,
  removeDataFromArrayById,
  updateDataToArrayById
} from '../../helpers';

const fetched = (state, action) => {
  return {
    ...state,
    current: action.slides
  };
};
const fetchedRand = (state, action) => {
  return {
    ...state,
    show: action.slides
  };
};

const created = (state, action) => {
  return {
    ...state,
    current: {
      data: sortDescendingArrayById(
        pushDataToArray(state.current.data, action.slide)
      )
    }
  };
};

const deleted = (state, action) => {
  return {
    ...state,
    current: {
      data: removeDataFromArrayById(state.current.data, action.slide.id)
    },
    deleted: sortDescendingArrayById(
      pushDataToArray(state.deleted, action.slide)
    )
  };
};

const updated = (state, action) => {
  return {
    ...state,
    current: {
      data: updateDataToArrayById(state.current.data, action.slide)
    }
  };
};

const reducer = (state = initSlides, action) => {
  switch (action.type) {
    case SLIDES_FETCHED:
      return fetched(state, action);
    case SLIDE_CREATED:
      return created(state, action);
    case SLIDES_RAND_FETCHED:
      return fetchedRand(state, action);
    case SLIDE_DELETED:
      return deleted(state, action);
    case SLIDE_UPDATED:
      return updated(state, action);
    default:
      return state;
  }
};

export default reducer;
