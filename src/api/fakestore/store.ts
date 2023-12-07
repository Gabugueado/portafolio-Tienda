import axios, { CreateAxiosDefaults } from 'axios'



const store = axios.create({
    baseURL: 'https://fakestoreapi.com',
  });


export default store