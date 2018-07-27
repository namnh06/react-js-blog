import axios from 'axios';
import { DEVELOPMENT_URL_API } from './constants';

const instance = axios.create({
  baseURL: DEVELOPMENT_URL_API
});

export default instance;
