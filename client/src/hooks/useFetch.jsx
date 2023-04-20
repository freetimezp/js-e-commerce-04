import { useEffect, useState } from 'react';
import { makeRequst } from '../makeRequest';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await makeRequst.get(url);
                //console.log(data);
                setData(res.data.data);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;