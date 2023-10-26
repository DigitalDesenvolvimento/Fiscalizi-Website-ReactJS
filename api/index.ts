import axios from 'axios';
import user from './user';

export const context =  axios.create({
    baseURL: "http://172.16.9.122:51026"
});

export const controller = { user }