import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*'
  },
});

const onSuccess = (response) => Promise.resolve(response);
const onError = async ({ response }) => {
  const { data } = response || {};
  const { message } = data;
  if (message === 'Token has expired' || response.status === 422) {
    localStorage.clear()
    window.location.reload()
  }
  return Promise.reject(response)
};

httpClient.interceptors.request.use((req) => {
  if (req.url === '/refresh/token') {
    req.headers['Authorization'] = `Bearer ${localStorage.getItem('refreshToken')}`
  } else {
    req.headers['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`
  }
  return req
}
);
httpClient.interceptors.response.use(onSuccess, onError);

export default httpClient;
