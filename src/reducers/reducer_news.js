import { LOAD_ALL_NEWS } from '../actions/index';


export default function (state = [], action) {
  switch (action.type) {
    case LOAD_ALL_NEWS:
      return [
        action.payload.data,
        ...state,
      ];
    default:
      return state;
  }
}
