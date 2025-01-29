import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = (url) => {
    const [List, setList] = useState();

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setList(response.List);

            })
            .catch(error => {
                console.error(error);
            });
    }, [url])
    return { List };
}

export default FetchData;
