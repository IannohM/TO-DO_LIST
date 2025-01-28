import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = (path) => {
    const [List, setList] = useState(null);

    useEffect(() => {
        axios.get(path)
            .then(response => {
                setList(response.List);

            })
            .catch(error => {
                console.error(error);
            });
    }, [path])
    return {List};
}

export default FetchData;