import axios from 'axios';

const url = () => {
  return {
    development: 'http://localhost:6699/api/v1/public'
  };
};

const instance = axios.create({
  baseURL: url().development
});

export default instance;
