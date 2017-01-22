import { combineReducers } from 'redux';
import NewsReducer from './reducer_news';

const rootReducer = combineReducers({
  news: NewsReducer,
});

export default rootReducer;

