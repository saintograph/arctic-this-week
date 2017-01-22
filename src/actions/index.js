const ROOT_URL = 'http://www.mocky.io/v2/5185415ba171ea3a00704eed';


export const LOAD_ALL_NEWS = 'LOAD_ALL_NEWS';


export function loadAllNews() {
  const request = fetch(ROOT_URL);
  
  return {
    type: LOAD_ALL_NEWS,
    payload: request,
  };
}
