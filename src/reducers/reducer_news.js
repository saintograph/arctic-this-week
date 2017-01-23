import { LOAD_ALL_NEWS } from '../actions';

const initialState = {
  news: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_NEWS:
      return {
        ...state,
        news: action.payload.data,
      };
    default:
      return state;
  }
}
