import { GET_DATA } from './constants';

export function getData(listData) {
  return {
    type: GET_DATA,
    listData,
  };
}
