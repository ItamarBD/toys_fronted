import axios from 'axios';

const TOY_URL = 'http://localhost:3003/toy'

function query() {
    return axios.get(TOY_URL)
        .then(res => {
            console.log('query (ToyService)',res.data);
            return res.data;
        })
}

function getById(toyId) {
    console.log(`${TOY_URL}/:${toyId}`)
    return axios.get(`${TOY_URL}/${toyId}`)
        .then(res => {
            console.log('query toy (ToyService)',res.data);
            return res.data
        })
}

export default {
    query,
    getById
}

