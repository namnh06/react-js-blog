import axios from 'axios';
import { PRODUCT_API_URL } from './constants';

const instance = axios.create({
  baseURL: PRODUCT_API_URL
});

export default instance;
