import axios from 'axios';
import {Alert} from 'react-native';

const api = axios.create({
  baseURL: 'http://ergast.com/api/f1',
  timeout: 10000,
});

api.interceptors.request.use(config => {
  const newConfig = {
    ...config,
    url: config.url + '.json',
  };
  return newConfig;
});

api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error?.response?.status === 500) {
      Alert.alert('Server error');
    } else {
      Alert.alert('Unexpected error' + JSON.stringify(error));
    }
    return Promise.reject(error);
  },
);

export default api;
