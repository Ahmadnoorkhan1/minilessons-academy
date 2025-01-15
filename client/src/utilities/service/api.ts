import axios from 'axios';
import { toast } from 'react-hot-toast';

// Create an axios instance
const baseURL = 'http://localhost:5002/'; // Default to localhost if the environment variable is not set
const api = axios.create({
  baseURL: baseURL + 'api/', // Replace with your API base URL
  timeout: 10000, // Optional: Set a timeout for requests
});

// Axios Request Interceptor (Optional)
api.interceptors.request.use(
  (config) => {
    // Add Authorization Token to headers if needed
    const token = localStorage.getItem('authToken'); // Replace with your token logic
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Create API call functions for each method
const apiService = {
  get: async (url:string, params:any) => {
    const toastId = toast.loading('Loading data...'); // Show loading toast
    try {
      const response:any = await api.get(url, { params });
      toast.success(response.message, { id: toastId });
      return response.data;
    } catch (error:any) {
      toast.error(error.response.data.message, { id: toastId });
      throw error; // Re-throw the error for further handling
    }
  },

  post: async (url:string, data:any) => {
    const toastId = toast.loading('Submitting data...'); // Show loading toast
    try {
      const response:any = await api.post(url, data);
      toast.success(response.data.message, { id: toastId });
      return response.data;
    } catch (error:any) {
      toast.error(error?.response?.data?.message, { id: toastId });
      throw error;
    }
  },

  put: async (url:string, data:any) => {
    const toastId = toast.loading('Updating data...'); // Show loading toast
    try {
      const response:any = await api.put(url, data);
      toast.success(response?.data.message, { id: toastId });
      return response.data;
    } catch (error:any) {
      toast.error(error.response.data.message, { id: toastId });
      throw error;
    }
  },

  delete: async (url:string) => {
    const toastId = toast.loading('Deleting data...'); // Show loading toast
    try {
      const response = await api.delete(url);
      toast.success('Data deleted successfully!', { id: toastId });
      return response.data;
    } catch (error) {
      toast.error('Error deleting data', { id: toastId });
      throw error;
    }
  },
};

export default apiService;
