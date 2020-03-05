import axios from 'axios';
import { Authorization } from '../../config/Authorization';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization
    }
})