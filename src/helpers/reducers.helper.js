import {
  sortDescendingArrayById,
  pushDataToArray,
  removeDataFromArrayById
} from '.';

export const dataCreated = (state, action) => {
  return {
    ...state,
    current: {
      ...state.current,
      data: sortDescendingArrayById(
        pushDataToArray(state.current.data, action.data)
      )
    }
  };
};

export const dataDeleted = (state, action) => {
  return {
    ...state,
    current: {
      ...state.current,
      data: removeDataFromArrayById(state.current.data, action.data.id)
    },
    deleted: {
      ...state.deleted,
      data: sortDescendingArrayById(
        pushDataToArray(state.deleted.data, action.data)
      )
    }
  };
};
