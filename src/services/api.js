import axios from 'axios';

const api = axios.create({ baseURL: 'http://apiclube/api' });

export default api;