// src/api/axios.js
import axios from 'axios';
import { CONFIG } from '../config-global';

const axiosInstance = axios.create({
  baseURL: CONFIG.serverUrl,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong!'
    )
);

export default axiosInstance;
