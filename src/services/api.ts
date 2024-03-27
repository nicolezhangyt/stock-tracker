import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ApiRequest, ApiResponse } from '../types/serviceTypes';

const API_BASE_URL = 'https://simplywall.st/api/grid/filter?include=grid,score';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  sws: 'fe-challenge',
};

export const fetchData = async (
  requestData: ApiRequest,
): Promise<ApiResponse> => {
  try {
    const requestConfig: AxiosRequestConfig = {
      method: 'post',
      url: API_BASE_URL,
      headers,
      data: requestData,
    };

    const response: AxiosResponse<ApiResponse> = await axios(requestConfig);
    return response.data;
  } catch (error) {
    // Handle and rethrow errors
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        // Server responded with a non-2xx status code
        throw new Error(
          `Request failed with status ${axiosError.response.status}`,
        );
      } else if (axiosError.request) {
        // No response received
        throw new Error('No response received from the server');
      } else {
        // Error during request setup
        throw new Error('Error setting up the request');
      }
    } else {
      // Other non-Axios errors
      throw error;
    }
  }
};
