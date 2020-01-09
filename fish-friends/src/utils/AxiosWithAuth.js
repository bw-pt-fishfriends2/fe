import axios from 'axios';

export const axiosWithAuth = () => {

  const token = localStorage.getItem('token');
  console.log(token)
  
  return axios.create({
    baseURL: 'https://fish-friends.herokuapp.com/',
    headers: {
      authorization: token
    }
  })
};

export default axiosWithAuth