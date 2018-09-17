import axios from '../../helpers/axios.config';
export const slidesFetchStart = () => {
  return dispatch => {
    return axios.get('slides').then(response => {
      console.log(response.data.data);
    });
  };
};
