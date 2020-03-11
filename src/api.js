import axios from 'axios';

export default () => {
    const newAxios = axios.create({
        baseURL: 'http://localhost:8000',
    });
    return newAxios;
}