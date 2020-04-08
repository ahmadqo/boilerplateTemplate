import produce from 'immer';
import { GET_DATA } from './constants';

export const initialState = {
  listData: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_DATA:
        draft.listData = action.listData;
        break;
    }
  });

export default homeReducer;
