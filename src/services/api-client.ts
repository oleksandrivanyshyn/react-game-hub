import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: { key: 'd9a3acae7928485490af35ae3e55f33e' },
});
