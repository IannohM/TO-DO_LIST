import axios from "axios";
import { useState, useEffect } from "react";

const FetchData = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [url]);

    return { data };
};

export default FetchData;