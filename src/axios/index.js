import axios from 'axios';

const http = 'http://localhost:8081/api';

const get = async (url, params = {}) => {
  return axios.get(`${http}/${url}`, { params }).then((res) => res);
};

const post = async (url, data = {}, extra) => {
  return axios.post(`${http}/${url}`, data, extra).then((res) => res);
};

const put = async (url, data = {}) => {
  return axios.put(`${http}/${url}`, data).then((res) => res);
};

export { get, post, put };
