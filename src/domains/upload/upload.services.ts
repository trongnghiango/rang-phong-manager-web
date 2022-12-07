import axios, { AxiosRequestConfig } from 'axios';
import environment from 'environment';
import { ApiResponse } from '../../models/ApiResponse';

export const uploadFileRequest = async (
  userId: string,
  formData: FormData,
  progressCallback?: (progressEvent: ProgressEvent) => void
): Promise<ApiResponse<string[]>> => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    headers: { 'content-type': 'multipart/form-data' },
    params: { userId },
    onUploadProgress: progressCallback,
    validateStatus: (status) => true,
  };

  console.log({ formData });
  const response = await axios.post('/api/uploads', formData, config);

  return response.data;
};

export const deleteFileRequest = async (
  userId: string,
  fileName: string,
  progressCallback?: (progressEvent: ProgressEvent) => void
): Promise<ApiResponse<string>> => {
  const config: AxiosRequestConfig = {
    headers: { 'content-type': 'multipart/form-data' },
    params: { userId, fileName },
    onUploadProgress: progressCallback,
    validateStatus: (status) => true,
  };
  const response = await axios.delete('/api/uploads', config);

  return response.data;
};

export const getListFiles = async (
  userId: string,
  progressCallback?: (progressEvent: ProgressEvent) => void
): Promise<ApiResponse<string>> => {
  const config: AxiosRequestConfig = {
    headers: {
      'content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
    },
    params: { userId },
    onUploadProgress: progressCallback,
    validateStatus: (status) => true,
  };
  const response = await axios.get(environment.app.upload, config);

  return response.data;
};
