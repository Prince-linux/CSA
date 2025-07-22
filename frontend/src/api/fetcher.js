// src/api/fetcher.js
import axiosInstance from './axios';

export const fetcher = async (args) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];
    const res = await axiosInstance.get(url, config);
    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};
