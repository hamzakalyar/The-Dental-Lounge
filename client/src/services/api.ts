import axios, { AxiosError, AxiosInstance } from 'axios';
import { API_BASE_URL } from '@/utils/constants';
import type { ApiResponse } from '@/types/api.types';

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError<ApiResponse<unknown>>) => {
        if (error.response) {
          // Server responded with error
          const message = error.response.data?.message || 'An error occurred';
          throw new Error(message);
        } else if (error.request) {
          // Request made but no response
          throw new Error('Network error - please check your connection');
        } else {
          // Something else happened
          throw new Error('An unexpected error occurred');
        }
      }
    );
  }

  async get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    const response = await this.client.get<ApiResponse<T>>(url, { params });
    if (response.data.status === 'error') {
      throw new Error(response.data.message || 'Request failed');
    }
    return response.data.data as T;
  }

  async post<T>(url: string, data: unknown): Promise<T> {
    const response = await this.client.post<ApiResponse<T>>(url, data);
    if (response.data.status === 'error') {
      throw new Error(response.data.message || 'Request failed');
    }
    return response.data.data as T;
  }

  async put<T>(url: string, data: unknown): Promise<T> {
    const response = await this.client.put<ApiResponse<T>>(url, data);
    if (response.data.status === 'error') {
      throw new Error(response.data.message || 'Request failed');
    }
    return response.data.data as T;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await this.client.delete<ApiResponse<T>>(url);
    if (response.data.status === 'error') {
      throw new Error(response.data.message || 'Request failed');
    }
    return response.data.data as T;
  }
}

export const api = new ApiService();
