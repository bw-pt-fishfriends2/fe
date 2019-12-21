import axios from 'axios';

export const axiosWithAuth = () => {

  const token = localStorage.getItem('token');
  
  return axios.create({
    baseURL: //API URL HERE,
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth