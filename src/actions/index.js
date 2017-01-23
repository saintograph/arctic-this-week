import axios from 'axios';

export const LOAD_ALL_NEWS = 'LOAD_ALL_NEWS';
const ROOT_URL = 'http://app.thearcticinstitute.org/wp-json/wp/v2/posts?per_page=1';

export function loadAllNews() {
  const request = axios.get(ROOT_URL);

  return {
    type: LOAD_ALL_NEWS,
    payload: request,
  };
}
