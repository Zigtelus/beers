import axios, { AxiosInstance } from "axios";


const REQUEST_TIMEOUT: number = 1000;
const BASE_URL: string = 'https://api.punkapi.com/v2';


export const dataBeers = {
  name: '',
  beersFive: '',
} as {name: string; beersFive: string};


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
      baseURL: BASE_URL,
      timeout: REQUEST_TIMEOUT,
  })

  return api;
};