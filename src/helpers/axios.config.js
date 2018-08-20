import axios from 'axios';
import { URL } from './constants';

const instance = axios.create({
  baseURL: URL
});

export default instance;
