import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import qs from 'query-string';
import { TIME_OUT_API } from 'constants/api.const';
import CONFIG from '../../config';

const CancelToken = axios.CancelToken.source();
const authorizedRequest: AxiosInstance = axios.create({
  baseURL: CONFIG.REACT_APP_BASE_URL,
  cancelToken: CancelToken.token,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: TIME_OUT_API,
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { arrayFormat: 'separator' }),
  },
});

authorizedRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response?.data?.code >= 400 && response?.data?.code <= 500) {
      // logic code
      throw Object.assign(response?.data ?? {}, {
        message:
          response?.data?.errors?.[0]?.errorMessage || response?.data?.message,
      });
    }
    return response?.data;
  },
  (error: AxiosError<any>) => {
    if (error && error.response && error.response.status === 401) {
      // logic code
    }
    return Promise.reject(error);
  },
);

export default authorizedRequest;
