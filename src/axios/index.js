import axios from 'axios';

const http = 'http://localhost:8081/api';

const get = async (url, params = {}) => {
  return axios.get(`${http}/${url}`, { params, withCredentials: true }).then((res) => res);
};

const post = async (url, data = {}, extra) => {
  return axios.post(`${http}/${url}`, data, { ...extra, withCredentials: true }).then((res) => res);
};

const put = async (url, data = {}) => {
  return axios.put(`${http}/${url}`, data, { withCredentials: true }).then((res) => res);
};

const del = async (url, data = {}) => {
  return axios.delete(`${http}/${url}`, { data, withCredentials: true }).then((res) => res);
};

export { get, post, put, del };
