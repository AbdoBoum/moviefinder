import axios from 'axios';

export const API_KEY = 'fcdb51c1067587b75488f114886c5103';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})
