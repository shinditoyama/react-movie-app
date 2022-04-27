import axios from 'axios';
import { Environment } from '../config';

const api = axios.create({
    baseURL: Environment.BASE_URL
});

export default api;