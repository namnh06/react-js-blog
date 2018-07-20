import axios from 'axios';

const url = () => {
  return {
    development: 'http://192.168.1.70:6699/api/v1/public'
  };
};

const instance = axios.create({
  baseURL: url().development
});

export default instance;
