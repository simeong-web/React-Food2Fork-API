import axios from 'axios';

const KEY = 'KEY_VALUE'

export default axios.create({
    baseURL: 'food2forksitelink',
    params: {
        query: KEY
    }
})