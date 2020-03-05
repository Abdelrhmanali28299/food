import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResult(response.data.businesses);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Some thing went wrong');
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [result, errorMessage, searchApi];
};