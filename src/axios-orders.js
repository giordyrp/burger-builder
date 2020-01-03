import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-4a36a.firebaseio.com/'
});

export default instance;