import axios from 'axios';
import { DEVELOPMENT_API_URL } from './constants';

const instance = axios.create({
  baseURL: DEVELOPMENT_API_URL
});

export default instance;
