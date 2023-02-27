import axios from 'axios';

const api = axios.create({
    baseURL: 'https://front-end-test.beta-cs.blip.ai/'
});

export default api;